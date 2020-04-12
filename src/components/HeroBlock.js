import React from 'react';
import _ from 'lodash';

import {markdownify} from '../utils';

export default class HeroBlock extends React.Component {
    render() {
        return (
            <section id={_.get(this.props, 'section.section_id')} className="block hero-block outer">
              <div className="inner">
                <div className="block-header">
                  <div className="wrapper">
                    <div className="lhs">
                      <img src={_.get(this.props, 'section.profilepic')} width="200" alt=""/>
                    </div>
                    <div className="rhs">
                      <h2 className="block-title">{_.get(this.props, 'section.title')}</h2>
                      <p>{_.get(this.props, 'section.subtitle')}</p>
                    </div>
                  </div>
                </div>
                <div className="block-content">
                  <div className="block-copy">
                    {markdownify(_.get(this.props, 'section.content'))}
                  </div>
                </div>
                <div className="page-header inner-small">
                  <h1 className="page-title line-top">{_.get(this.props, 'section.second_title')}</h1>
                  {_.get(this.props, 'section.second_subtitle') && 
                  <p className="page-subtitle">
                    {_.get(this.props, 'section.second_subtitle')}
                  </p>
                  }
                </div>
                <div className="block-content">
                  <div className="block-copy">
                    {markdownify(_.get(this.props, 'section.second_content'))}
                  </div>
                </div>
              </div>
            </section>
        );
    }
}
