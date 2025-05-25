export default function Confirmation(props) {

    if (props.confirm) {
        return (
        <>
        <div className="fixed inset-0 bg-black/50">
        <div className="fixed bg-white w-full bottom-0 rounded-lg p-5 lg:w-1/3 lg:left-1/2 lg:-translate-x-1/2 lg:bottom-1/2 lg:translate-y-1/2 ">
            <img src="./assets/images/icon-order-confirmed.svg" alt="confirmed" />
            <h1 className="text-5xl font-semibold mt-3 lg:text-3xl">Order Confirmed</h1>
            <p className="text-rose-900/60 mt-3">We hope you enjoy your food!</p>
            <div className="text-sm">
            {props.expression}
            </div>
        </div>
            
        </div>
        </>
    )
    }
    
}