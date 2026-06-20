import { LogoLockup } from "@elite/ui/components/Logo";

export default function FullLogo({ className }: { className?: string } = {}) {
  return (
    <LogoLockup className={className} label="Elite Kitchens & Bathrooms">
      <g
        className="fill-primary"
        fontFamily="Montserrat, system-ui, sans-serif"
        textAnchor="middle"
      >
        <text fontSize="104" fontWeight="600" letterSpacing="32" x="635" y="999">
          KITCHENS
        </text>
        <text fontSize="68" fontWeight="600" letterSpacing="32" x="648" y="1080">
          &
        </text>
        <text fontSize="48" fontWeight="500" letterSpacing="22.5" x="643" y="1150">
          BATHROOMS
        </text>
      </g>
    </LogoLockup>
  );
}
