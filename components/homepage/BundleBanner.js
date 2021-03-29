import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { connect } from 'react-redux';

class BundleBanner extends Component {

  render() {
    const { categories } = this.props;

    return (
      <div className="bg-white py-5 collection-banner">
        <div className="custom-container py-1">
          <p className="font-size-display2 my-5 py-5 text-center font-family-secondary">
            Bundle boxes
          </p>

          <div className="row">
            {categories.map((item, index) => (
              <div
                key={`category-item-${index}`}
                className="col-12 col-md-4 collection-item mt-5"
              >
                <Link href={`/collection#${item.slug}`} key={item.id}>
                  <a className="align-items-center font-color-light flex-column cursor-pointer mb-2">
                    <div>
                      { item.meta.image && (
                        <div
                          className="mb-4 w-100 collection-item-image"
                          style={{
                            background: `url("${item.meta.image}") center center/cover`
                          }}
                        />
                      )}
                      <p className="mb-2 font-size-heading text-center">
                        {item.name}
                      </p>
                    </div>
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

BundleBanner.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object),
};

BundleBanner.defaultProps = {
  categories: [],
};

export default connect(state => state)(BundleBanner);
