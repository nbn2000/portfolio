import { Helmet } from "react-helmet-async";
import ContactsView from "src/sections/contacts";

const Contacts = () => {
  return (
    <>
      <Helmet>
        <title> Nodirbek | Contacts </title>
        <meta
          name="description"
          content="Contact Welcome to the portfolio of Nodirbek Makhmudov, a skilled front-end developer passionate about crafting beautiful and functional web experiences. Explore my projects and skills here."
        />
        <meta
          name="twitter:description"
          content="Contact Twitter Welcome to the portfolio of Nodirbek Makhmudov, a skilled front-end developer passionate about crafting beautiful and functional web experiences. Explore my projects and skills here."
        />
        <meta
          property="og:description"
          content="Contact OG Welcome to the portfolio of Nodirbek Makhmudov, a skilled front-end developer passionate about crafting beautiful and functional web experiences. Explore my projects and skills here."
        />
      </Helmet>
      <ContactsView />
    </>
  );
};

export default Contacts;
