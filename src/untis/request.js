export default (po) => {

    uni.showLoading({
        title: '加载中...'
    })

    return new Promise((j, eer) => {
        wx.request({
            ...po,
            success(res) {
                j(res)
            },
            fail(res) {
                eer(res)
            },
            complete() {
                uni.hideLoading()
            }

        })


    })

}

// uni.showLoading