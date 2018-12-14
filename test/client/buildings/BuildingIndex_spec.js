// /* global describe,it */
// import React from 'react';
// import axios from 'axios';
// import sinon from 'sinon';
// import { shallow } from 'enzyme';
// import { expect } from 'chai';
// import BuildingIndex from '../../../src/components/buildings/Explore';
//
// const userIds = [
//   '5be9860fcb16d525543ceda3',
//   '5be9860fcb16d525543ceda4',
//   '5be9860fcb16d525543ceda5',
//   '5be9860fcb16d525543ceda6'
// ];
//
// const buildingIds = [
//   '5c0968f5dc8e460b1e53f07b',
//   '5c0968f8dc8e460b1e53f07c',
//   '5c0968f9dc8e460b1e53f07d'
// ];
//
// const testData =[
//   {
//     _id: buildingIds[0],
//     name: 'St Paul\'s Cathedral',
//     architect: 'Sir Christopher Wren',
//     icon: 'https://d12dkjq56sjcos.cloudfront.net/pub/media/catalog/product/cache/d9fe7781ddb2422361b5e0fbe1b7086d/b/b/bbt_product_attractions_london_st-pauls.jpg',
//     addedBy: userIds[0],
//     comments: [{
//       content: 'Christopher Wren is a 10 out of 10',
//       user: userIds[0]}],
//     location: {
//       lat: 51.513870,
//       lng: -0.098362
//     }
//   }, {
//     _id: buildingIds[1],
//     name: 'The Shard',
//     architect: 'Renzo Piano',
//     icon: 'https://teighmore-assets.s3.amazonaws.com/media/filer_public/da/6b/da6bccd2-cec4-489f-bfdb-22944ef66677/tvfts-largetumb.jpg',
//     addedBy: userIds[0],
//     comments: [{
//       content: 'Big and pointy!!!',
//       user: userIds[2]}],
//     location: {
//       lat: 51.504613,
//       lng: -0.086414
//     }
//   }, {
//     _id: buildingIds[2],
//     name: 'The Barbican',
//     architect: 'Chamberlin, Powell and Bon',
//     icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Barbican_towers.jpg/1200px-Barbican_towers.jpg',
//     addedBy: userIds[1],
//     comments: [{
//       content: 'A great example of brutalism in London. Also check out Trellick Tower',
//       user: userIds[1]
//     }, {
//       content: 'I LOVE brutalism',
//       user: userIds[0]
//     }],
//     location: {
//       lat: 51.5199,
//       lng: -0.0945
//     },
//     likes: [userIds[0], userIds[1]]
//   }, {
//     _id: buildingIds[3],
//     name: 'The British Museum',
//     architect: 'Sir Robert Smirke',
//     icon: 'https://secretldn.com/wp-content/uploads/2018/04/British-Museum-22.jpg',
//     addedBy: userIds[2],
//     location: {
//       lat: 51.519947,
//       lng: -0.126699
//     }
//   },  {
//     _id: buildingIds[4],
//     name: 'Sagrada Familia',
//     architect: 'Antoni Gaudí',
//     icon: 'https://www.arup.com/-/media/arup/images/projects/s/sagrada-familia/sagrada-familia-2000x1125-2.jpg',
//     addedBy: userIds[3],
//     comments: [{
//       content: 'Will this ever be completed?',
//       user: userIds[1]}],
//     location: {
//       lat: 41.4036,
//       lng: 2.1744
//     }
//   }, {
//     _id: buildingIds[5],
//     name: 'The Forbidden City',
//     architect: 'Cai Xin, Nguyễn An, Kuai Xiang, Lu Xiang and others',
//     icon: 'https://www.wonders-of-the-world.net/Forbidden-city/images/Vignettes/Description/Mur-Est-de-la-cour-aux-eaux-d-or-01-V.jpg',
//     addedBy: userIds[0],
//     comments: [{
//       content: 'Such an impressive place',
//       user: userIds[2]}],
//     location: {
//       lat: 39.916164,
//       lng: 116.397079
//     }
//   }
// ];
//
// sinon.stub(axios, 'get')
//   .returns(Promise.resolve({ data: testData }));
//
// describe('Bag Index', () => {
//   it('should show the correct number of buildings', done => {
//     const component = shallow(<BuildingIndex />);
//     component.setState({ filteredBuildings: testData });
//     expect(component.state()).to.have.property('filteredBuildings');
//     expect(component.find('BuildingBox').length).to.eq(testData.length);
//     done();
//   });
//   it('should have the correct building in each BuildingBox', done => {
//     const component = shallow(<BuildingIndex />);
//     component.setState({ filteredBuildings: testData });
//     component.find('BuildingBox').forEach((filteredBuilding, i) => {
//       expect(filteredBuilding.props().filteredBuilding.name).to.eq(testData[i].name);
//     });
//     done();
//   });
//   it('should have the correct architect in each BuildingBox', done => {
//     const component = shallow(<BuildingIndex />);
//     component.setState({ filteredBuildings: testData });
//     component.find('BuildingBox').forEach((filteredBuilding, i) => {
//       expect(filteredBuilding.props().filteredBuilding.architect).to.eq(testData[i].architect);
//     });
//     done();
//   });
// });
