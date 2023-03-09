import MailchimpSubscribe from "react-mailchimp-subscribe";
import "./footer.css";
import NewsletterForm from "./NewsletterForm";

const MAILCHIMP_URL =
  "https://stuart.us10.list-manage.com/subscribe/post?u=3f2c668436d22c9f80dd841e5&amp;id=5dfdfabd18&amp;f_id=008bcde5f0";

export const Newsletter = () => {
  return (
    <MailchimpSubscribe
      url={MAILCHIMP_URL}
      render={(props) => {
        const { subscribe, status, message } = props || {};
        return (
          <NewsletterForm
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
          />
        );
      }}
    />
  );
};
