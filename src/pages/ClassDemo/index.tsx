import React from 'react';

class ClassDemo extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    console.log('1')
  }
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.log('1')
  }
  componentDidMount() {
    console.log('1')

  }
  componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any) {
    console.log('1')

  }
  componentWillUnmount() {
    console.log('1')
  }

  shouldComponentUpdate(nextProps: Readonly<any>, nextState: Readonly<any>, nextContext: any): boolean {
    console.log('1')
    return true
  }

  getSnapshotBeforeUpdate(prevProps: Readonly<any>, prevState: Readonly<any>): any | null {
    console.log('1')
  }
  render() {
    return (
      <div>
        <span>11111</span>
      </div>
    );
  }
}
