import { Helmet } from "react-helmet-async";
import ContactsView from "src/sections/contacts";

const Contacts = () => {
  return (
    <>
      <Helmet>
        <title> Nodirbek | Contacts </title>
      </Helmet>
      <ContactsView />
    </>
  );
};

export default Contacts;
