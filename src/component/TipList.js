import "./TipList.css"
const TipList = (props) => {
    const list_tip = props.items.map(item => <li key={item.id}>{item.name} offering a tip of {item.tip} rs.</li>)
    return (
        <main className="main_box">
            <h3 className="customer_list_heading">Customer List</h3>
            <hr />
            <ul className="customer_list">
                {list_tip}
            </ul>


        </main>
    )

}
export default TipList;