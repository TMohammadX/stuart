import { useState, useEffect } from "react";
import { sanitize } from "../../utils/miscellaneous.js";
import Loading from "./Nloading";
import { HiOutlineArrowSmRight } from "react-icons/hi";

const NewsletterForm = ({ status, message, onValidated }) => {
  const [error, setError] = useState(null);
  const [email, setEmail] = useState(null);

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  /**
   * Handle form submit.
   *
   * @return {{value}|*|boolean|null}
   */
  const handleFormSubmit = () => {
    setError(null);

    if (!email) {
      setError("Please enter a valid email address");
      return null;
    }

    const isFormValidated = onValidated({ EMAIL: email });

    // On success return true
    return email && email.indexOf("@") > -1 && isFormValidated;
  };

  /**
   * Handle Input Key Event.
   *
   * @param event
   */
  const handleInputKeyEvent = (event) => {
    setError(null);
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      handleFormSubmit();
    }
  };

  /**
   * Extract message from string.
   *
   * @param {String} message
   * @return {null|*}
   */
  const getMessage = (message) => {
    if (!message) {
      return null;
    }
    const result = message?.split("-") ?? null;
    if ("0" !== result?.[0]?.trim()) {
      return sanitize(message);
    }
    const formattedMessage = result?.[1]?.trim() ?? null;
    return formattedMessage ? sanitize(formattedMessage) : null;
  };

  return (
    <div className="newsletter-con">
      <h3 className="newsletter-text">
        Get the latest news, updates, discounts and offers straight to your
        inbox.
      </h3>

      <div className="email-input-con">
        <input
          onChange={(event) => setEmail(event?.target?.value ?? "")}
          type="email"
          placeholder="Your email"
          className="email-input"
          onKeyUp={(event) => handleInputKeyEvent(event)}
        />
        <button onClick={handleFormSubmit} className="sub">
          <HiOutlineArrowSmRight />
        </button>
      </div>

      <p className="pp-news">
        By signing up to receive emails from STUART, you agree to our Privacy
        Policy. We treat your info responsibly. Unsubscribe anytime.
      </p>
      <div className="min-h-42px">
        {"error" === status || error ? (
          <div
            className="error-message"
            dangerouslySetInnerHTML={{ __html: error || getMessage(message) }}
          />
        ) : null}
        {"success" === status && "error" !== status && !error && (
          <div
            className="success-message"
            dangerouslySetInnerHTML={{ __html: sanitize(message) }}
          />
        )}
      </div>
    </div>
  );
};

export default NewsletterForm;
