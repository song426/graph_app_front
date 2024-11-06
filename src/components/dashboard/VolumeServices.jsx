import React, { useEffect } from "react";
import HeadTitle from "./HeadTitle";
import { useDispatch, useSelector } from "react-redux";
import { fetchVolumeServices } from "../../redux/slices/apiSlices";
import { BarChart, Bar, Legend, ResponsiveContainer } from "recharts";

const VolumeServices = () => {
  const state = useSelector((state) => state.apis.volumeServicesData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchVolumeServices());
  }, [dispatch]); //dispatch가 변경될 때 한번 실행

  //   console.log(state);

  const formatLegendValue = (name, legendObj) => {
    // console.log(value, name);
    const initialValue = 0;
    const totalValue = state?.reduce((acc, cur) => {
      if (Object.keys(cur).includes(legendObj.dataKey)) {
        // name.dataKey가 cur 객체의 키에 포람되어 있는지 확인
        return acc + cur[legendObj.dataKey]; // 포함되어 있다면 acc에 누적해서 더함
      } else {
        return acc;
      }
    }, initialValue);

    return (
      <span className="custom-legend-text-group flex items-center gap-[5px]">
        <span className="custom-legend-item-text">{name}</span>
        <span className="custom-legend-item-text text-xs text-[#151d48] dark:text-gray-300 font-medium">
          {totalValue}
        </span>
      </span>
    );
  };

  return (
    <div className=" block-wrap lg:ml-[14px] lg:my-[14px]  sm:w-[calc(50%-7px)] lg:w-auto sm:ml-[14px] w-full  sm:mt-0 mt-[14px]">
      <HeadTitle title=" Volume vs Services Level" />
      <div className="stacked-bar-chart w-full h-[250px] mb-5">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={state}
            margin={{
              top: 5,

              left: -20,
              bottom: 5,
            }}
          >
            <Legend
              iconType="circle"
              iconSize={10}
              formatter={formatLegendValue}
            />
            <Bar
              dataKey="volume"
              fill="#0095ff"
              radius={[0, 0, 4, 4]}
              barSize={16}
              stackId="a"
            />
            <Bar
              dataKey="services"
              fill="#00e096"
              radius={[4, 4, 0, 0]}
              barSize={16}
              stackId="a"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default VolumeServices;
