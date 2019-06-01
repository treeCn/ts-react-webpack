/*
 * @Description: 函数组件的写法
 * @Author: 水痕
 * @Github: https://github.com/kuangshp
 * @Email: 332904234@qq.com
 * @Company:
 * @Date: 2019-06-01 13:13:01
 * @LastEditors: 水痕
 * @LastEditTime: 2019-06-01 13:16:04
 */
import * as React from 'react';
interface Props {
  title: string;
}
export default function Counter2(props: Props) {
  return (
    <div>
      <Item title={props.title} />
    </div>
  );
}

//React.SFC<Props>修饰的表示无状态组件
const Item: React.SFC<Props> = (props: Props) => {
  return <li>{props.title}</li>;
};
