import Section from "../../Section/Section";
import {myServices} from "../../../helpers/data";
import ServiceCard from "../../ServiceCard/ServiceCard";

const MyServices=()=>{
    return(
        <Section title="خدمات من" subTitle="من ارائه می کنم" area="Services">
            <div className="myServiceContainer">
                {myServices.map(service => (<ServiceCard service={service} key={service.id}/>))}
            </div>
        </Section>
    )
}

export default MyServices