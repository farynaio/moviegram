import React from "react"

const List = ({ list, title, className, Item }) => (
  <section className={className}>
    {title && <header>{title}</header>}
    <ul>
      {list.map((s, i) => (
        <li key={i}>{Item ? <Item {...s} /> : s}</li>
      ))}
    </ul>
    {!list.length && <span className="no-records">no records</span>}
  </section>
)

List.defaultProps = {
  className: "",
  itemName: "record"
}

export default List
