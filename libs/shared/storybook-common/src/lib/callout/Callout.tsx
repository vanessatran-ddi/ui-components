import React from 'react';
import styled from 'styled-components';

const CalloutDiv = styled.div`
    font-family: acumin-pro-semi-condensed, sans-serif;
    box-sizing: border-box;
    position: relative;
    margin: 24px 0 0;
    padding: 23px 24px 23px 24px;
    border-width: 0;
    border-left-width: 48px;
    border-style: solid;
    border-color: #00853f;
    background: #f1f1f1;

    & > h3 {
      font-weight: normal;
    }
    & > :first-child {
      margin-top: 0;
    }
    & > :last-child {
      margin-bottom: 0;
    }
    &::before {
      position: absolute;
      top: 33px;
      left: -36px;
      width: 24px;
      height: 24px;
      background: transparent no-repeat center center;
      content: "";
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23fff' d='M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z'/%3E%3Cpath fill='%23fff' d='M7,12l4,4' stroke='%23fff' stroke-width='2'/%3E%3Cpath fill='%23fff' d='M11,16l6,-8' stroke='%23fff' stroke-width='2'/%3E%3C/svg%3E");
    }
    &[data-positive=false] {
      border-color: #fc1921;
      &::before {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23fff' d='M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z'/%3E%3Cpath fill='%23fff' d='M8,8l8,8' stroke='%23fff' stroke-width='2'/%3E%3Cpath fill='%23fff' d='M16,8l-8,8' stroke='%23fff' stroke-width='2'/%3E%3C/svg%3E");
      }
    }
`;

/**
 * Callout used by Do/Don't component.
 * @property {bool} positive Indicates if the callout should be styled positively or negatively.
 * @property {string} content text for content.
 */
export const Callout = ({positive, content}) => {
  return (
    <CalloutDiv data-positive={positive}>
      <h3>{positive ? 'Do' : "Don't"}</h3>
      <p>
        {content}
      </p>
    </CalloutDiv>
  );
}

