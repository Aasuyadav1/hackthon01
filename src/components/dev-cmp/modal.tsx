//TSX code 
import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
/*//  dev-Modal css animation 
.Modal-Overlay {
  animation: modal-overlayShow 400ms cubic-bezier(0.16, 1, 0.3, 1);
}
.Modal-Content {
  animation: modal-contentShow 400ms cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes modal-overlayShow {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes modal-contentShow {
  from {
    opacity: 0;
    transform: translate(-50%, -48%) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}*/

type ModalProps = {
  title?: string;
  children: React.ReactNode;
  modalBtn: React.ReactNode;
  closeIcon?: boolean;
  contentProps?: React.ComponentProps<typeof Dialog.Content>;
} & React.ComponentProps<typeof Dialog.Root>;

export const ModalTrigger = ({ children }: { children: React.ReactNode }) => {
  return <Dialog.Trigger asChild>{children}</Dialog.Trigger>;
};
const DevModal = ({
  title,
  children,
  modalBtn,
  closeIcon = true,
  contentProps,
  ...props
}: ModalProps) => {
  return (
    <>
      <Dialog.Root {...props}>
        <Dialog.Trigger asChild>{modalBtn}</Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="Modal-Overlay inset-0 fixed bg-black/50 z-50" />
          <Dialog.Content
            {...contentProps}
            className={`Modal-Content w-[95%] md:w-full  fixed z-50 top-[50%] left-[50%] max-w-7xl translate-x-[-50%] translate-y-[-50%] rounded-xl bg-[#F5F8FF] text-black dark:bg-[#ffffff] border border-[#ee3006]/30  ${contentProps?.className}`}
          >
            {(closeIcon || title) && (
              <div className="flex items-start justify-end w-full p-2">
                {title && (
                  <Dialog.Title className="flex-grow font-semibold text-[#ee3006] text-lg">
                    {title}
                  </Dialog.Title>
                )}
                <Dialog.Close>🗙</Dialog.Close>
              </div>
            )}
            {children}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
};

export default DevModal;
