
function ReviewPage11111() {

    const data = {
        review_id : 1,

        user_name: "win",

        product_title: "iphone 13",

        content: "สินค้าตรงปกครับ ส่งไว ชอบมากครับ",

    }


    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let randomRating = getRandomInt(4, 4);


    return (
        <>
            <div className="container mx-auto">
                <div class="card text-primary-content w-auto ">
                    <div class="card-body">
                        <div class="card-review-user">
                            <p class="text-black">{data.user_name}</p>
                        </div>

                        <span className="text-yellow-500">
                            {"★".repeat(randomRating)}
                            {"☆".repeat(5 - randomRating)}

                        </span>
                    <div class="card-review-product">
                        <p class="text-black">Product : {data.product_title} </p>
                    </div>
                    <div class="card-review-content text-black">
                        <p> {data.content} </p>
                    </div>
                    <div class="pic max-w-[100px] max-h-[130px] flex gap-3">
                        <img src="https://down-bs-th.img.susercontent.com/th-11134103-22110-p88jlr15psjv50.webp" alt="" /> 
                       
                    </div>
                </div>
            </div>
        </div >
        <hr />
        </>
    )
}

export default ReviewPage11111