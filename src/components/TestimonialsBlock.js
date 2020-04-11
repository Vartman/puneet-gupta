import React from 'react';
import _ from 'lodash';

import {htmlToReact, safePrefix} from '../utils';

export default class TestimonialsBlock extends React.Component {
    render() {
        return (
            <section id={_.get(this.props, 'section.section_id')} className="outer">
              <div className="inner">
                {/*<div className="block-inside">*/}
                  <div className="page-header inner-small">
                    <h1 className="page-title line-top">{_.get(this.props, 'section.title')}</h1>
                    {_.get(this.props, 'section.subtitle') && 
                    <p className="page-subtitle">
                      {htmlToReact(_.get(this.props, 'section.subtitle'))}
                    </p>
                    }
                  </div>
                  {_.get(this.props, 'section.testimonialslist') && 
                  <div className="block-content">
                    <div className="testimonials-list">
                      {_.map(_.get(this.props, 'section.testimonialslist'), (testimonial, testimonial_idx) => (
                      <blockquote key={testimonial_idx} className="testimonial">
                        <p className="testimonial-text">{htmlToReact(_.get(testimonial, 'content'))}</p>
                        <footer className="testimonial-footer">
                          {_.get(testimonial, 'avatar') && 
                          <img className="testimonial-avatar" src={safePrefix(_.get(testimonial, 'avatar'))} alt="Author avatar"/>
                          }
                          <cite className="testimonial-author">{_.get(testimonial, 'author')}</cite>
                        </footer>
                      </blockquote>
                      ))}
                    </div>
                  </div>
                  }
                {/*</div>*/}
              </div>
            </section>
        );
    }
}
