import React from "react";

export default class Message extends React.Component {
    onFormSubmit(event) {
        event.preventDefault();
        const button = document.getElementsByClassName("contact__message__button")[0];

        button.classList.add("contact__message__button--sent");

        setTimeout(() => {
            button.classList.remove("contact__message__button--sent");
        }, 1000);
    };
    
    render() {
        return (
            <div className="contact__message">
                <form
                    autoComplete="on"
                    onSubmit={this.onFormSubmit.bind(this)}
                >
                    <input
                        name="fullname"
                        placeholder="Full Name"
                        type="text"
                    />

                    <input
                        name="email"
                        placeholder="Email"
                        type="email"
                    />

                    <input
                        name="phone"
                        placeholder="Phone Number (with area code)"
                        type="tel"
                    />

                    <textarea
                        name="emailBody"
                        placeholder="Message"
                        type="text"
                    />

                    <button
                        className="contact__message__button"
                    >
                        SEND
                    </button>
                </form>
            </div>

        );
    };
};
