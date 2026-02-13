interface IconifyIconProps {
  icon: string;
  className?: string;
  width?: string | number;
}

export default function IconifyIcon({ icon, className, width = 24 }: IconifyIconProps) {
  return (
    // @ts-ignore
    <iconify-icon icon={icon} class={className} width={width}></iconify-icon>
  );
}
