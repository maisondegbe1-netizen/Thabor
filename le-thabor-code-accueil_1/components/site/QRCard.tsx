import Image from "next/image";

// Génère un QR pointant vers la page "commande sur place" de la table 01
// (voir app/(commande-sur-place)/table/[tableId]/page.tsx dans l'architecture).
// L'API qrserver.com est utilisée pour la démo ; en production, générer le
// QR côté serveur avec la librairie `qrcode` (voir écran admin "QR Codes").
const QR_SRC =
  "https://api.qrserver.com/v1/create-qr-code/?size=160x160&color=2B2320&bgcolor=FFFFFF&data=https://lethabor.bj/table/01";

export default function QRCard() {
  return (
    <div className="glass relative flex w-56 flex-col items-center gap-3 rounded-3xl p-5 shadow-soft">
      <span className="pointer-events-none absolute -inset-2.5 animate-[pulsering_2.4s_ease-out_infinite] rounded-3xl border-2 border-rose" />
      <span className="pointer-events-none absolute -inset-2.5 animate-[pulsering_2.4s_ease-out_infinite] rounded-3xl border-2 border-rose [animation-delay:1.2s]" />

      <div className="relative overflow-hidden rounded-2xl border-4 border-white">
        <Image src={QR_SRC} alt="QR Code — Scanner pour commander à table" width={160} height={160} unoptimized />
        <span className="pointer-events-none absolute inset-x-[8%] h-0.5 animate-[scanmove_2.6s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-rose to-transparent" />
      </div>

      <p className="text-center font-display text-lg leading-tight text-ink">
        Scannez pour
        <br />
        commander
      </p>
      <p className="text-center font-mono text-[0.6rem] text-stone">
        Table 01 · sans connexion requise
      </p>
    </div>
  );
}
