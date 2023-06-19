import { Breadcrumb, Divider, Tabs } from "antd";
import ProjectDone from "./ProjectDone";
const Projects = () => {
  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item>Projets</Breadcrumb.Item>
      </Breadcrumb>
      <Divider />
      <Tabs defaultActiveKey="tab1">
        <Tabs.TabPane tab="tab1" key="tab1">
          <div>test1</div>
        </Tabs.TabPane>
        <Tabs.TabPane tab="En Cours" key="tab2">
          <div>test2</div>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Réaliser" key="tab3">
          <div>
            <ProjectDone />
          </div>
          <div>
            <ProjectDone />
          </div>
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};
export default Projects;
