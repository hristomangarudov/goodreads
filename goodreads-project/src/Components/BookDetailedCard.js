function BookDetailedCard(props) {
    return(
        <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1651426717i/60784641._SX300_.jpg" className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural lead-in
                to additional content. This content is a little bit longer.
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
 
}

export default BookDetailedCard
