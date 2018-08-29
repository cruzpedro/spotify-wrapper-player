import { expect } from 'chai';
import convertToHumanTime from '../src/convertToHumanTime';

describe('ConvertToHumanTime', () => {
  it('should exists', () => {
    expect(convertToHumanTime).to.exist;
  });

  it('should receive ms and convert to 0:00 ', () => {
    expect(convertToHumanTime(0)).to.be.eql('0:00');
  });

  it('should receive 1000ms and convert to 0:01', () => {
    expect(convertToHumanTime(1000)).to.be.eql('0:01');
  });

  it('should receive 11000ms and convert to 0:11', () => {
    expect(convertToHumanTime(11000)).to.be.eql('0:11');
  });

  it('should receive 60000ms and convert to 1:00', () => {
    expect(convertToHumanTime(60000)).to.be.eql('1:00');
  });
});
