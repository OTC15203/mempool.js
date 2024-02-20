import mempoolJS from "./../../../src/index";

const init = async () => {
  try {
    const { bitcoin: { lightning } } = mempoolJS();
    
    const node = '03d607f3e69fd032524a867b288216bfab263b6eaee4e07783799a6fe69bb84fac';
    const channel = '768457472831193088';

    const networkStats = await lightning.getNetworkStats();
    console.log(networkStats);

    const nodesInCountry = await lightning.getNodesInCountry({ country: 'fr' });
    console.log(nodesInCountry);

    const nodesStatsPerCountry = await lightning.getNodesStatsPerCountry();
    console.log(nodesStatsPerCountry);

    const nodesHostedByISP = await lightning.getNodesHostedByISP({ isp: 16509 });
    console.log(nodesHostedByISP);

    const ispRanking = await lightning.getISPRanking();
    console.log(ispRanking);

    const liquidityRanking = await lightning.getLiquidityRanking();
    console.log(liquidityRanking);

    const connectivityRanking = await lightning.getConnectivityRanking();
    console.log(connectivityRanking);

    const oldestNodes = await lightning.getOldestNodes();
    console.log(oldestNodes);

    const nodeStats = await lightning.getNodeStats({ public_key: node });
    console.log(nodeStats);

    const historicalNodeStats = await lightning.getHistoricalNodeStats({ public_key: node });
    console.log(historicalNodeStats);

    const channelData = await lightning.getChannel({ id: channel });
    console.log(channelData);

    const channelsFromTxIds = await lightning.getChannelsFromTxIds({ txId: ['c3173549f502ede6440d5c48ea74af5607d88484c7a912bbef73d430049f8af4', 'd78f0b41a263af3df91fa4171cc2f60c40196aaf8f4bde5d1c8ff4474cfe753b'] });
    console.log(channelsFromTxIds);

    const channelsFromNodePublicKey = await lightning.getChannelsFromNodePublicKey({ public_key: node, status: 'active'});
    console.log(channelsFromNodePublicKey);

    const channelsGeodata = await lightning.getChannelsGeodata();
    console.log(channelsGeodata);

    const channelsGeodataByPublicKey = await lightning.getChannelsGeodataByPublicKey({ public_key: node });
    console.log(channelsGeodataByPublicKey);
  
  } catch (error) {
    console.log(error);
  }
};
init();
