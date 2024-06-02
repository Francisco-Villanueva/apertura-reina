export function ContactButton({ phoneNumber }: { phoneNumber: string }) {
  const whatsappURL = `https://wa.me/${phoneNumber}`;

  return (
    <a className="  bg-primary/15 rounded-sm    px-2 " href={whatsappURL}>
      {phoneNumber}
    </a>
  );
}
