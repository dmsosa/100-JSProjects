import { useEffect } from "react";

function Plant() {

    return  (
        <div className="flower-container">
            <div className="blume blume--1">
                <div className="blume__blatter">
                    <div className="blume__blatt blume__blatt--1"></div>
                    <div className="blume__blatt blume__blatt--2"></div>
                    <div className="blume__blatt blume__blatt--3"></div>
                    <div className="blume__blatt blume__blatt--4"></div>
                    <div className="weiss-kreis"></div>
                    {/* licht */}
                </div>
                <div className="blume__stengel">
                    <div className="blume__stengel__blatt blume__stengel__blatt--1"></div>
                </div>
            </div>
            <div className="zweigen-wrapper">
            <div className="wachsen-ans wachsen-ans__1">
                    <div className="zweigen zweigen__1 ">
                        <div className="zweigen__top"></div>
                        <div className="zweigen__bottom"></div>
                    </div>
                </div>
                <div className="wachsen-ans wachsen-ans__2" style={{animationDelay: "0.4s"}}>
                    <div className="zweigen zweigen__2 ">
                        <div className="zweigen__top"></div>
                        <div className="zweigen__bottom"></div>
                    </div>
                </div>
                <div className="wachsen-ans wachsen-ans__3">
                    <div className="zweigen zweigen__3 ">
                        <div className="zweigen__top"></div>
                        <div className="zweigen__bottom"></div>
                    </div>
                </div>
                <div className="wachsen-ans wachsen-ans__4">
                    <div className="zweigen zweigen__4 ">
                        <div className="zweigen__top"></div>
                        <div className="zweigen__bottom"></div>
                    </div>
                </div>
            </div>
            <div className="zweigen__blatter-wrapper">
                <div className="wachsen-ans wachsen-ans--1">
                    <div className="zweigen__blatter zweigen__blatter--1">
                        <div className="zweigen__blatter__top"></div>
                        <div className="zweigen__blatter__bottom"></div>
                        <div className="zweigen__blatter__blatt zweigen__blatter__blatt--1"></div>
                        <div className="zweigen__blatter__blatt zweigen__blatter__blatt--2"></div>
                        <div className="zweigen__blatter__blatt zweigen__blatter__blatt--3"></div>
                        <div className="zweigen__blatter__blatt zweigen__blatter__blatt--4"></div>
                        <div className="zweigen__blatter__blatt zweigen__blatter__blatt--5"></div>
                        <div className="zweigen__blatter__blatt zweigen__blatter__blatt--6"></div>
                        <div className="zweigen__blatter__blatt zweigen__blatter__blatt--7"></div>
                        <div className="zweigen__blatter__blatt zweigen__blatter__blatt--8"></div>
                    </div>
                </div>
                <div className="wachsen-ans wachsen-ans--2">
                <div className="zweigen__blatter zweigen__blatter--2">
                    <div className="zweigen__blatter__top"></div>
                    <div className="zweigen__blatter__bottom"></div>
                    <div className="zweigen__blatter__blatt zweigen__blatter__blatt--1"></div>
                    <div className="zweigen__blatter__blatt zweigen__blatter__blatt--2"></div>
                    <div className="zweigen__blatter__blatt zweigen__blatter__blatt--3"></div>
                    <div className="zweigen__blatter__blatt zweigen__blatter__blatt--4"></div>
                    <div className="zweigen__blatter__blatt zweigen__blatter__blatt--5"></div>
                    <div className="zweigen__blatter__blatt zweigen__blatter__blatt--6"></div>
                    <div className="zweigen__blatter__blatt zweigen__blatter__blatt--7"></div>
                    <div className="zweigen__blatter__blatt zweigen__blatter__blatt--8"></div>
                </div>
                </div>
                <div className="wachsen-ans wachsen-ans--3">
                    <div className="zweigen__blatter zweigen__blatter--3">
                        <div className="zweigen__blatter__top"></div>
                        <div className="zweigen__blatter__bottom"></div>
                        <div className="zweigen__blatter__blatt zweigen__blatter__blatt--1"></div>
                        <div className="zweigen__blatter__blatt zweigen__blatter__blatt--2"></div>
                        <div className="zweigen__blatter__blatt zweigen__blatter__blatt--3"></div>
                        <div className="zweigen__blatter__blatt zweigen__blatter__blatt--4"></div>
                        <div className="zweigen__blatter__blatt zweigen__blatter__blatt--5"></div>
                        <div className="zweigen__blatter__blatt zweigen__blatter__blatt--6"></div>
                        <div className="zweigen__blatter__blatt zweigen__blatter__blatt--7"></div>
                        <div className="zweigen__blatter__blatt zweigen__blatter__blatt--8"></div>
                    </div>
                </div>
            </div>
            <div className="zweig">
                <div className="zweig__blatt__wrapper zweig__blatt__wrapper--1">
                    <div className="zweig__blatt"></div>
                </div>
                <div className="zweig__blatt__wrapper zweig__blatt__wrapper--2">
                    <div className="zweig__blatt"></div>
                </div>
                <div className="zweig__blatt__wrapper zweig__blatt__wrapper--3">
                    <div className="zweig__blatt"></div>
                </div>
                <div className="zweig__blatt__wrapper zweig__blatt__wrapper--4">
                    <div className="zweig__blatt"></div>
                </div>
                <div className="zweig__blatt__wrapper zweig__blatt__wrapper--5">
                    <div className="zweig__blatt"></div>
                </div>
                <div className="zweig__blatt__wrapper zweig__blatt__wrapper--6">
                    <div className="zweig__blatt"></div>
                </div>
                <div className="zweig__blatt__wrapper zweig__blatt__wrapper--7">
                    <div className="zweig__blatt"></div>
                </div>
                <div className="zweig__blatt__wrapper zweig__blatt__wrapper--8">
                    <div className="zweig__blatt"></div>
                </div>
                <div className="zweig__line"></div>
            </div>
            <div className="zweig-2-wrapper wachsen-ans">
                <div className="zweig-2">
                    <div className="zweig-2__blatt zweig-2__blatt--1"></div>
                    <div className="zweig-2__blatt zweig-2__blatt--2"></div>
                    <div className="zweig-2__blatt zweig-2__blatt--3"></div>
                    <div className="zweig-2__blatt zweig-2__blatt--4"></div>
                    <div className="zweig-2__blatt zweig-2__blatt--5"></div>
                    <div className="zweig-2__blatt zweig-2__blatt--6"></div>
                    <div className="zweig-2__blatt zweig-2__blatt--7"></div>
                    <div className="zweig-2__blatt zweig-2__blatt--8"></div>
                    <div className="zweig-2__stock"></div>
                </div>
            </div>


            

            <div className="lange_spriess lange_spriess--1">
                <div className="wachsen-ans" style={{animationDelay: "4s"}}>
                    <div className="spriess spriess--0"></div>
                </div>
                <div className="wachsen-ans" style={{animationDelay: "1.4s"}}>
                    <div className="spriess spriess--1"></div>
                </div>
                <div className="wachsen-ans" style={{animationDelay: "2.1s"}}>
                    <div className="spriess spriess--2"></div>
                </div>
                <div className="wachsen-ans" style={{animationDelay: "3.7s"}}>
                    <div className="spriess spriess--3"></div>
                </div>
            </div>
            <div className="lange_spriess lange_spriess--2">
                <div className="wachsen-ans" style={{animationDelay: "2.4s"}}>
                    <div className="spriess spriess--0"></div>
                </div>
                <div className="wachsen-ans" style={{animationDelay: "2.7s"}}>
                    <div className="spriess spriess--1"></div>
                </div>
                <div className="wachsen-ans" style={{animationDelay: "2.1s"}}>
                    <div className="spriess spriess--2"></div>
                </div>
                <div className="wachsen-ans" style={{animationDelay: "2.2s"}}>
                    <div className="spriess spriess--3"></div>
                </div>
            </div>
            <div className="lange_spriess lange_spriess--3">
                <div className="wachsen-ans" style={{animationDelay: "0.3s"}}>
                    <div className="spriess spriess--0"></div>
                </div>
                <div className="wachsen-ans" style={{animationDelay: "0.4s"}}>
                    <div className="spriess spriess--1"></div>
                </div>
                <div className="wachsen-ans" style={{animationDelay: "2.4s"}}>
                    <div className="spriess spriess--2"></div>
                </div>
                <div className="wachsen-ans" style={{animationDelay: "1.5s"}}>
                    <div className="spriess spriess--3"></div>
                </div>
            </div>
            <div className="lange_spriess lange_spriess--4">
                <div className="wachsen-ans" style={{animationDelay: "1.4s"}}>
                    <div className="spriess spriess--0"></div>
                </div>
                <div className="wachsen-ans" style={{animationDelay: "4.7s"}}>
                    <div className="spriess spriess--1"></div>
                </div>
                <div className="wachsen-ans" style={{animationDelay: "3.1s"}}>
                    <div className="spriess spriess--2"></div>
                </div>
                <div className="wachsen-ans" style={{animationDelay: "1.2s"}}>
                    <div className="spriess spriess--3"></div>
                </div>
            </div>
            <div className="lange_spriess lange_spriess--5">
                <div className="wachsen-ans" style={{animationDelay: "1.2s"}}>
                    <div className="spriess spriess--0"></div>
                </div>
                <div className="wachsen-ans" style={{animationDelay: "2.7s"}}>
                    <div className="spriess spriess--1"></div>
                </div>
                <div className="wachsen-ans" style={{animationDelay: "4.1s"}}>
                    <div className="spriess spriess--2"></div>
                </div>
                <div className="wachsen-ans" style={{animationDelay: "2.2s"}}>
                    <div className="spriess spriess--3"></div>
                </div>
            </div>
            <div className="lange_spriess lange_spriess--6">
                <div className="wachsen-ans" style={{animationDelay: "0.4s"}}>
                    <div className="spriess spriess--0"></div>
                </div>
                <div className="wachsen-ans" style={{animationDelay: "2.7s"}}>
                    <div className="spriess spriess--1"></div>
                </div>
                <div className="wachsen-ans" style={{animationDelay: "1.1s"}}>
                    <div className="spriess spriess--2"></div>
                </div>
                <div className="wachsen-ans" style={{animationDelay: "3.2s"}}>
                    <div className="spriess spriess--3"></div>
                </div>
            </div>
            <div className="lange_spriess lange_spriess--7">
                <div className="wachsen-ans" style={{animationDelay: "3.4s"}}>
                    <div className="spriess spriess--0"></div>
                </div>
                <div className="wachsen-ans" style={{animationDelay: "1.7s"}}>
                    <div className="spriess spriess--1"></div>
                </div>
                <div className="wachsen-ans" style={{animationDelay: "0.1s"}}>
                    <div className="spriess spriess--2"></div>
                </div>
                <div className="wachsen-ans" style={{animationDelay: "2.2s"}}>
                    <div className="spriess spriess--3"></div>
                </div>
            </div>
        </div>
    )

    

    
}
export default Plant;