import React, { useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import '../style/browse.css';

function ModalTabs({ selectedProperty }) {
  const [activeTab, setActiveTab] = useState('desc');

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
        {activeTab === 'desc' && selectedProperty && (
          <div>
            <p>{selectedProperty.description}</p>
          </div>
        )}
      </Tab>
      <Tab eventKey="fPlan" title="Floorplan">
        {activeTab === 'fPlan' && (
          <div>
            Tab content for Floorplan
          </div>
        )}
      </Tab>
      <Tab eventKey="gMap" title="Google Maps">
        {activeTab === 'gMap' && (
          <div>
            Tab content for Google Maps
          </div>
        )}
      </Tab>
    </Tabs>
  );
}

export default ModalTabs;
