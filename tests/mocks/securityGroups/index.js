module.exports.emptySecurityList = { SecurityGroups: [] };
module.exports.securityList = {
  SecurityGroups: [
    {
      Description: 'default VPC security group',
      GroupId: 'sg-081b053814797d871',
      GroupName: 'default',
      IpPermissions: [
        {
          FromPort: 5432,
          IpProtocol: 'tcp',
          IpRanges: [{ CidrIp: '0.0.0.0/0' }],
          Ipv6Ranges: [{ CidrIpv6: '::/0' }],
          PrefixListIds: [],
          ToPort: 5432,
          UserIdGroupPairs: []
        },
        {
          IpProtocol: '-1',
          IpRanges: [{ CidrIp: '220.240.57.51/32' }],
          Ipv6Ranges: [],
          PrefixListIds: [],
          UserIdGroupPairs: [{ GroupId: 'sg-081b053814797d871', UserId: '530646839016' }]
        }
      ],
      IpPermissionsEgress: [
        {
          IpProtocol: '-1',
          IpRanges: [{ CidrIp: '0.0.0.0/0' }],
          Ipv6Ranges: [],
          PrefixListIds: [],
          UserIdGroupPairs: []
        }
      ],
      OwnerId: '530646839016',
      Tags: [],
      VpcId: 'vpc-06121be21a4fabf15'
    },
    {
      Description: 'strapi instance security settings',
      GroupId: 'sg-09e0cb2a58ec5dc3f',
      GroupName: 'strapi',
      IpPermissions: [
        {
          FromPort: 80,
          IpProtocol: 'tcp',
          IpRanges: [{ CidrIp: '0.0.0.0/0' }],
          Ipv6Ranges: [{ CidrIpv6: '::/0' }],
          PrefixListIds: [],
          ToPort: 80,
          UserIdGroupPairs: []
        },
        {
          FromPort: 8080,
          IpProtocol: 'tcp',
          IpRanges: [{ CidrIp: '0.0.0.0/0' }],
          Ipv6Ranges: [{ CidrIpv6: '::/0' }],
          PrefixListIds: [],
          ToPort: 8080,
          UserIdGroupPairs: []
        },
        {
          FromPort: 22,
          IpProtocol: 'tcp',
          IpRanges: [{ CidrIp: '0.0.0.0/0' }],
          Ipv6Ranges: [{ CidrIpv6: '::/0' }],
          PrefixListIds: [],
          ToPort: 22,
          UserIdGroupPairs: []
        },
        {
          FromPort: 443,
          IpProtocol: 'tcp',
          IpRanges: [{ CidrIp: '0.0.0.0/0' }],
          Ipv6Ranges: [{ CidrIpv6: '::/0' }],
          PrefixListIds: [],
          ToPort: 443,
          UserIdGroupPairs: []
        },
        {
          FromPort: 1337,
          IpProtocol: 'tcp',
          IpRanges: [{ CidrIp: '0.0.0.0/0', Description: 'Strapi for Testing Port' }],
          Ipv6Ranges: [],
          PrefixListIds: [],
          ToPort: 1337,
          UserIdGroupPairs: []
        }
      ],
      IpPermissionsEgress: [
        {
          IpProtocol: '-1',
          IpRanges: [{ CidrIp: '0.0.0.0/0' }],
          Ipv6Ranges: [],
          PrefixListIds: [],
          UserIdGroupPairs: []
        }
      ],
      OwnerId: '530646839016',
      Tags: [],
      VpcId: 'vpc-02556361a8549f581'
    },
    {
      Description: 'default VPC security group',
      GroupId: 'sg-0f2556b587d9b522f',
      GroupName: 'default',
      IpPermissions: [
        {
          IpProtocol: '-1',
          IpRanges: [],
          Ipv6Ranges: [],
          PrefixListIds: [],
          UserIdGroupPairs: [{ GroupId: 'sg-0f2556b587d9b522f', UserId: '530646839016' }]
        }
      ],
      IpPermissionsEgress: [
        {
          IpProtocol: '-1',
          IpRanges: [{ CidrIp: '0.0.0.0/0' }],
          Ipv6Ranges: [],
          PrefixListIds: [],
          UserIdGroupPairs: []
        }
      ],
      OwnerId: '530646839016',
      Tags: [],
      VpcId: 'vpc-02556361a8549f581'
    }
  ]
};
