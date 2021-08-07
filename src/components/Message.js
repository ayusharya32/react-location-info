function Message({ showMessage}) {
    return (
        <div className={showMessage ? "message show-message" : "message"}>
            <h2>Invalid City Name</h2>
        </div>
    )
}

export default Message
