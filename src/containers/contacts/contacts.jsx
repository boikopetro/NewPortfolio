import PageHeaderContent from "../../components/pageHeaderContent/pageHeaderContent";
import {BsInfoCircleFill} from "react-icons/bs";

const Contacts = () => {
    return (
        <section id="contacts" className="contacts">
            <PageHeaderContent
                headerText = "My Contacts"
                icon = {<BsInfoCircleFill size={40}/>}
            />
        </section>
    );
};

export default Contacts;