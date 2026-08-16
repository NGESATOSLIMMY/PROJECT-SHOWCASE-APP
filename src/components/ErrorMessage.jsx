function ErrorMessage({ message = "Something went wrong please try again later." }) {
    return (
        <div className="error-message">
            <p>{message}</p>
        </div>
    )
}  

export default ErrorMessage;