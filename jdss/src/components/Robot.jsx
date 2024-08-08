function Robot() {
    return (
        <div className="robot-wrapper">
            <div className="robot">
                <div className="robot-kopf">
                    <div className="robot-kopf-panel">
                        <div className="robot-kopf-panel-licht"></div>
                    </div>
                    <div className="robot-kopf-augen robot-kopf-augen--left"></div>
                    <div className="robot-kopf-augen robot-kopf-augen--right"></div>
                    <div className="robot-kopf-ohr robot-kopf-ohr--left"></div>
                    <div className="robot-kopf-ohr robot-kopf-ohr--right"></div>
                </div>
                <div className="robot-korper">
                    <div className="robot-arme robot-arme-left">
                        <div className="robot-arme-schultern"></div>
                        <div className="robot-arme--1"></div>
                        <div className="robot-arme--2"></div>
                    </div>
                    <div className="robot-arme robot-arme-right">
                        <div className="robot-arme-schultern"></div>
                        <div className="robot-arme--1"></div>
                        <div className="robot-arme--2"></div>
                    </div>
                </div>
                <div className="robot-zahnrad">
                    <div className="robot-zahnrad-zahn robot-zahnrad-zahn--1"></div>
                    <div className="robot-zahnrad-zahn robot-zahnrad-zahn--2"></div>
                    <div className="robot-zahnrad-zahn robot-zahnrad-zahn--3"></div>
                    <div className="robot-zahnrad-zahn robot-zahnrad-zahn--4"></div>
                </div>
            </div>
        </div>
    )
}

export default Robot;