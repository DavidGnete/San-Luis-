"use client";

import { useState } from "react";
import { ethers } from "ethers";
import styles from "../styles/Component/reserva.module.css";

declare global {
  interface Window {
    ethereum?: any;
  }
}

export default function FormReserva() {
  const [nombre, setNombre] = useState("");
  const [fecha, setFecha] = useState("");
  const [personas, setPersonas] = useState("");
  const [plan, setPlan] = useState("basico");


  // Estado para MetaMask / pagos
  const [connectedAccount, setConnectedAccount] = useState(null);
  const [paymentStatus, setPaymentStatus] = useState("");

  // --- CONFIGURA AQUI ---
  const RECEIVER = "0x6275f62F82C34940e2E0161c81B02Ec426Ff0362"; // tu dirección pública

  // Precios por plan (en ETH). Cámbialos según tu política.
  type PlanType = "basico" | "completo" | "vip";

  const PLAN_PRICES: Record<PlanType, string> = {
    basico: "0.00001",
    completo: "0.002",
    vip: "0.003",
  };
  // ----------------------

  const handleSubmit = (e) => {
    e.preventDefault();

    const telefono = "573108006524"; // 📞 tu número de WhatsApp
    const mensaje = `Hola, soy ${nombre}. Quiero reservar para la excursión:\n- Fecha: ${fecha}\n- Personas: ${personas}\n- Plan elegido: ${plan}`;

    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  };

  // ---------------- MetaMask / pago ----------------
  const isMetaMaskInstalled = () => typeof window !== "undefined" && !!window.ethereum;

  const connectWallet = async () => {
    try {
      if (!isMetaMaskInstalled()) {
        setPaymentStatus("Instala MetaMask o activa la extensión en Brave.");
        return;
      }
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      setConnectedAccount(accounts[0]);
      setPaymentStatus("Wallet conectada: " + accounts[0]);
    } catch (err) {
      const errorMessage = (err as any)?.message || String(err);
      console.error(err);
      setPaymentStatus("Conexión cancelada o error: " + errorMessage);
    }
  };

  const payWithMetaMask = async () => {
    try {
      if (!isMetaMaskInstalled()) {
        setPaymentStatus("Instala MetaMask.");
        return;
      }

      // Si no está conectada la wallet del comprador, pedir conexión
      if (!connectedAccount) {
        setPaymentStatus("Conectando a MetaMask...");
        await connectWallet();
      }

      setPaymentStatus("Preparando transacción...");

      const sepoliaChainId = "0xaa36a7";
    const currentNetwork = await window.ethereum.request({ method: "eth_chainId" });
    if (currentNetwork !== sepoliaChainId) {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: sepoliaChainId }],
      });
      console.log("✅ Red cambiada a Sepolia");
    }

      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
  


      // Cantidad según plan
      const ethAmount = PLAN_PRICES[plan as PlanType] || PLAN_PRICES.basico;
      const value = ethers.parseEther(ethAmount);

      const tx = {
        to: RECEIVER,
        value: value,
      };

      // Esto abrirá MetaMask para que el comprador confirme
      const network = await provider.getNetwork();
      console.log("Red actual:", network);

      const txResponse = await signer.sendTransaction(tx);
      setPaymentStatus(`Transacción enviada. Hash: ${txResponse.hash} — esperando confirmación...`);

      // Espera 1 confirmación (opcional)
      await txResponse.wait(1);
      setPaymentStatus(`Transacción confirmada ✅ Hash: ${txResponse.hash}`);
    } catch (err) {
      console.error(err);
      const errorMessage = (err as any)?.message || String(err);
      setPaymentStatus("Error al enviar transacción: " + errorMessage);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formReserva}>
      <h3>Reserva tu cupo para Hotel la Casona</h3>

      <input
        type="text"
        placeholder="Tu nombre"
        required
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />

      <input
        type="date"
        required
        value={fecha}
        onChange={(e) => setFecha(e.target.value)}
      />

      <input
        type="number"
        placeholder="Número de personas"
        required
        value={personas}
        onChange={(e) => setPersonas(e.target.value)}
      />

      <select value={plan} onChange={(e) => setPlan(e.target.value)}>
        <option value="basico">Plan Básico — {PLAN_PRICES.basico} ETH</option>
        <option value="completo">Plan Completo — {PLAN_PRICES.completo} ETH</option>
        <option value="vip">Plan VIP — {PLAN_PRICES.vip} ETH</option>
      </select>

      <div>
        <button type="submit" id={styles.WhatsAppForm}>Reservar por WhatsApp</button>

        {/* Botón de pago: NO es type="submit" para no enviar el form por WhatsApp */}
        <button type="button" id={styles.bitcon} onClick={payWithMetaMask}>
          Paga con criptomoneda
        </button>
      </div>

      <div style={{ marginTop: 12, fontSize: 14 }}>
        <div><strong>Estado pago:</strong> {paymentStatus}</div>
        <div><strong>Cuenta conectada:</strong> {connectedAccount || "No conectada"}</div>
      </div>
    </form>
  );
}

