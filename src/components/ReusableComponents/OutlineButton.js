import Image from "next/image"
import PropTypes from "prop-types";

const OutlineButton = ({imageSrc, label, hrefLink, bgColor, textColor, moreStyle}) => {
    return (
        <button className={`${bgColor} ${textColor} ${moreStyle} font-semibold py-3 px-4 border border-white hover:border-transparent rounded-xl hover:bg-[#ecbc42] hover:shadow-md hover:shadow-[#39374d] hover:text-[#1f1e29]  transition ease-in hover:-translate-y-1 hover:scale-110 duration-200`}>
            <a href={hrefLink} className="flex items-center">
                { imageSrc ? <Image src={imageSrc} width={16} /> : ""} {label}
            </a>
        </button>
    )
}


OutlineButton.propTypes = {
    imageSrc: PropTypes.string,
    label: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
    hrefLink: PropTypes.string,
    moreStyle: PropTypes.string,
};

OutlineButton.defaultProps = {
    imageSrc: null,
    label: "",
    bgColor: "bg-transparent",
    textColor: "text-white",
    hrefLink: "/",
    moreStyle: "",
};


export default OutlineButton