import React from 'react'
import renderer from 'react-test-renderer'
import BabelLoading from '../index'

it('renders correctly', () => {
  const tree = renderer.create(<BabelLoading speed={1} color="red"  />).toJSON()
  expect(tree).toMatchSnapshot()
})
