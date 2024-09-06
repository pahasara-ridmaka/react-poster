import classes from "./Modal.module.css";
export default function Modal({ children, onModalClick }) {
  return (
    <>
      <div className={classes.backdrop} onClick={onModalClick} />
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </>
  );
}
