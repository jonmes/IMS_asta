class APIFeatures {
    constructor(query, queryStr) {
        this.query = query;
        this.queryStr = queryStr;
    }
    searchByUnitOfItem() {
        const keyword = this.queryStr.keyword ? {
            unitOfItem: {
                $regex: this.queryStr.keyword,
                $options: 'i'
            }
        } : {}
        console.log(keyword);
        this.query = this.query.find({...keyword });
        return this;
    }

    searchByconditiontoGoods() {
        const keyword = this.queryStr.keyword ? {

            conditiontoGoods: {
                $regex: this.queryStr.keyword,
                $options: 'i'
            },
        } : {}

        console.log(keyword);

        this.query = this.query.find({...keyword });
        return this;
    }

    searchBycategoryOfAsset() {
        const keyword = this.queryStr.keyword ? {

            categoryOfAsset: {
                $regex: this.queryStr.keyword,
                $options: 'i'
            },
        } : {}

        console.log(keyword);

        this.query = this.query.find({...keyword });
        return this;
    }
    filter() {

        const queryCopy = {...this.queryStr };

        // Removing fields form the query to filter out because mongodb doesn't have keyword

        const removeFields = ['keyword', 'limit', 'page'];
        removeFields.forEach(el => delete queryCopy[el]);


        // Advanced filter for count
        let queryStr = JSON.stringify(queryCopy);
        queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, match => `$${match}`);

        console.log(queryStr);
        this.query = this.query.find(JSON.parse(queryStr));
        return this;
    }

    pagination(resPerPage) {
        const currentPage = Number(this.queryStr.page) || 1;
        const skip = resPerPage * (currentPage - 1);

        this.query = this.query.limit(resPerPage).skip(skip);
        return this;

    }
}
module.exports = APIFeatures;