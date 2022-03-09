import React,{useRef} from 'react'

function OrderItem({d,s}) {
    const accordion = useRef(null)
    let NameArr = d.productName.split(" ")
    
    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
                <div
                    className={s == "success"?'accordion-button bg-white text-success ':'accordion-button bg-white text-danger '}
                    onClick={()=> accordion.current.classList.toggle("show")}
               
                >
                    {NameArr[0] + " " + NameArr[1] + " " + NameArr[2] + " " + NameArr[3]}
                </div>
            </h2>
            <div
                id="collapseOne"
                ref={accordion}
                className="accordion-collapse collapse "
               
            >
                <div className="accordion-body">
                    <div className="d-flex w-full  justify-content-between">
                        <h4 className='font-weight ' >Product Stock </h4> <span className='text-end h2'>{d.stock}</span>
                    </div>
                    <hr className='hrBox' />
                    <div className="d-flex w-full  justify-content-between">
                        <h4 className='font-weight ' >Total Price </h4> <span className='text-end h2'>{d.price}</span>
                    </div>
                    <hr className='hrBox' />
                    <div className="d-flex w-full  justify-content-between">
                        <h4 className='font-weight ' >Order Date </h4> <span className='text-end h2'>{d.OrderDate.split(",")[0]}</span>
                    </div>
                    <hr className='hrBox' />
                    <div className="d-flex w-full  justify-content-between">
                        <h4 className='font-weight ' >Order Status </h4> <span className= {s == "success"?'text-end text-success h2':'text-end text-danger h2'}>{s}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderItem