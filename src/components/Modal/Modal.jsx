import ReactDOM from "react-dom"

const Modal = ({ children }) => {
  return ReactDOM.createPortal(
    <div className="fixed -top-2 -bottom-2 -right-2 -left-2 bg-gray-800 flex justify-center items-center bg-opacity-90">
      {children}
    </div>,
    document.getElementById('modal')
  )
}
export default Modal