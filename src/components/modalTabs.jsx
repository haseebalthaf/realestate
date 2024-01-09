import React, { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import "../style/browse.css";

function ModalTabs({ selectedProperty }) {
  const [activeTab, setActiveTab] = useState("desc");

  const handleTabSelect = (key) => {
    setActiveTab(key);
  };

  return (
    <Tabs
      activeKey={activeTab}
      onSelect={handleTabSelect}
      className="modalTabsContainer"
    >
      <Tab eventKey="desc" title="Description">
        {activeTab === "desc" && selectedProperty && (
          <div>
            <p>{selectedProperty.description}</p>
          </div>
        )}
      </Tab>
      <Tab eventKey="fPlan" title="Floorplan">
        {activeTab === "fPlan" && selectedProperty && (
          <div>
            <img className="floorPlan" src={selectedProperty.floorplan} alt="Floorplan" />
          </div>
        )}
      </Tab>
      <Tab eventKey="gMap" title="Google Maps">
        {activeTab === "gMap" && 
        <div>
            <iframe
              title="Google Map"
              width="100%"
              height="400"
              frameBorder="0"
              style={{ border: 0 }}
              src={selectedProperty.url}
              allowFullScreen
            ></iframe>  
        </div>}
      </Tab>
    </Tabs>
  );
}

export default ModalTabs;
