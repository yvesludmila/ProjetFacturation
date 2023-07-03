import {
  Breadcrumb,
  Divider,
  Dropdown,
  MenuProps,
  Skeleton,
  Space,
  Tabs,
} from "antd";
import ProjectDone from "./ProjectDone";
import ProjectInProgress from "./ProjectInProgress";
import { DownOutlined } from "@ant-design/icons";
import ProjectList from "./ProjectList";
import { useState } from "react";
const Projects = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const showSkeleton = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };
  const items: MenuProps["items"] = [
    {
      label: "Avec deadline",
      key: "0",
    },
    {
      label: "A long terme",
      key: "1",
    },
  ];

  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item>Projets</Breadcrumb.Item>
      </Breadcrumb>
      <Divider style={{ margin: 0 }} />

      <Tabs defaultActiveKey="tab1" onTabClick={showSkeleton}>
        <Tabs.TabPane tab="Projets" disabled={loading} key="tab1">
          <Skeleton loading={loading}>
            <div>
              <ProjectList />
            </div>
          </Skeleton>
        </Tabs.TabPane>
        <Tabs.TabPane tab="En Cours" disabled={loading} key="tab2">
          <Skeleton loading={loading}>
            <div style={{ display: "flex", gap: 20 }}>
              <ProjectInProgress />
              <ProjectInProgress />
            </div>
          </Skeleton>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Réaliser" disabled={loading} key="tab3">
          <Skeleton loading={loading}>
            <div>
              <ProjectDone />
            </div>
            <div>
              <ProjectDone />
            </div>
          </Skeleton>
        </Tabs.TabPane>
        <Tabs.TabPane
          tab={
            <Dropdown menu={{ items }} trigger={["click"]}>
              <Space>
                selectioner
                <DownOutlined />
              </Space>
            </Dropdown>
          }
          key="tab4"
        ></Tabs.TabPane>
      </Tabs>
    </div>
  );
};
export default Projects;
