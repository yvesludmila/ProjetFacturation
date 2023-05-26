import { Card, Input } from "antd";
import React from "react";
const { Search } = Input;
const onSearch = (value: string) => console.log(value);
const FilterClient = () => {
  return (
    <div style={{margin:"20px"}}>
      <Card>
        <Search
          placeholder="input search text"
          onSearch={onSearch}
          enterButton
        />
      </Card>
    </div>
  );
};

export default FilterClient;
