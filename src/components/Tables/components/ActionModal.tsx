import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
type ActionType = "delete" | "confirm";
type ConfigType = {
  title: string;
  message: string;
};
interface ActionModalProps {
  type: ActionType;
  action: () => void;
  dialogOpen: boolean;
  dialogToggleAction: () => void;
}

const Config: Record<ActionType, ConfigType> = {
  confirm: {
    title: "Confirmar",
    message: "Confirmar asistencia del cliente.",
  },
  delete: {
    title: "Borrar",
    message:
      "Se borrara los datos de compra y la cantidad de entradas volveran a estar disponibles.",
  },
};
export function ActionModal({
  type,
  action,
  dialogOpen,
  dialogToggleAction,
}: ActionModalProps) {
  const { title, message } = Config[type];
  return (
    <Dialog open={dialogOpen}>
      <DialogTrigger>{title}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Seguro de realizar esta accion?</DialogTitle>
          <DialogDescription>{message}</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            onClick={() => console.log("pe")}
            variant={type === "confirm" ? "outline" : "destructive"}
          >
            {title}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
