export default [
  {
    id: 100000,
    pid: 0,
    type: 0,
    name: '中国',
    zipCode: ''
  },
  {
    id: 110000,
    pid: 100000,
    type: 1,
    name: '北京市',
    base: 'bj', //省份简称
    zipCode: '',
    child: [
      {
        id: 110100,
        pid: 110000,
        type: 2,
        name: '北京市',
        zipCode: '100000',
        child: [
          {
            id: 110101,
            pid: 110100,
            type: 3,
            name: '东城区',
            zipCode: '100010',
            child: null
          },
          {
            id: 110102,
            pid: 110100,
            type: 3,
            name: '西城区',
            zipCode: '100032',
            child: null
          },
          {
            id: 110105,
            pid: 110100,
            type: 3,
            name: '朝阳区',
            zipCode: '100020',
            child: null
          },
          {
            id: 110106,
            pid: 110100,
            type: 3,
            name: '丰台区',
            zipCode: '100071',
            child: null
          },
          {
            id: 110107,
            pid: 110100,
            type: 3,
            name: '石景山区',
            zipCode: '100043',
            child: null
          },
          {
            id: 110108,
            pid: 110100,
            type: 3,
            name: '海淀区',
            zipCode: '100089',
            child: null
          },
          {
            id: 110109,
            pid: 110100,
            type: 3,
            name: '门头沟区',
            zipCode: '102300',
            child: null
          },
          {
            id: 110111,
            pid: 110100,
            type: 3,
            name: '房山区',
            zipCode: '102488',
            child: null
          },
          {
            id: 110112,
            pid: 110100,
            type: 3,
            name: '通州区',
            zipCode: '101149',
            child: null
          },
          {
            id: 110113,
            pid: 110100,
            type: 3,
            name: '顺义区',
            zipCode: '101300',
            child: null
          },
          {
            id: 110114,
            pid: 110100,
            type: 3,
            name: '昌平区',
            zipCode: '102200',
            child: null
          },
          {
            id: 110115,
            pid: 110100,
            type: 3,
            name: '大兴区',
            zipCode: '102600',
            child: null
          },
          {
            id: 110116,
            pid: 110100,
            type: 3,
            name: '怀柔区',
            zipCode: '101400',
            child: null
          },
          {
            id: 110117,
            pid: 110100,
            type: 3,
            name: '平谷区',
            zipCode: '101200',
            child: null
          },
          {
            id: 110228,
            pid: 110100,
            type: 3,
            name: '密云县',
            zipCode: '101500',
            child: null
          },
          {
            id: 110229,
            pid: 110100,
            type: 3,
            name: '延庆县',
            zipCode: '102100',
            child: null
          }
        ]
      }
    ]
  },
  {
    id: 120000,
    pid: 100000,
    type: 1,
    name: '天津市',
    base: 'tj', //省份简称
    zipCode: '',
    child: [
      {
        id: 120100,
        pid: 120000,
        type: 2,
        name: '天津市',
        zipCode: '300000',
        child: [
          {
            id: 120101,
            pid: 120100,
            type: 3,
            name: '和平区',
            zipCode: '300041',
            child: null
          },
          {
            id: 120102,
            pid: 120100,
            type: 3,
            name: '河东区',
            zipCode: '300171',
            child: null
          },
          {
            id: 120103,
            pid: 120100,
            type: 3,
            name: '河西区',
            zipCode: '300202',
            child: null
          },
          {
            id: 120104,
            pid: 120100,
            type: 3,
            name: '南开区',
            zipCode: '300110',
            child: null
          },
          {
            id: 120105,
            pid: 120100,
            type: 3,
            name: '河北区',
            zipCode: '300143',
            child: null
          },
          {
            id: 120106,
            pid: 120100,
            type: 3,
            name: '红桥区',
            zipCode: '300131',
            child: null
          },
          {
            id: 120110,
            pid: 120100,
            type: 3,
            name: '东丽区',
            zipCode: '300300',
            child: null
          },
          {
            id: 120111,
            pid: 120100,
            type: 3,
            name: '西青区',
            zipCode: '300380',
            child: null
          },
          {
            id: 120112,
            pid: 120100,
            type: 3,
            name: '津南区',
            zipCode: '300350',
            child: null
          },
          {
            id: 120113,
            pid: 120100,
            type: 3,
            name: '北辰区',
            zipCode: '300400',
            child: null
          },
          {
            id: 120114,
            pid: 120100,
            type: 3,
            name: '武清区',
            zipCode: '301700',
            child: null
          },
          {
            id: 120115,
            pid: 120100,
            type: 3,
            name: '宝坻区',
            zipCode: '301800',
            child: null
          },
          {
            id: 120116,
            pid: 120100,
            type: 3,
            name: '滨海新区',
            zipCode: '300451',
            child: null
          },
          {
            id: 120221,
            pid: 120100,
            type: 3,
            name: '宁河县',
            zipCode: '301500',
            child: null
          },
          {
            id: 120223,
            pid: 120100,
            type: 3,
            name: '静海县',
            zipCode: '301600',
            child: null
          },
          {
            id: 120225,
            pid: 120100,
            type: 3,
            name: '蓟县',
            zipCode: '301900',
            child: null
          }
        ]
      }
    ]
  },
  {
    id: 130000,
    pid: 100000,
    type: 1,
    name: '河北省',
    base: 'heb', //省份简称
    zipCode: '',
    child: [
      {
        id: 130100,
        pid: 130000,
        type: 2,
        name: '石家庄市',
        zipCode: '050011',
        child: [
          {
            id: 130102,
            pid: 130100,
            type: 3,
            name: '长安区',
            zipCode: '050011',
            child: null
          },
          {
            id: 130104,
            pid: 130100,
            type: 3,
            name: '桥西区',
            zipCode: '050091',
            child: null
          },
          {
            id: 130105,
            pid: 130100,
            type: 3,
            name: '新华区',
            zipCode: '050051',
            child: null
          },
          {
            id: 130107,
            pid: 130100,
            type: 3,
            name: '井陉矿区',
            zipCode: '050100',
            child: null
          },
          {
            id: 130108,
            pid: 130100,
            type: 3,
            name: '裕华区',
            zipCode: '050031',
            child: null
          },
          {
            id: 130109,
            pid: 130100,
            type: 3,
            name: '藁城区',
            zipCode: '052160',
            child: null
          },
          {
            id: 130110,
            pid: 130100,
            type: 3,
            name: '鹿泉区',
            zipCode: '050200',
            child: null
          },
          {
            id: 130111,
            pid: 130100,
            type: 3,
            name: '栾城区',
            zipCode: '051430',
            child: null
          },
          {
            id: 130121,
            pid: 130100,
            type: 3,
            name: '井陉县',
            zipCode: '050300',
            child: null
          },
          {
            id: 130123,
            pid: 130100,
            type: 3,
            name: '正定县',
            zipCode: '050800',
            child: null
          },
          {
            id: 130125,
            pid: 130100,
            type: 3,
            name: '行唐县',
            zipCode: '050600',
            child: null
          },
          {
            id: 130126,
            pid: 130100,
            type: 3,
            name: '灵寿县',
            zipCode: '050500',
            child: null
          },
          {
            id: 130127,
            pid: 130100,
            type: 3,
            name: '高邑县',
            zipCode: '051330',
            child: null
          },
          {
            id: 130128,
            pid: 130100,
            type: 3,
            name: '深泽县',
            zipCode: '052560',
            child: null
          },
          {
            id: 130129,
            pid: 130100,
            type: 3,
            name: '赞皇县',
            zipCode: '051230',
            child: null
          },
          {
            id: 130130,
            pid: 130100,
            type: 3,
            name: '无极县',
            zipCode: '052460',
            child: null
          },
          {
            id: 130131,
            pid: 130100,
            type: 3,
            name: '平山县',
            zipCode: '050400',
            child: null
          },
          {
            id: 130132,
            pid: 130100,
            type: 3,
            name: '元氏县',
            zipCode: '051130',
            child: null
          },
          {
            id: 130133,
            pid: 130100,
            type: 3,
            name: '赵县',
            zipCode: '051530',
            child: null
          },
          {
            id: 130181,
            pid: 130100,
            type: 3,
            name: '辛集市',
            zipCode: '052360',
            child: null
          },
          {
            id: 130183,
            pid: 130100,
            type: 3,
            name: '晋州市',
            zipCode: '052260',
            child: null
          },
          {
            id: 130184,
            pid: 130100,
            type: 3,
            name: '新乐市',
            zipCode: '050700',
            child: null
          }
        ]
      },
      {
        id: 130200,
        pid: 130000,
        type: 2,
        name: '唐山市',
        zipCode: '063000',
        child: [
          {
            id: 130202,
            pid: 130200,
            type: 3,
            name: '路南区',
            zipCode: '063000',
            child: null
          },
          {
            id: 130203,
            pid: 130200,
            type: 3,
            name: '路北区',
            zipCode: '063000',
            child: null
          },
          {
            id: 130204,
            pid: 130200,
            type: 3,
            name: '古冶区',
            zipCode: '063100',
            child: null
          },
          {
            id: 130205,
            pid: 130200,
            type: 3,
            name: '开平区',
            zipCode: '063021',
            child: null
          },
          {
            id: 130207,
            pid: 130200,
            type: 3,
            name: '丰南区',
            zipCode: '063300',
            child: null
          },
          {
            id: 130208,
            pid: 130200,
            type: 3,
            name: '丰润区',
            zipCode: '064000',
            child: null
          },
          {
            id: 130209,
            pid: 130200,
            type: 3,
            name: '曹妃甸区',
            zipCode: '063200',
            child: null
          },
          {
            id: 130223,
            pid: 130200,
            type: 3,
            name: '滦县',
            zipCode: '063700',
            child: null
          },
          {
            id: 130224,
            pid: 130200,
            type: 3,
            name: '滦南县',
            zipCode: '063500',
            child: null
          },
          {
            id: 130225,
            pid: 130200,
            type: 3,
            name: '乐亭县',
            zipCode: '063600',
            child: null
          },
          {
            id: 130227,
            pid: 130200,
            type: 3,
            name: '迁西县',
            zipCode: '064300',
            child: null
          },
          {
            id: 130229,
            pid: 130200,
            type: 3,
            name: '玉田县',
            zipCode: '064100',
            child: null
          },
          {
            id: 130281,
            pid: 130200,
            type: 3,
            name: '遵化市',
            zipCode: '064200',
            child: null
          },
          {
            id: 130283,
            pid: 130200,
            type: 3,
            name: '迁安市',
            zipCode: '064400',
            child: null
          }
        ]
      },
      {
        id: 130300,
        pid: 130000,
        type: 2,
        name: '秦皇岛市',
        zipCode: '066000',
        child: [
          {
            id: 130302,
            pid: 130300,
            type: 3,
            name: '海港区',
            zipCode: '066000',
            child: null
          },
          {
            id: 130303,
            pid: 130300,
            type: 3,
            name: '山海关区',
            zipCode: '066200',
            child: null
          },
          {
            id: 130304,
            pid: 130300,
            type: 3,
            name: '北戴河区',
            zipCode: '066100',
            child: null
          },
          {
            id: 130321,
            pid: 130300,
            type: 3,
            name: '青龙满族自治县',
            zipCode: '066500',
            child: null
          },
          {
            id: 130322,
            pid: 130300,
            type: 3,
            name: '昌黎县',
            zipCode: '066600',
            child: null
          },
          {
            id: 130323,
            pid: 130300,
            type: 3,
            name: '抚宁县',
            zipCode: '066300',
            child: null
          },
          {
            id: 130324,
            pid: 130300,
            type: 3,
            name: '卢龙县',
            zipCode: '066400',
            child: null
          }
        ]
      },
      {
        id: 130400,
        pid: 130000,
        type: 2,
        name: '邯郸市',
        zipCode: '056002',
        child: [
          {
            id: 130402,
            pid: 130400,
            type: 3,
            name: '邯山区',
            zipCode: '056001',
            child: null
          },
          {
            id: 130403,
            pid: 130400,
            type: 3,
            name: '丛台区',
            zipCode: '056002',
            child: null
          },
          {
            id: 130404,
            pid: 130400,
            type: 3,
            name: '复兴区',
            zipCode: '056003',
            child: null
          },
          {
            id: 130406,
            pid: 130400,
            type: 3,
            name: '峰峰矿区',
            zipCode: '056200',
            child: null
          },
          {
            id: 130421,
            pid: 130400,
            type: 3,
            name: '邯郸县',
            zipCode: '056101',
            child: null
          },
          {
            id: 130423,
            pid: 130400,
            type: 3,
            name: '临漳县',
            zipCode: '056600',
            child: null
          },
          {
            id: 130424,
            pid: 130400,
            type: 3,
            name: '成安县',
            zipCode: '056700',
            child: null
          },
          {
            id: 130425,
            pid: 130400,
            type: 3,
            name: '大名县',
            zipCode: '056900',
            child: null
          },
          {
            id: 130426,
            pid: 130400,
            type: 3,
            name: '涉县',
            zipCode: '056400',
            child: null
          },
          {
            id: 130427,
            pid: 130400,
            type: 3,
            name: '磁县',
            zipCode: '056500',
            child: null
          },
          {
            id: 130428,
            pid: 130400,
            type: 3,
            name: '肥乡县',
            zipCode: '057550',
            child: null
          },
          {
            id: 130429,
            pid: 130400,
            type: 3,
            name: '永年县',
            zipCode: '057150',
            child: null
          },
          {
            id: 130430,
            pid: 130400,
            type: 3,
            name: '邱县',
            zipCode: '057450',
            child: null
          },
          {
            id: 130431,
            pid: 130400,
            type: 3,
            name: '鸡泽县',
            zipCode: '057350',
            child: null
          },
          {
            id: 130432,
            pid: 130400,
            type: 3,
            name: '广平县',
            zipCode: '057650',
            child: null
          },
          {
            id: 130433,
            pid: 130400,
            type: 3,
            name: '馆陶县',
            zipCode: '057750',
            child: null
          },
          {
            id: 130434,
            pid: 130400,
            type: 3,
            name: '魏县',
            zipCode: '056800',
            child: null
          },
          {
            id: 130435,
            pid: 130400,
            type: 3,
            name: '曲周县',
            zipCode: '057250',
            child: null
          },
          {
            id: 130481,
            pid: 130400,
            type: 3,
            name: '武安市',
            zipCode: '056300',
            child: null
          }
        ]
      },
      {
        id: 130500,
        pid: 130000,
        type: 2,
        name: '邢台市',
        zipCode: '054001',
        child: [
          {
            id: 130502,
            pid: 130500,
            type: 3,
            name: '桥东区',
            zipCode: '054001',
            child: null
          },
          {
            id: 130503,
            pid: 130500,
            type: 3,
            name: '桥西区',
            zipCode: '054000',
            child: null
          },
          {
            id: 130521,
            pid: 130500,
            type: 3,
            name: '邢台县',
            zipCode: '054001',
            child: null
          },
          {
            id: 130522,
            pid: 130500,
            type: 3,
            name: '临城县',
            zipCode: '054300',
            child: null
          },
          {
            id: 130523,
            pid: 130500,
            type: 3,
            name: '内丘县',
            zipCode: '054200',
            child: null
          },
          {
            id: 130524,
            pid: 130500,
            type: 3,
            name: '柏乡县',
            zipCode: '055450',
            child: null
          },
          {
            id: 130525,
            pid: 130500,
            type: 3,
            name: '隆尧县',
            zipCode: '055350',
            child: null
          },
          {
            id: 130526,
            pid: 130500,
            type: 3,
            name: '任县',
            zipCode: '055150',
            child: null
          },
          {
            id: 130527,
            pid: 130500,
            type: 3,
            name: '南和县',
            zipCode: '054400',
            child: null
          },
          {
            id: 130528,
            pid: 130500,
            type: 3,
            name: '宁晋县',
            zipCode: '055550',
            child: null
          },
          {
            id: 130529,
            pid: 130500,
            type: 3,
            name: '巨鹿县',
            zipCode: '055250',
            child: null
          },
          {
            id: 130530,
            pid: 130500,
            type: 3,
            name: '新河县',
            zipCode: '055650',
            child: null
          },
          {
            id: 130531,
            pid: 130500,
            type: 3,
            name: '广宗县',
            zipCode: '054600',
            child: null
          },
          {
            id: 130532,
            pid: 130500,
            type: 3,
            name: '平乡县',
            zipCode: '054500',
            child: null
          },
          {
            id: 130533,
            pid: 130500,
            type: 3,
            name: '威县',
            zipCode: '054700',
            child: null
          },
          {
            id: 130534,
            pid: 130500,
            type: 3,
            name: '清河县',
            zipCode: '054800',
            child: null
          },
          {
            id: 130535,
            pid: 130500,
            type: 3,
            name: '临西县',
            zipCode: '054900',
            child: null
          },
          {
            id: 130581,
            pid: 130500,
            type: 3,
            name: '南宫市',
            zipCode: '055750',
            child: null
          },
          {
            id: 130582,
            pid: 130500,
            type: 3,
            name: '沙河市',
            zipCode: '054100',
            child: null
          }
        ]
      },
      {
        id: 130600,
        pid: 130000,
        type: 2,
        name: '保定市',
        zipCode: '071052',
        child: [
          {
            id: 130602,
            pid: 130600,
            type: 3,
            name: '新市区',
            zipCode: '071051',
            child: null
          },
          {
            id: 130603,
            pid: 130600,
            type: 3,
            name: '北市区',
            zipCode: '071000',
            child: null
          },
          {
            id: 130604,
            pid: 130600,
            type: 3,
            name: '南市区',
            zipCode: '071001',
            child: null
          },
          {
            id: 130621,
            pid: 130600,
            type: 3,
            name: '满城县',
            zipCode: '072150',
            child: null
          },
          {
            id: 130622,
            pid: 130600,
            type: 3,
            name: '清苑县',
            zipCode: '071100',
            child: null
          },
          {
            id: 130623,
            pid: 130600,
            type: 3,
            name: '涞水县',
            zipCode: '074100',
            child: null
          },
          {
            id: 130624,
            pid: 130600,
            type: 3,
            name: '阜平县',
            zipCode: '073200',
            child: null
          },
          {
            id: 130625,
            pid: 130600,
            type: 3,
            name: '徐水县',
            zipCode: '072550',
            child: null
          },
          {
            id: 130626,
            pid: 130600,
            type: 3,
            name: '定兴县',
            zipCode: '072650',
            child: null
          },
          {
            id: 130627,
            pid: 130600,
            type: 3,
            name: '唐县',
            zipCode: '072350',
            child: null
          },
          {
            id: 130628,
            pid: 130600,
            type: 3,
            name: '高阳县',
            zipCode: '071500',
            child: null
          },
          {
            id: 130629,
            pid: 130600,
            type: 3,
            name: '容城县',
            zipCode: '071700',
            child: null
          },
          {
            id: 130630,
            pid: 130600,
            type: 3,
            name: '涞源县',
            zipCode: '074300',
            child: null
          },
          {
            id: 130631,
            pid: 130600,
            type: 3,
            name: '望都县',
            zipCode: '072450',
            child: null
          },
          {
            id: 130632,
            pid: 130600,
            type: 3,
            name: '安新县',
            zipCode: '071600',
            child: null
          },
          {
            id: 130633,
            pid: 130600,
            type: 3,
            name: '易县',
            zipCode: '074200',
            child: null
          },
          {
            id: 130634,
            pid: 130600,
            type: 3,
            name: '曲阳县',
            zipCode: '073100',
            child: null
          },
          {
            id: 130635,
            pid: 130600,
            type: 3,
            name: '蠡县',
            zipCode: '071400',
            child: null
          },
          {
            id: 130636,
            pid: 130600,
            type: 3,
            name: '顺平县',
            zipCode: '072250',
            child: null
          },
          {
            id: 130637,
            pid: 130600,
            type: 3,
            name: '博野县',
            zipCode: '071300',
            child: null
          },
          {
            id: 130638,
            pid: 130600,
            type: 3,
            name: '雄县',
            zipCode: '071800',
            child: null
          },
          {
            id: 130681,
            pid: 130600,
            type: 3,
            name: '涿州市',
            zipCode: '072750',
            child: null
          },
          {
            id: 130682,
            pid: 130600,
            type: 3,
            name: '定州市',
            zipCode: '073000',
            child: null
          },
          {
            id: 130683,
            pid: 130600,
            type: 3,
            name: '安国市',
            zipCode: '071200',
            child: null
          },
          {
            id: 130684,
            pid: 130600,
            type: 3,
            name: '高碑店市',
            zipCode: '074000',
            child: null
          }
        ]
      },
      {
        id: 130700,
        pid: 130000,
        type: 2,
        name: '张家口市',
        zipCode: '075000',
        child: [
          {
            id: 130702,
            pid: 130700,
            type: 3,
            name: '桥东区',
            zipCode: '075000',
            child: null
          },
          {
            id: 130703,
            pid: 130700,
            type: 3,
            name: '桥西区',
            zipCode: '075061',
            child: null
          },
          {
            id: 130705,
            pid: 130700,
            type: 3,
            name: '宣化区',
            zipCode: '075100',
            child: null
          },
          {
            id: 130706,
            pid: 130700,
            type: 3,
            name: '下花园区',
            zipCode: '075300',
            child: null
          },
          {
            id: 130721,
            pid: 130700,
            type: 3,
            name: '宣化县',
            zipCode: '075100',
            child: null
          },
          {
            id: 130722,
            pid: 130700,
            type: 3,
            name: '张北县',
            zipCode: '076450',
            child: null
          },
          {
            id: 130723,
            pid: 130700,
            type: 3,
            name: '康保县',
            zipCode: '076650',
            child: null
          },
          {
            id: 130724,
            pid: 130700,
            type: 3,
            name: '沽源县',
            zipCode: '076550',
            child: null
          },
          {
            id: 130725,
            pid: 130700,
            type: 3,
            name: '尚义县',
            zipCode: '076750',
            child: null
          },
          {
            id: 130726,
            pid: 130700,
            type: 3,
            name: '蔚县',
            zipCode: '075700',
            child: null
          },
          {
            id: 130727,
            pid: 130700,
            type: 3,
            name: '阳原县',
            zipCode: '075800',
            child: null
          },
          {
            id: 130728,
            pid: 130700,
            type: 3,
            name: '怀安县',
            zipCode: '076150',
            child: null
          },
          {
            id: 130729,
            pid: 130700,
            type: 3,
            name: '万全县',
            zipCode: '076250',
            child: null
          },
          {
            id: 130730,
            pid: 130700,
            type: 3,
            name: '怀来县',
            zipCode: '075400',
            child: null
          },
          {
            id: 130731,
            pid: 130700,
            type: 3,
            name: '涿鹿县',
            zipCode: '075600',
            child: null
          },
          {
            id: 130732,
            pid: 130700,
            type: 3,
            name: '赤城县',
            zipCode: '075500',
            child: null
          },
          {
            id: 130733,
            pid: 130700,
            type: 3,
            name: '崇礼县',
            zipCode: '076350',
            child: null
          }
        ]
      },
      {
        id: 130800,
        pid: 130000,
        type: 2,
        name: '承德市',
        zipCode: '067000',
        child: [
          {
            id: 130802,
            pid: 130800,
            type: 3,
            name: '双桥区',
            zipCode: '067000',
            child: null
          },
          {
            id: 130803,
            pid: 130800,
            type: 3,
            name: '双滦区',
            zipCode: '067001',
            child: null
          },
          {
            id: 130804,
            pid: 130800,
            type: 3,
            name: '鹰手营子矿区',
            zipCode: '067200',
            child: null
          },
          {
            id: 130821,
            pid: 130800,
            type: 3,
            name: '承德县',
            zipCode: '067400',
            child: null
          },
          {
            id: 130822,
            pid: 130800,
            type: 3,
            name: '兴隆县',
            zipCode: '067300',
            child: null
          },
          {
            id: 130823,
            pid: 130800,
            type: 3,
            name: '平泉县',
            zipCode: '067500',
            child: null
          },
          {
            id: 130824,
            pid: 130800,
            type: 3,
            name: '滦平县',
            zipCode: '068250',
            child: null
          },
          {
            id: 130825,
            pid: 130800,
            type: 3,
            name: '隆化县',
            zipCode: '068150',
            child: null
          },
          {
            id: 130826,
            pid: 130800,
            type: 3,
            name: '丰宁满族自治县',
            zipCode: '068350',
            child: null
          },
          {
            id: 130827,
            pid: 130800,
            type: 3,
            name: '宽城满族自治县',
            zipCode: '067600',
            child: null
          },
          {
            id: 130828,
            pid: 130800,
            type: 3,
            name: '围场满族蒙古族自治县',
            zipCode: '068450',
            child: null
          }
        ]
      },
      {
        id: 130900,
        pid: 130000,
        type: 2,
        name: '沧州市',
        zipCode: '061001',
        child: [
          {
            id: 130902,
            pid: 130900,
            type: 3,
            name: '新华区',
            zipCode: '061000',
            child: null
          },
          {
            id: 130903,
            pid: 130900,
            type: 3,
            name: '运河区',
            zipCode: '061001',
            child: null
          },
          {
            id: 130921,
            pid: 130900,
            type: 3,
            name: '沧县',
            zipCode: '061000',
            child: null
          },
          {
            id: 130922,
            pid: 130900,
            type: 3,
            name: '青县',
            zipCode: '062650',
            child: null
          },
          {
            id: 130923,
            pid: 130900,
            type: 3,
            name: '东光县',
            zipCode: '061600',
            child: null
          },
          {
            id: 130924,
            pid: 130900,
            type: 3,
            name: '海兴县',
            zipCode: '061200',
            child: null
          },
          {
            id: 130925,
            pid: 130900,
            type: 3,
            name: '盐山县',
            zipCode: '061300',
            child: null
          },
          {
            id: 130926,
            pid: 130900,
            type: 3,
            name: '肃宁县',
            zipCode: '062350',
            child: null
          },
          {
            id: 130927,
            pid: 130900,
            type: 3,
            name: '南皮县',
            zipCode: '061500',
            child: null
          },
          {
            id: 130928,
            pid: 130900,
            type: 3,
            name: '吴桥县',
            zipCode: '061800',
            child: null
          },
          {
            id: 130929,
            pid: 130900,
            type: 3,
            name: '献县',
            zipCode: '062250',
            child: null
          },
          {
            id: 130930,
            pid: 130900,
            type: 3,
            name: '孟村回族自治县',
            zipCode: '061400',
            child: null
          },
          {
            id: 130981,
            pid: 130900,
            type: 3,
            name: '泊头市',
            zipCode: '062150',
            child: null
          },
          {
            id: 130982,
            pid: 130900,
            type: 3,
            name: '任丘市',
            zipCode: '062550',
            child: null
          },
          {
            id: 130983,
            pid: 130900,
            type: 3,
            name: '黄骅市',
            zipCode: '061100',
            child: null
          },
          {
            id: 130984,
            pid: 130900,
            type: 3,
            name: '河间市',
            zipCode: '062450',
            child: null
          }
        ]
      },
      {
        id: 131000,
        pid: 130000,
        type: 2,
        name: '廊坊市',
        zipCode: '065000',
        child: [
          {
            id: 131002,
            pid: 131000,
            type: 3,
            name: '安次区',
            zipCode: '065000',
            child: null
          },
          {
            id: 131003,
            pid: 131000,
            type: 3,
            name: '广阳区',
            zipCode: '065000',
            child: null
          },
          {
            id: 131022,
            pid: 131000,
            type: 3,
            name: '固安县',
            zipCode: '065500',
            child: null
          },
          {
            id: 131023,
            pid: 131000,
            type: 3,
            name: '永清县',
            zipCode: '065600',
            child: null
          },
          {
            id: 131024,
            pid: 131000,
            type: 3,
            name: '香河县',
            zipCode: '065400',
            child: null
          },
          {
            id: 131025,
            pid: 131000,
            type: 3,
            name: '大城县',
            zipCode: '065900',
            child: null
          },
          {
            id: 131026,
            pid: 131000,
            type: 3,
            name: '文安县',
            zipCode: '065800',
            child: null
          },
          {
            id: 131028,
            pid: 131000,
            type: 3,
            name: '大厂回族自治县',
            zipCode: '065300',
            child: null
          },
          {
            id: 131081,
            pid: 131000,
            type: 3,
            name: '霸州市',
            zipCode: '065700',
            child: null
          },
          {
            id: 131082,
            pid: 131000,
            type: 3,
            name: '三河市',
            zipCode: '065200',
            child: null
          }
        ]
      },
      {
        id: 131100,
        pid: 130000,
        type: 2,
        name: '衡水市',
        zipCode: '053000',
        child: [
          {
            id: 131102,
            pid: 131100,
            type: 3,
            name: '桃城区',
            zipCode: '053000',
            child: null
          },
          {
            id: 131121,
            pid: 131100,
            type: 3,
            name: '枣强县',
            zipCode: '053100',
            child: null
          },
          {
            id: 131122,
            pid: 131100,
            type: 3,
            name: '武邑县',
            zipCode: '053400',
            child: null
          },
          {
            id: 131123,
            pid: 131100,
            type: 3,
            name: '武强县',
            zipCode: '053300',
            child: null
          },
          {
            id: 131124,
            pid: 131100,
            type: 3,
            name: '饶阳县',
            zipCode: '053900',
            child: null
          },
          {
            id: 131125,
            pid: 131100,
            type: 3,
            name: '安平县',
            zipCode: '053600',
            child: null
          },
          {
            id: 131126,
            pid: 131100,
            type: 3,
            name: '故城县',
            zipCode: '053800',
            child: null
          },
          {
            id: 131127,
            pid: 131100,
            type: 3,
            name: '景县',
            zipCode: '053500',
            child: null
          },
          {
            id: 131128,
            pid: 131100,
            type: 3,
            name: '阜城县',
            zipCode: '053700',
            child: null
          },
          {
            id: 131181,
            pid: 131100,
            type: 3,
            name: '冀州市',
            zipCode: '053200',
            child: null
          },
          {
            id: 131182,
            pid: 131100,
            type: 3,
            name: '深州市',
            zipCode: '053800',
            child: null
          }
        ]
      }
    ]
  },
  {
    id: 140000,
    pid: 100000,
    type: 1,
    name: '山西省',
    base: 'sx', //省份简称
    zipCode: '',
    child: [
      {
        id: 140100,
        pid: 140000,
        type: 2,
        name: '太原市',
        zipCode: '030082',
        child: [
          {
            id: 140105,
            pid: 140100,
            type: 3,
            name: '小店区',
            zipCode: '030032',
            child: null
          },
          {
            id: 140106,
            pid: 140100,
            type: 3,
            name: '迎泽区',
            zipCode: '030002',
            child: null
          },
          {
            id: 140107,
            pid: 140100,
            type: 3,
            name: '杏花岭区',
            zipCode: '030009',
            child: null
          },
          {
            id: 140108,
            pid: 140100,
            type: 3,
            name: '尖草坪区',
            zipCode: '030023',
            child: null
          },
          {
            id: 140109,
            pid: 140100,
            type: 3,
            name: '万柏林区',
            zipCode: '030024',
            child: null
          },
          {
            id: 140110,
            pid: 140100,
            type: 3,
            name: '晋源区',
            zipCode: '030025',
            child: null
          },
          {
            id: 140121,
            pid: 140100,
            type: 3,
            name: '清徐县',
            zipCode: '030400',
            child: null
          },
          {
            id: 140122,
            pid: 140100,
            type: 3,
            name: '阳曲县',
            zipCode: '030100',
            child: null
          },
          {
            id: 140123,
            pid: 140100,
            type: 3,
            name: '娄烦县',
            zipCode: '030300',
            child: null
          },
          {
            id: 140181,
            pid: 140100,
            type: 3,
            name: '古交市',
            zipCode: '030200',
            child: null
          }
        ]
      },
      {
        id: 140200,
        pid: 140000,
        type: 2,
        name: '大同市',
        zipCode: '037008',
        child: [
          {
            id: 140202,
            pid: 140200,
            type: 3,
            name: '城区',
            zipCode: '037008',
            child: null
          },
          {
            id: 140203,
            pid: 140200,
            type: 3,
            name: '矿区',
            zipCode: '037003',
            child: null
          },
          {
            id: 140211,
            pid: 140200,
            type: 3,
            name: '南郊区',
            zipCode: '037001',
            child: null
          },
          {
            id: 140212,
            pid: 140200,
            type: 3,
            name: '新荣区',
            zipCode: '037002',
            child: null
          },
          {
            id: 140221,
            pid: 140200,
            type: 3,
            name: '阳高县',
            zipCode: '038100',
            child: null
          },
          {
            id: 140222,
            pid: 140200,
            type: 3,
            name: '天镇县',
            zipCode: '038200',
            child: null
          },
          {
            id: 140223,
            pid: 140200,
            type: 3,
            name: '广灵县',
            zipCode: '037500',
            child: null
          },
          {
            id: 140224,
            pid: 140200,
            type: 3,
            name: '灵丘县',
            zipCode: '034400',
            child: null
          },
          {
            id: 140225,
            pid: 140200,
            type: 3,
            name: '浑源县',
            zipCode: '037400',
            child: null
          },
          {
            id: 140226,
            pid: 140200,
            type: 3,
            name: '左云县',
            zipCode: '037100',
            child: null
          },
          {
            id: 140227,
            pid: 140200,
            type: 3,
            name: '大同县',
            zipCode: '037300',
            child: null
          }
        ]
      },
      {
        id: 140300,
        pid: 140000,
        type: 2,
        name: '阳泉市',
        zipCode: '045000',
        child: [
          {
            id: 140302,
            pid: 140300,
            type: 3,
            name: '城区',
            zipCode: '045000',
            child: null
          },
          {
            id: 140303,
            pid: 140300,
            type: 3,
            name: '矿区',
            zipCode: '045000',
            child: null
          },
          {
            id: 140311,
            pid: 140300,
            type: 3,
            name: '郊区',
            zipCode: '045011',
            child: null
          },
          {
            id: 140321,
            pid: 140300,
            type: 3,
            name: '平定县',
            zipCode: '045200',
            child: null
          },
          {
            id: 140322,
            pid: 140300,
            type: 3,
            name: '盂县',
            zipCode: '045100',
            child: null
          }
        ]
      },
      {
        id: 140400,
        pid: 140000,
        type: 2,
        name: '长治市',
        zipCode: '046000',
        child: [
          {
            id: 140402,
            pid: 140400,
            type: 3,
            name: '城区',
            zipCode: '046011',
            child: null
          },
          {
            id: 140411,
            pid: 140400,
            type: 3,
            name: '郊区',
            zipCode: '046011',
            child: null
          },
          {
            id: 140421,
            pid: 140400,
            type: 3,
            name: '长治县',
            zipCode: '047100',
            child: null
          },
          {
            id: 140423,
            pid: 140400,
            type: 3,
            name: '襄垣县',
            zipCode: '046200',
            child: null
          },
          {
            id: 140424,
            pid: 140400,
            type: 3,
            name: '屯留县',
            zipCode: '046100',
            child: null
          },
          {
            id: 140425,
            pid: 140400,
            type: 3,
            name: '平顺县',
            zipCode: '047400',
            child: null
          },
          {
            id: 140426,
            pid: 140400,
            type: 3,
            name: '黎城县',
            zipCode: '047600',
            child: null
          },
          {
            id: 140427,
            pid: 140400,
            type: 3,
            name: '壶关县',
            zipCode: '047300',
            child: null
          },
          {
            id: 140428,
            pid: 140400,
            type: 3,
            name: '长子县',
            zipCode: '046600',
            child: null
          },
          {
            id: 140429,
            pid: 140400,
            type: 3,
            name: '武乡县',
            zipCode: '046300',
            child: null
          },
          {
            id: 140430,
            pid: 140400,
            type: 3,
            name: '沁县',
            zipCode: '046400',
            child: null
          },
          {
            id: 140431,
            pid: 140400,
            type: 3,
            name: '沁源县',
            zipCode: '046500',
            child: null
          },
          {
            id: 140481,
            pid: 140400,
            type: 3,
            name: '潞城市',
            zipCode: '047500',
            child: null
          }
        ]
      },
      {
        id: 140500,
        pid: 140000,
        type: 2,
        name: '晋城市',
        zipCode: '048000',
        child: [
          {
            id: 140502,
            pid: 140500,
            type: 3,
            name: '城区',
            zipCode: '048000',
            child: null
          },
          {
            id: 140521,
            pid: 140500,
            type: 3,
            name: '沁水县',
            zipCode: '048200',
            child: null
          },
          {
            id: 140522,
            pid: 140500,
            type: 3,
            name: '阳城县',
            zipCode: '048100',
            child: null
          },
          {
            id: 140524,
            pid: 140500,
            type: 3,
            name: '陵川县',
            zipCode: '048300',
            child: null
          },
          {
            id: 140525,
            pid: 140500,
            type: 3,
            name: '泽州县',
            zipCode: '048012',
            child: null
          },
          {
            id: 140581,
            pid: 140500,
            type: 3,
            name: '高平市',
            zipCode: '048400',
            child: null
          }
        ]
      },
      {
        id: 140600,
        pid: 140000,
        type: 2,
        name: '朔州市',
        zipCode: '038500',
        child: [
          {
            id: 140602,
            pid: 140600,
            type: 3,
            name: '朔城区',
            zipCode: '036000',
            child: null
          },
          {
            id: 140603,
            pid: 140600,
            type: 3,
            name: '平鲁区',
            zipCode: '038600',
            child: null
          },
          {
            id: 140621,
            pid: 140600,
            type: 3,
            name: '山阴县',
            zipCode: '036900',
            child: null
          },
          {
            id: 140622,
            pid: 140600,
            type: 3,
            name: '应县',
            zipCode: '037600',
            child: null
          },
          {
            id: 140623,
            pid: 140600,
            type: 3,
            name: '右玉县',
            zipCode: '037200',
            child: null
          },
          {
            id: 140624,
            pid: 140600,
            type: 3,
            name: '怀仁县',
            zipCode: '038300',
            child: null
          }
        ]
      },
      {
        id: 140700,
        pid: 140000,
        type: 2,
        name: '晋中市',
        zipCode: '030600',
        child: [
          {
            id: 140702,
            pid: 140700,
            type: 3,
            name: '榆次区',
            zipCode: '030600',
            child: null
          },
          {
            id: 140721,
            pid: 140700,
            type: 3,
            name: '榆社县',
            zipCode: '031800',
            child: null
          },
          {
            id: 140722,
            pid: 140700,
            type: 3,
            name: '左权县',
            zipCode: '032600',
            child: null
          },
          {
            id: 140723,
            pid: 140700,
            type: 3,
            name: '和顺县',
            zipCode: '032700',
            child: null
          },
          {
            id: 140724,
            pid: 140700,
            type: 3,
            name: '昔阳县',
            zipCode: '045300',
            child: null
          },
          {
            id: 140725,
            pid: 140700,
            type: 3,
            name: '寿阳县',
            zipCode: '045400',
            child: null
          },
          {
            id: 140726,
            pid: 140700,
            type: 3,
            name: '太谷县',
            zipCode: '030800',
            child: null
          },
          {
            id: 140727,
            pid: 140700,
            type: 3,
            name: '祁县',
            zipCode: '030900',
            child: null
          },
          {
            id: 140728,
            pid: 140700,
            type: 3,
            name: '平遥县',
            zipCode: '031100',
            child: null
          },
          {
            id: 140729,
            pid: 140700,
            type: 3,
            name: '灵石县',
            zipCode: '031300',
            child: null
          },
          {
            id: 140781,
            pid: 140700,
            type: 3,
            name: '介休市',
            zipCode: '032000',
            child: null
          }
        ]
      },
      {
        id: 140800,
        pid: 140000,
        type: 2,
        name: '运城市',
        zipCode: '044000',
        child: [
          {
            id: 140802,
            pid: 140800,
            type: 3,
            name: '盐湖区',
            zipCode: '044000',
            child: null
          },
          {
            id: 140821,
            pid: 140800,
            type: 3,
            name: '临猗县',
            zipCode: '044100',
            child: null
          },
          {
            id: 140822,
            pid: 140800,
            type: 3,
            name: '万荣县',
            zipCode: '044200',
            child: null
          },
          {
            id: 140823,
            pid: 140800,
            type: 3,
            name: '闻喜县',
            zipCode: '043800',
            child: null
          },
          {
            id: 140824,
            pid: 140800,
            type: 3,
            name: '稷山县',
            zipCode: '043200',
            child: null
          },
          {
            id: 140825,
            pid: 140800,
            type: 3,
            name: '新绛县',
            zipCode: '043100',
            child: null
          },
          {
            id: 140826,
            pid: 140800,
            type: 3,
            name: '绛县',
            zipCode: '043600',
            child: null
          },
          {
            id: 140827,
            pid: 140800,
            type: 3,
            name: '垣曲县',
            zipCode: '043700',
            child: null
          },
          {
            id: 140828,
            pid: 140800,
            type: 3,
            name: '夏县',
            zipCode: '044400',
            child: null
          },
          {
            id: 140829,
            pid: 140800,
            type: 3,
            name: '平陆县',
            zipCode: '044300',
            child: null
          },
          {
            id: 140830,
            pid: 140800,
            type: 3,
            name: '芮城县',
            zipCode: '044600',
            child: null
          },
          {
            id: 140881,
            pid: 140800,
            type: 3,
            name: '永济市',
            zipCode: '044500',
            child: null
          },
          {
            id: 140882,
            pid: 140800,
            type: 3,
            name: '河津市',
            zipCode: '043300',
            child: null
          }
        ]
      },
      {
        id: 140900,
        pid: 140000,
        type: 2,
        name: '忻州市',
        zipCode: '034000',
        child: [
          {
            id: 140902,
            pid: 140900,
            type: 3,
            name: '忻府区',
            zipCode: '034000',
            child: null
          },
          {
            id: 140921,
            pid: 140900,
            type: 3,
            name: '定襄县',
            zipCode: '035400',
            child: null
          },
          {
            id: 140922,
            pid: 140900,
            type: 3,
            name: '五台县',
            zipCode: '035500',
            child: null
          },
          {
            id: 140923,
            pid: 140900,
            type: 3,
            name: '代县',
            zipCode: '034200',
            child: null
          },
          {
            id: 140924,
            pid: 140900,
            type: 3,
            name: '繁峙县',
            zipCode: '034300',
            child: null
          },
          {
            id: 140925,
            pid: 140900,
            type: 3,
            name: '宁武县',
            zipCode: '036700',
            child: null
          },
          {
            id: 140926,
            pid: 140900,
            type: 3,
            name: '静乐县',
            zipCode: '035100',
            child: null
          },
          {
            id: 140927,
            pid: 140900,
            type: 3,
            name: '神池县',
            zipCode: '036100',
            child: null
          },
          {
            id: 140928,
            pid: 140900,
            type: 3,
            name: '五寨县',
            zipCode: '036200',
            child: null
          },
          {
            id: 140929,
            pid: 140900,
            type: 3,
            name: '岢岚县',
            zipCode: '036300',
            child: null
          },
          {
            id: 140930,
            pid: 140900,
            type: 3,
            name: '河曲县',
            zipCode: '036500',
            child: null
          },
          {
            id: 140931,
            pid: 140900,
            type: 3,
            name: '保德县',
            zipCode: '036600',
            child: null
          },
          {
            id: 140932,
            pid: 140900,
            type: 3,
            name: '偏关县',
            zipCode: '036400',
            child: null
          },
          {
            id: 140981,
            pid: 140900,
            type: 3,
            name: '原平市',
            zipCode: '034100',
            child: null
          }
        ]
      },
      {
        id: 141000,
        pid: 140000,
        type: 2,
        name: '临汾市',
        zipCode: '041000',
        child: [
          {
            id: 141002,
            pid: 141000,
            type: 3,
            name: '尧都区',
            zipCode: '041000',
            child: null
          },
          {
            id: 141021,
            pid: 141000,
            type: 3,
            name: '曲沃县',
            zipCode: '043400',
            child: null
          },
          {
            id: 141022,
            pid: 141000,
            type: 3,
            name: '翼城县',
            zipCode: '043500',
            child: null
          },
          {
            id: 141023,
            pid: 141000,
            type: 3,
            name: '襄汾县',
            zipCode: '041500',
            child: null
          },
          {
            id: 141024,
            pid: 141000,
            type: 3,
            name: '洪洞县',
            zipCode: '041600',
            child: null
          },
          {
            id: 141025,
            pid: 141000,
            type: 3,
            name: '古县',
            zipCode: '042400',
            child: null
          },
          {
            id: 141026,
            pid: 141000,
            type: 3,
            name: '安泽县',
            zipCode: '042500',
            child: null
          },
          {
            id: 141027,
            pid: 141000,
            type: 3,
            name: '浮山县',
            zipCode: '042600',
            child: null
          },
          {
            id: 141028,
            pid: 141000,
            type: 3,
            name: '吉县',
            zipCode: '042200',
            child: null
          },
          {
            id: 141029,
            pid: 141000,
            type: 3,
            name: '乡宁县',
            zipCode: '042100',
            child: null
          },
          {
            id: 141030,
            pid: 141000,
            type: 3,
            name: '大宁县',
            zipCode: '042300',
            child: null
          },
          {
            id: 141031,
            pid: 141000,
            type: 3,
            name: '隰县',
            zipCode: '041300',
            child: null
          },
          {
            id: 141032,
            pid: 141000,
            type: 3,
            name: '永和县',
            zipCode: '041400',
            child: null
          },
          {
            id: 141033,
            pid: 141000,
            type: 3,
            name: '蒲县',
            zipCode: '041200',
            child: null
          },
          {
            id: 141034,
            pid: 141000,
            type: 3,
            name: '汾西县',
            zipCode: '031500',
            child: null
          },
          {
            id: 141081,
            pid: 141000,
            type: 3,
            name: '侯马市',
            zipCode: '043000',
            child: null
          },
          {
            id: 141082,
            pid: 141000,
            type: 3,
            name: '霍州市',
            zipCode: '031400',
            child: null
          }
        ]
      },
      {
        id: 141100,
        pid: 140000,
        type: 2,
        name: '吕梁市',
        zipCode: '033000',
        child: [
          {
            id: 141102,
            pid: 141100,
            type: 3,
            name: '离石区',
            zipCode: '033000',
            child: null
          },
          {
            id: 141121,
            pid: 141100,
            type: 3,
            name: '文水县',
            zipCode: '032100',
            child: null
          },
          {
            id: 141122,
            pid: 141100,
            type: 3,
            name: '交城县',
            zipCode: '030500',
            child: null
          },
          {
            id: 141123,
            pid: 141100,
            type: 3,
            name: '兴县',
            zipCode: '033600',
            child: null
          },
          {
            id: 141124,
            pid: 141100,
            type: 3,
            name: '临县',
            zipCode: '033200',
            child: null
          },
          {
            id: 141125,
            pid: 141100,
            type: 3,
            name: '柳林县',
            zipCode: '033300',
            child: null
          },
          {
            id: 141126,
            pid: 141100,
            type: 3,
            name: '石楼县',
            zipCode: '032500',
            child: null
          },
          {
            id: 141127,
            pid: 141100,
            type: 3,
            name: '岚县',
            zipCode: '033500',
            child: null
          },
          {
            id: 141128,
            pid: 141100,
            type: 3,
            name: '方山县',
            zipCode: '033100',
            child: null
          },
          {
            id: 141129,
            pid: 141100,
            type: 3,
            name: '中阳县',
            zipCode: '033400',
            child: null
          },
          {
            id: 141130,
            pid: 141100,
            type: 3,
            name: '交口县',
            zipCode: '032400',
            child: null
          },
          {
            id: 141181,
            pid: 141100,
            type: 3,
            name: '孝义市',
            zipCode: '032300',
            child: null
          },
          {
            id: 141182,
            pid: 141100,
            type: 3,
            name: '汾阳市',
            zipCode: '032200',
            child: null
          }
        ]
      }
    ]
  },
  {
    id: 150000,
    pid: 100000,
    type: 1,
    name: '内蒙古自治区',
    base: 'nmg', //省份简称
    zipCode: '',
    child: [
      {
        id: 150100,
        pid: 150000,
        type: 2,
        name: '呼和浩特市',
        zipCode: '010000',
        child: [
          {
            id: 150102,
            pid: 150100,
            type: 3,
            name: '新城区',
            zipCode: '010050',
            child: null
          },
          {
            id: 150103,
            pid: 150100,
            type: 3,
            name: '回民区',
            zipCode: '010030',
            child: null
          },
          {
            id: 150104,
            pid: 150100,
            type: 3,
            name: '玉泉区',
            zipCode: '010020',
            child: null
          },
          {
            id: 150105,
            pid: 150100,
            type: 3,
            name: '赛罕区',
            zipCode: '010020',
            child: null
          },
          {
            id: 150121,
            pid: 150100,
            type: 3,
            name: '土默特左旗',
            zipCode: '010100',
            child: null
          },
          {
            id: 150122,
            pid: 150100,
            type: 3,
            name: '托克托县',
            zipCode: '010200',
            child: null
          },
          {
            id: 150123,
            pid: 150100,
            type: 3,
            name: '和林格尔县',
            zipCode: '011500',
            child: null
          },
          {
            id: 150124,
            pid: 150100,
            type: 3,
            name: '清水河县',
            zipCode: '011600',
            child: null
          },
          {
            id: 150125,
            pid: 150100,
            type: 3,
            name: '武川县',
            zipCode: '011700',
            child: null
          }
        ]
      },
      {
        id: 150200,
        pid: 150000,
        type: 2,
        name: '包头市',
        zipCode: '014025',
        child: [
          {
            id: 150202,
            pid: 150200,
            type: 3,
            name: '东河区',
            zipCode: '014040',
            child: null
          },
          {
            id: 150203,
            pid: 150200,
            type: 3,
            name: '昆都仑区',
            zipCode: '014010',
            child: null
          },
          {
            id: 150204,
            pid: 150200,
            type: 3,
            name: '青山区',
            zipCode: '014030',
            child: null
          },
          {
            id: 150205,
            pid: 150200,
            type: 3,
            name: '石拐区',
            zipCode: '014070',
            child: null
          },
          {
            id: 150206,
            pid: 150200,
            type: 3,
            name: '白云鄂博矿区',
            zipCode: '014080',
            child: null
          },
          {
            id: 150207,
            pid: 150200,
            type: 3,
            name: '九原区',
            zipCode: '014060',
            child: null
          },
          {
            id: 150221,
            pid: 150200,
            type: 3,
            name: '土默特右旗',
            zipCode: '014100',
            child: null
          },
          {
            id: 150222,
            pid: 150200,
            type: 3,
            name: '固阳县',
            zipCode: '014200',
            child: null
          },
          {
            id: 150223,
            pid: 150200,
            type: 3,
            name: '达尔罕茂明安联合旗',
            zipCode: '014500',
            child: null
          }
        ]
      },
      {
        id: 150300,
        pid: 150000,
        type: 2,
        name: '乌海市',
        zipCode: '016000',
        child: [
          {
            id: 150302,
            pid: 150300,
            type: 3,
            name: '海勃湾区',
            zipCode: '016000',
            child: null
          },
          {
            id: 150303,
            pid: 150300,
            type: 3,
            name: '海南区',
            zipCode: '016030',
            child: null
          },
          {
            id: 150304,
            pid: 150300,
            type: 3,
            name: '乌达区',
            zipCode: '016040',
            child: null
          }
        ]
      },
      {
        id: 150400,
        pid: 150000,
        type: 2,
        name: '赤峰市',
        zipCode: '024000',
        child: [
          {
            id: 150402,
            pid: 150400,
            type: 3,
            name: '红山区',
            zipCode: '024020',
            child: null
          },
          {
            id: 150403,
            pid: 150400,
            type: 3,
            name: '元宝山区',
            zipCode: '024076',
            child: null
          },
          {
            id: 150404,
            pid: 150400,
            type: 3,
            name: '松山区',
            zipCode: '024005',
            child: null
          },
          {
            id: 150421,
            pid: 150400,
            type: 3,
            name: '阿鲁科尔沁旗',
            zipCode: '025550',
            child: null
          },
          {
            id: 150422,
            pid: 150400,
            type: 3,
            name: '巴林左旗',
            zipCode: '025450',
            child: null
          },
          {
            id: 150423,
            pid: 150400,
            type: 3,
            name: '巴林右旗',
            zipCode: '025150',
            child: null
          },
          {
            id: 150424,
            pid: 150400,
            type: 3,
            name: '林西县',
            zipCode: '025250',
            child: null
          },
          {
            id: 150425,
            pid: 150400,
            type: 3,
            name: '克什克腾旗',
            zipCode: '025350',
            child: null
          },
          {
            id: 150426,
            pid: 150400,
            type: 3,
            name: '翁牛特旗',
            zipCode: '024500',
            child: null
          },
          {
            id: 150428,
            pid: 150400,
            type: 3,
            name: '喀喇沁旗',
            zipCode: '024400',
            child: null
          },
          {
            id: 150429,
            pid: 150400,
            type: 3,
            name: '宁城县',
            zipCode: '024200',
            child: null
          },
          {
            id: 150430,
            pid: 150400,
            type: 3,
            name: '敖汉旗',
            zipCode: '024300',
            child: null
          }
        ]
      },
      {
        id: 150500,
        pid: 150000,
        type: 2,
        name: '通辽市',
        zipCode: '028000',
        child: [
          {
            id: 150502,
            pid: 150500,
            type: 3,
            name: '科尔沁区',
            zipCode: '028000',
            child: null
          },
          {
            id: 150521,
            pid: 150500,
            type: 3,
            name: '科尔沁左翼中旗',
            zipCode: '029300',
            child: null
          },
          {
            id: 150522,
            pid: 150500,
            type: 3,
            name: '科尔沁左翼后旗',
            zipCode: '028100',
            child: null
          },
          {
            id: 150523,
            pid: 150500,
            type: 3,
            name: '开鲁县',
            zipCode: '028400',
            child: null
          },
          {
            id: 150524,
            pid: 150500,
            type: 3,
            name: '库伦旗',
            zipCode: '028200',
            child: null
          },
          {
            id: 150525,
            pid: 150500,
            type: 3,
            name: '奈曼旗',
            zipCode: '028300',
            child: null
          },
          {
            id: 150526,
            pid: 150500,
            type: 3,
            name: '扎鲁特旗',
            zipCode: '029100',
            child: null
          },
          {
            id: 150581,
            pid: 150500,
            type: 3,
            name: '霍林郭勒市',
            zipCode: '029200',
            child: null
          }
        ]
      },
      {
        id: 150600,
        pid: 150000,
        type: 2,
        name: '鄂尔多斯市',
        zipCode: '017004',
        child: [
          {
            id: 150602,
            pid: 150600,
            type: 3,
            name: '东胜区',
            zipCode: '017000',
            child: null
          },
          {
            id: 150621,
            pid: 150600,
            type: 3,
            name: '达拉特旗',
            zipCode: '014300',
            child: null
          },
          {
            id: 150622,
            pid: 150600,
            type: 3,
            name: '准格尔旗',
            zipCode: '017100',
            child: null
          },
          {
            id: 150623,
            pid: 150600,
            type: 3,
            name: '鄂托克前旗',
            zipCode: '016200',
            child: null
          },
          {
            id: 150624,
            pid: 150600,
            type: 3,
            name: '鄂托克旗',
            zipCode: '016100',
            child: null
          },
          {
            id: 150625,
            pid: 150600,
            type: 3,
            name: '杭锦旗',
            zipCode: '017400',
            child: null
          },
          {
            id: 150626,
            pid: 150600,
            type: 3,
            name: '乌审旗',
            zipCode: '017300',
            child: null
          },
          {
            id: 150627,
            pid: 150600,
            type: 3,
            name: '伊金霍洛旗',
            zipCode: '017200',
            child: null
          }
        ]
      },
      {
        id: 150700,
        pid: 150000,
        type: 2,
        name: '呼伦贝尔市',
        zipCode: '021008',
        child: [
          {
            id: 150702,
            pid: 150700,
            type: 3,
            name: '海拉尔区',
            zipCode: '021000',
            child: null
          },
          {
            id: 150703,
            pid: 150700,
            type: 3,
            name: '扎赉诺尔区',
            zipCode: '021410',
            child: null
          },
          {
            id: 150721,
            pid: 150700,
            type: 3,
            name: '阿荣旗',
            zipCode: '162750',
            child: null
          },
          {
            id: 150722,
            pid: 150700,
            type: 3,
            name: '莫力达瓦达斡尔族自治旗',
            zipCode: '162850',
            child: null
          },
          {
            id: 150723,
            pid: 150700,
            type: 3,
            name: '鄂伦春自治旗',
            zipCode: '165450',
            child: null
          },
          {
            id: 150724,
            pid: 150700,
            type: 3,
            name: '鄂温克族自治旗',
            zipCode: '021100',
            child: null
          },
          {
            id: 150725,
            pid: 150700,
            type: 3,
            name: '陈巴尔虎旗',
            zipCode: '021500',
            child: null
          },
          {
            id: 150726,
            pid: 150700,
            type: 3,
            name: '新巴尔虎左旗',
            zipCode: '021200',
            child: null
          },
          {
            id: 150727,
            pid: 150700,
            type: 3,
            name: '新巴尔虎右旗',
            zipCode: '021300',
            child: null
          },
          {
            id: 150781,
            pid: 150700,
            type: 3,
            name: '满洲里市',
            zipCode: '021400',
            child: null
          },
          {
            id: 150782,
            pid: 150700,
            type: 3,
            name: '牙克石市',
            zipCode: '022150',
            child: null
          },
          {
            id: 150783,
            pid: 150700,
            type: 3,
            name: '扎兰屯市',
            zipCode: '162650',
            child: null
          },
          {
            id: 150784,
            pid: 150700,
            type: 3,
            name: '额尔古纳市',
            zipCode: '022250',
            child: null
          },
          {
            id: 150785,
            pid: 150700,
            type: 3,
            name: '根河市',
            zipCode: '022350',
            child: null
          }
        ]
      },
      {
        id: 150800,
        pid: 150000,
        type: 2,
        name: '巴彦淖尔市',
        zipCode: '015001',
        child: [
          {
            id: 150802,
            pid: 150800,
            type: 3,
            name: '临河区',
            zipCode: '015001',
            child: null
          },
          {
            id: 150821,
            pid: 150800,
            type: 3,
            name: '五原县',
            zipCode: '015100',
            child: null
          },
          {
            id: 150822,
            pid: 150800,
            type: 3,
            name: '磴口县',
            zipCode: '015200',
            child: null
          },
          {
            id: 150823,
            pid: 150800,
            type: 3,
            name: '乌拉特前旗',
            zipCode: '014400',
            child: null
          },
          {
            id: 150824,
            pid: 150800,
            type: 3,
            name: '乌拉特中旗',
            zipCode: '015300',
            child: null
          },
          {
            id: 150825,
            pid: 150800,
            type: 3,
            name: '乌拉特后旗',
            zipCode: '015500',
            child: null
          },
          {
            id: 150826,
            pid: 150800,
            type: 3,
            name: '杭锦后旗',
            zipCode: '015400',
            child: null
          }
        ]
      },
      {
        id: 150900,
        pid: 150000,
        type: 2,
        name: '乌兰察布市',
        zipCode: '012000',
        child: [
          {
            id: 150902,
            pid: 150900,
            type: 3,
            name: '集宁区',
            zipCode: '012000',
            child: null
          },
          {
            id: 150921,
            pid: 150900,
            type: 3,
            name: '卓资县',
            zipCode: '012300',
            child: null
          },
          {
            id: 150922,
            pid: 150900,
            type: 3,
            name: '化德县',
            zipCode: '013350',
            child: null
          },
          {
            id: 150923,
            pid: 150900,
            type: 3,
            name: '商都县',
            zipCode: '013450',
            child: null
          },
          {
            id: 150924,
            pid: 150900,
            type: 3,
            name: '兴和县',
            zipCode: '013650',
            child: null
          },
          {
            id: 150925,
            pid: 150900,
            type: 3,
            name: '凉城县',
            zipCode: '013750',
            child: null
          },
          {
            id: 150926,
            pid: 150900,
            type: 3,
            name: '察哈尔右翼前旗',
            zipCode: '012200',
            child: null
          },
          {
            id: 150927,
            pid: 150900,
            type: 3,
            name: '察哈尔右翼中旗',
            zipCode: '013550',
            child: null
          },
          {
            id: 150928,
            pid: 150900,
            type: 3,
            name: '察哈尔右翼后旗',
            zipCode: '012400',
            child: null
          },
          {
            id: 150929,
            pid: 150900,
            type: 3,
            name: '四子王旗',
            zipCode: '011800',
            child: null
          },
          {
            id: 150981,
            pid: 150900,
            type: 3,
            name: '丰镇市',
            zipCode: '012100',
            child: null
          }
        ]
      },
      {
        id: 152200,
        pid: 150000,
        type: 2,
        name: '兴安盟',
        zipCode: '137401',
        child: [
          {
            id: 152201,
            pid: 152200,
            type: 3,
            name: '乌兰浩特市',
            zipCode: '137401',
            child: null
          },
          {
            id: 152202,
            pid: 152200,
            type: 3,
            name: '阿尔山市',
            zipCode: '137800',
            child: null
          },
          {
            id: 152221,
            pid: 152200,
            type: 3,
            name: '科尔沁右翼前旗',
            zipCode: '137423',
            child: null
          },
          {
            id: 152222,
            pid: 152200,
            type: 3,
            name: '科尔沁右翼中旗',
            zipCode: '029400',
            child: null
          },
          {
            id: 152223,
            pid: 152200,
            type: 3,
            name: '扎赉特旗',
            zipCode: '137600',
            child: null
          },
          {
            id: 152224,
            pid: 152200,
            type: 3,
            name: '突泉县',
            zipCode: '137500',
            child: null
          }
        ]
      },
      {
        id: 152500,
        pid: 150000,
        type: 2,
        name: '锡林郭勒盟',
        zipCode: '026000',
        child: [
          {
            id: 152501,
            pid: 152500,
            type: 3,
            name: '二连浩特市',
            zipCode: '011100',
            child: null
          },
          {
            id: 152502,
            pid: 152500,
            type: 3,
            name: '锡林浩特市',
            zipCode: '026021',
            child: null
          },
          {
            id: 152522,
            pid: 152500,
            type: 3,
            name: '阿巴嘎旗',
            zipCode: '011400',
            child: null
          },
          {
            id: 152523,
            pid: 152500,
            type: 3,
            name: '苏尼特左旗',
            zipCode: '011300',
            child: null
          },
          {
            id: 152524,
            pid: 152500,
            type: 3,
            name: '苏尼特右旗',
            zipCode: '011200',
            child: null
          },
          {
            id: 152525,
            pid: 152500,
            type: 3,
            name: '东乌珠穆沁旗',
            zipCode: '026300',
            child: null
          },
          {
            id: 152526,
            pid: 152500,
            type: 3,
            name: '西乌珠穆沁旗',
            zipCode: '026200',
            child: null
          },
          {
            id: 152527,
            pid: 152500,
            type: 3,
            name: '太仆寺旗',
            zipCode: '027000',
            child: null
          },
          {
            id: 152528,
            pid: 152500,
            type: 3,
            name: '镶黄旗',
            zipCode: '013250',
            child: null
          },
          {
            id: 152529,
            pid: 152500,
            type: 3,
            name: '正镶白旗',
            zipCode: '013800',
            child: null
          },
          {
            id: 152530,
            pid: 152500,
            type: 3,
            name: '正蓝旗',
            zipCode: '027200',
            child: null
          },
          {
            id: 152531,
            pid: 152500,
            type: 3,
            name: '多伦县',
            zipCode: '027300',
            child: null
          }
        ]
      },
      {
        id: 152900,
        pid: 150000,
        type: 2,
        name: '阿拉善盟',
        zipCode: '750306',
        child: [
          {
            id: 152921,
            pid: 152900,
            type: 3,
            name: '阿拉善左旗',
            zipCode: '750306',
            child: null
          },
          {
            id: 152922,
            pid: 152900,
            type: 3,
            name: '阿拉善右旗',
            zipCode: '737300',
            child: null
          },
          {
            id: 152923,
            pid: 152900,
            type: 3,
            name: '额济纳旗',
            zipCode: '735400',
            child: null
          }
        ]
      }
    ]
  },
  {
    id: 210000,
    pid: 100000,
    type: 1,
    name: '辽宁省',
    base: 'ln', //省份简称
    zipCode: '',
    child: [
      {
        id: 210100,
        pid: 210000,
        type: 2,
        name: '沈阳市',
        zipCode: '110013',
        child: [
          {
            id: 210102,
            pid: 210100,
            type: 3,
            name: '和平区',
            zipCode: '110001',
            child: null
          },
          {
            id: 210103,
            pid: 210100,
            type: 3,
            name: '沈河区',
            zipCode: '110011',
            child: null
          },
          {
            id: 210104,
            pid: 210100,
            type: 3,
            name: '大东区',
            zipCode: '110041',
            child: null
          },
          {
            id: 210105,
            pid: 210100,
            type: 3,
            name: '皇姑区',
            zipCode: '110031',
            child: null
          },
          {
            id: 210106,
            pid: 210100,
            type: 3,
            name: '铁西区',
            zipCode: '110021',
            child: null
          },
          {
            id: 210111,
            pid: 210100,
            type: 3,
            name: '苏家屯区',
            zipCode: '110101',
            child: null
          },
          {
            id: 210112,
            pid: 210100,
            type: 3,
            name: '浑南区',
            zipCode: '110015',
            child: null
          },
          {
            id: 210113,
            pid: 210100,
            type: 3,
            name: '沈北新区',
            zipCode: '110121',
            child: null
          },
          {
            id: 210114,
            pid: 210100,
            type: 3,
            name: '于洪区',
            zipCode: '110141',
            child: null
          },
          {
            id: 210122,
            pid: 210100,
            type: 3,
            name: '辽中县',
            zipCode: '110200',
            child: null
          },
          {
            id: 210123,
            pid: 210100,
            type: 3,
            name: '康平县',
            zipCode: '110500',
            child: null
          },
          {
            id: 210124,
            pid: 210100,
            type: 3,
            name: '法库县',
            zipCode: '110400',
            child: null
          },
          {
            id: 210181,
            pid: 210100,
            type: 3,
            name: '新民市',
            zipCode: '110300',
            child: null
          }
        ]
      },
      {
        id: 210200,
        pid: 210000,
        type: 2,
        name: '大连市',
        zipCode: '116011',
        child: [
          {
            id: 210202,
            pid: 210200,
            type: 3,
            name: '中山区',
            zipCode: '116001',
            child: null
          },
          {
            id: 210203,
            pid: 210200,
            type: 3,
            name: '西岗区',
            zipCode: '116011',
            child: null
          },
          {
            id: 210204,
            pid: 210200,
            type: 3,
            name: '沙河口区',
            zipCode: '116021',
            child: null
          },
          {
            id: 210211,
            pid: 210200,
            type: 3,
            name: '甘井子区',
            zipCode: '116033',
            child: null
          },
          {
            id: 210212,
            pid: 210200,
            type: 3,
            name: '旅顺口区',
            zipCode: '116041',
            child: null
          },
          {
            id: 210213,
            pid: 210200,
            type: 3,
            name: '金州区',
            zipCode: '116100',
            child: null
          },
          {
            id: 210224,
            pid: 210200,
            type: 3,
            name: '长海县',
            zipCode: '116500',
            child: null
          },
          {
            id: 210281,
            pid: 210200,
            type: 3,
            name: '瓦房店市',
            zipCode: '116300',
            child: null
          },
          {
            id: 210282,
            pid: 210200,
            type: 3,
            name: '普兰店市',
            zipCode: '116200',
            child: null
          },
          {
            id: 210283,
            pid: 210200,
            type: 3,
            name: '庄河市',
            zipCode: '116400',
            child: null
          }
        ]
      },
      {
        id: 210300,
        pid: 210000,
        type: 2,
        name: '鞍山市',
        zipCode: '114001',
        child: [
          {
            id: 210302,
            pid: 210300,
            type: 3,
            name: '铁东区',
            zipCode: '114001',
            child: null
          },
          {
            id: 210303,
            pid: 210300,
            type: 3,
            name: '铁西区',
            zipCode: '114013',
            child: null
          },
          {
            id: 210304,
            pid: 210300,
            type: 3,
            name: '立山区',
            zipCode: '114031',
            child: null
          },
          {
            id: 210311,
            pid: 210300,
            type: 3,
            name: '千山区',
            zipCode: '114041',
            child: null
          },
          {
            id: 210321,
            pid: 210300,
            type: 3,
            name: '台安县',
            zipCode: '114100',
            child: null
          },
          {
            id: 210323,
            pid: 210300,
            type: 3,
            name: '岫岩满族自治县',
            zipCode: '114300',
            child: null
          },
          {
            id: 210381,
            pid: 210300,
            type: 3,
            name: '海城市',
            zipCode: '114200',
            child: null
          }
        ]
      },
      {
        id: 210400,
        pid: 210000,
        type: 2,
        name: '抚顺市',
        zipCode: '113008',
        child: [
          {
            id: 210402,
            pid: 210400,
            type: 3,
            name: '新抚区',
            zipCode: '113008',
            child: null
          },
          {
            id: 210403,
            pid: 210400,
            type: 3,
            name: '东洲区',
            zipCode: '113003',
            child: null
          },
          {
            id: 210404,
            pid: 210400,
            type: 3,
            name: '望花区',
            zipCode: '113001',
            child: null
          },
          {
            id: 210411,
            pid: 210400,
            type: 3,
            name: '顺城区',
            zipCode: '113006',
            child: null
          },
          {
            id: 210421,
            pid: 210400,
            type: 3,
            name: '抚顺县',
            zipCode: '113006',
            child: null
          },
          {
            id: 210422,
            pid: 210400,
            type: 3,
            name: '新宾满族自治县',
            zipCode: '113200',
            child: null
          },
          {
            id: 210423,
            pid: 210400,
            type: 3,
            name: '清原满族自治县',
            zipCode: '113300',
            child: null
          }
        ]
      },
      {
        id: 210500,
        pid: 210000,
        type: 2,
        name: '本溪市',
        zipCode: '117000',
        child: [
          {
            id: 210502,
            pid: 210500,
            type: 3,
            name: '平山区',
            zipCode: '117000',
            child: null
          },
          {
            id: 210503,
            pid: 210500,
            type: 3,
            name: '溪湖区',
            zipCode: '117002',
            child: null
          },
          {
            id: 210504,
            pid: 210500,
            type: 3,
            name: '明山区',
            zipCode: '117021',
            child: null
          },
          {
            id: 210505,
            pid: 210500,
            type: 3,
            name: '南芬区',
            zipCode: '117014',
            child: null
          },
          {
            id: 210521,
            pid: 210500,
            type: 3,
            name: '本溪满族自治县',
            zipCode: '117100',
            child: null
          },
          {
            id: 210522,
            pid: 210500,
            type: 3,
            name: '桓仁满族自治县',
            zipCode: '117200',
            child: null
          }
        ]
      },
      {
        id: 210600,
        pid: 210000,
        type: 2,
        name: '丹东市',
        zipCode: '118000',
        child: [
          {
            id: 210602,
            pid: 210600,
            type: 3,
            name: '元宝区',
            zipCode: '118000',
            child: null
          },
          {
            id: 210603,
            pid: 210600,
            type: 3,
            name: '振兴区',
            zipCode: '118002',
            child: null
          },
          {
            id: 210604,
            pid: 210600,
            type: 3,
            name: '振安区',
            zipCode: '118001',
            child: null
          },
          {
            id: 210624,
            pid: 210600,
            type: 3,
            name: '宽甸满族自治县',
            zipCode: '118200',
            child: null
          },
          {
            id: 210681,
            pid: 210600,
            type: 3,
            name: '东港市',
            zipCode: '118300',
            child: null
          },
          {
            id: 210682,
            pid: 210600,
            type: 3,
            name: '凤城市',
            zipCode: '118100',
            child: null
          }
        ]
      },
      {
        id: 210700,
        pid: 210000,
        type: 2,
        name: '锦州市',
        zipCode: '121000',
        child: [
          {
            id: 210702,
            pid: 210700,
            type: 3,
            name: '古塔区',
            zipCode: '121001',
            child: null
          },
          {
            id: 210703,
            pid: 210700,
            type: 3,
            name: '凌河区',
            zipCode: '121000',
            child: null
          },
          {
            id: 210711,
            pid: 210700,
            type: 3,
            name: '太和区',
            zipCode: '121011',
            child: null
          },
          {
            id: 210726,
            pid: 210700,
            type: 3,
            name: '黑山县',
            zipCode: '121400',
            child: null
          },
          {
            id: 210727,
            pid: 210700,
            type: 3,
            name: '义县',
            zipCode: '121100',
            child: null
          },
          {
            id: 210781,
            pid: 210700,
            type: 3,
            name: '凌海市',
            zipCode: '121200',
            child: null
          },
          {
            id: 210782,
            pid: 210700,
            type: 3,
            name: '北镇市',
            zipCode: '121300',
            child: null
          }
        ]
      },
      {
        id: 210800,
        pid: 210000,
        type: 2,
        name: '营口市',
        zipCode: '115003',
        child: [
          {
            id: 210802,
            pid: 210800,
            type: 3,
            name: '站前区',
            zipCode: '115002',
            child: null
          },
          {
            id: 210803,
            pid: 210800,
            type: 3,
            name: '西市区',
            zipCode: '115004',
            child: null
          },
          {
            id: 210804,
            pid: 210800,
            type: 3,
            name: '鲅鱼圈区',
            zipCode: '115007',
            child: null
          },
          {
            id: 210811,
            pid: 210800,
            type: 3,
            name: '老边区',
            zipCode: '115005',
            child: null
          },
          {
            id: 210881,
            pid: 210800,
            type: 3,
            name: '盖州市',
            zipCode: '115200',
            child: null
          },
          {
            id: 210882,
            pid: 210800,
            type: 3,
            name: '大石桥市',
            zipCode: '115100',
            child: null
          }
        ]
      },
      {
        id: 210900,
        pid: 210000,
        type: 2,
        name: '阜新市',
        zipCode: '123000',
        child: [
          {
            id: 210902,
            pid: 210900,
            type: 3,
            name: '海州区',
            zipCode: '123000',
            child: null
          },
          {
            id: 210903,
            pid: 210900,
            type: 3,
            name: '新邱区',
            zipCode: '123005',
            child: null
          },
          {
            id: 210904,
            pid: 210900,
            type: 3,
            name: '太平区',
            zipCode: '123003',
            child: null
          },
          {
            id: 210905,
            pid: 210900,
            type: 3,
            name: '清河门区',
            zipCode: '123006',
            child: null
          },
          {
            id: 210911,
            pid: 210900,
            type: 3,
            name: '细河区',
            zipCode: '123000',
            child: null
          },
          {
            id: 210921,
            pid: 210900,
            type: 3,
            name: '阜新蒙古族自治县',
            zipCode: '123100',
            child: null
          },
          {
            id: 210922,
            pid: 210900,
            type: 3,
            name: '彰武县',
            zipCode: '123200',
            child: null
          }
        ]
      },
      {
        id: 211000,
        pid: 210000,
        type: 2,
        name: '辽阳市',
        zipCode: '111000',
        child: [
          {
            id: 211002,
            pid: 211000,
            type: 3,
            name: '白塔区',
            zipCode: '111000',
            child: null
          },
          {
            id: 211003,
            pid: 211000,
            type: 3,
            name: '文圣区',
            zipCode: '111000',
            child: null
          },
          {
            id: 211004,
            pid: 211000,
            type: 3,
            name: '宏伟区',
            zipCode: '111003',
            child: null
          },
          {
            id: 211005,
            pid: 211000,
            type: 3,
            name: '弓长岭区',
            zipCode: '111008',
            child: null
          },
          {
            id: 211011,
            pid: 211000,
            type: 3,
            name: '太子河区',
            zipCode: '111000',
            child: null
          },
          {
            id: 211021,
            pid: 211000,
            type: 3,
            name: '辽阳县',
            zipCode: '111200',
            child: null
          },
          {
            id: 211081,
            pid: 211000,
            type: 3,
            name: '灯塔市',
            zipCode: '111300',
            child: null
          }
        ]
      },
      {
        id: 211100,
        pid: 210000,
        type: 2,
        name: '盘锦市',
        zipCode: '124010',
        child: [
          {
            id: 211102,
            pid: 211100,
            type: 3,
            name: '双台子区',
            zipCode: '124000',
            child: null
          },
          {
            id: 211103,
            pid: 211100,
            type: 3,
            name: '兴隆台区',
            zipCode: '124010',
            child: null
          },
          {
            id: 211121,
            pid: 211100,
            type: 3,
            name: '大洼县',
            zipCode: '124200',
            child: null
          },
          {
            id: 211122,
            pid: 211100,
            type: 3,
            name: '盘山县',
            zipCode: '124000',
            child: null
          }
        ]
      },
      {
        id: 211200,
        pid: 210000,
        type: 2,
        name: '铁岭市',
        zipCode: '112000',
        child: [
          {
            id: 211202,
            pid: 211200,
            type: 3,
            name: '银州区',
            zipCode: '112000',
            child: null
          },
          {
            id: 211204,
            pid: 211200,
            type: 3,
            name: '清河区',
            zipCode: '112003',
            child: null
          },
          {
            id: 211221,
            pid: 211200,
            type: 3,
            name: '铁岭县',
            zipCode: '112000',
            child: null
          },
          {
            id: 211223,
            pid: 211200,
            type: 3,
            name: '西丰县',
            zipCode: '112400',
            child: null
          },
          {
            id: 211224,
            pid: 211200,
            type: 3,
            name: '昌图县',
            zipCode: '112500',
            child: null
          },
          {
            id: 211281,
            pid: 211200,
            type: 3,
            name: '调兵山市',
            zipCode: '112700',
            child: null
          },
          {
            id: 211282,
            pid: 211200,
            type: 3,
            name: '开原市',
            zipCode: '112300',
            child: null
          }
        ]
      },
      {
        id: 211300,
        pid: 210000,
        type: 2,
        name: '朝阳市',
        zipCode: '122000',
        child: [
          {
            id: 211302,
            pid: 211300,
            type: 3,
            name: '双塔区',
            zipCode: '122000',
            child: null
          },
          {
            id: 211303,
            pid: 211300,
            type: 3,
            name: '龙城区',
            zipCode: '122000',
            child: null
          },
          {
            id: 211321,
            pid: 211300,
            type: 3,
            name: '朝阳县',
            zipCode: '122000',
            child: null
          },
          {
            id: 211322,
            pid: 211300,
            type: 3,
            name: '建平县',
            zipCode: '122400',
            child: null
          },
          {
            id: 211324,
            pid: 211300,
            type: 3,
            name: '喀喇沁左翼蒙古族自治县',
            zipCode: '122300',
            child: null
          },
          {
            id: 211381,
            pid: 211300,
            type: 3,
            name: '北票市',
            zipCode: '122100',
            child: null
          },
          {
            id: 211382,
            pid: 211300,
            type: 3,
            name: '凌源市',
            zipCode: '122500',
            child: null
          }
        ]
      },
      {
        id: 211400,
        pid: 210000,
        type: 2,
        name: '葫芦岛市',
        zipCode: '125000',
        child: [
          {
            id: 211402,
            pid: 211400,
            type: 3,
            name: '连山区',
            zipCode: '125001',
            child: null
          },
          {
            id: 211403,
            pid: 211400,
            type: 3,
            name: '龙港区',
            zipCode: '125003',
            child: null
          },
          {
            id: 211404,
            pid: 211400,
            type: 3,
            name: '南票区',
            zipCode: '125027',
            child: null
          },
          {
            id: 211421,
            pid: 211400,
            type: 3,
            name: '绥中县',
            zipCode: '125200',
            child: null
          },
          {
            id: 211422,
            pid: 211400,
            type: 3,
            name: '建昌县',
            zipCode: '125300',
            child: null
          },
          {
            id: 211481,
            pid: 211400,
            type: 3,
            name: '兴城市',
            zipCode: '125100',
            child: null
          }
        ]
      },
      {
        id: 211500,
        pid: 210000,
        type: 2,
        name: '金普新区',
        zipCode: '116100',
        child: [
          {
            id: 211501,
            pid: 211500,
            type: 3,
            name: '金州新区',
            zipCode: '116100',
            child: null
          },
          {
            id: 211502,
            pid: 211500,
            type: 3,
            name: '普湾新区',
            zipCode: '116200',
            child: null
          },
          {
            id: 211503,
            pid: 211500,
            type: 3,
            name: '保税区',
            zipCode: '116100',
            child: null
          }
        ]
      }
    ]
  },
  {
    id: 220000,
    pid: 100000,
    type: 1,
    name: '吉林省',
    base: 'jl', //省份简称
    zipCode: '',
    child: [
      {
        id: 220100,
        pid: 220000,
        type: 2,
        name: '长春市',
        zipCode: '130022',
        child: [
          {
            id: 220102,
            pid: 220100,
            type: 3,
            name: '南关区',
            zipCode: '130022',
            child: null
          },
          {
            id: 220103,
            pid: 220100,
            type: 3,
            name: '宽城区',
            zipCode: '130051',
            child: null
          },
          {
            id: 220104,
            pid: 220100,
            type: 3,
            name: '朝阳区',
            zipCode: '130012',
            child: null
          },
          {
            id: 220105,
            pid: 220100,
            type: 3,
            name: '二道区',
            zipCode: '130031',
            child: null
          },
          {
            id: 220106,
            pid: 220100,
            type: 3,
            name: '绿园区',
            zipCode: '130062',
            child: null
          },
          {
            id: 220112,
            pid: 220100,
            type: 3,
            name: '双阳区',
            zipCode: '130600',
            child: null
          },
          {
            id: 220113,
            pid: 220100,
            type: 3,
            name: '九台区',
            zipCode: '130500',
            child: null
          },
          {
            id: 220122,
            pid: 220100,
            type: 3,
            name: '农安县',
            zipCode: '130200',
            child: null
          },
          {
            id: 220182,
            pid: 220100,
            type: 3,
            name: '榆树市',
            zipCode: '130400',
            child: null
          },
          {
            id: 220183,
            pid: 220100,
            type: 3,
            name: '德惠市',
            zipCode: '130300',
            child: null
          }
        ]
      },
      {
        id: 220200,
        pid: 220000,
        type: 2,
        name: '吉林市',
        zipCode: '132011',
        child: [
          {
            id: 220202,
            pid: 220200,
            type: 3,
            name: '昌邑区',
            zipCode: '132002',
            child: null
          },
          {
            id: 220203,
            pid: 220200,
            type: 3,
            name: '龙潭区',
            zipCode: '132021',
            child: null
          },
          {
            id: 220204,
            pid: 220200,
            type: 3,
            name: '船营区',
            zipCode: '132011',
            child: null
          },
          {
            id: 220211,
            pid: 220200,
            type: 3,
            name: '丰满区',
            zipCode: '132013',
            child: null
          },
          {
            id: 220221,
            pid: 220200,
            type: 3,
            name: '永吉县',
            zipCode: '132200',
            child: null
          },
          {
            id: 220281,
            pid: 220200,
            type: 3,
            name: '蛟河市',
            zipCode: '132500',
            child: null
          },
          {
            id: 220282,
            pid: 220200,
            type: 3,
            name: '桦甸市',
            zipCode: '132400',
            child: null
          },
          {
            id: 220283,
            pid: 220200,
            type: 3,
            name: '舒兰市',
            zipCode: '132600',
            child: null
          },
          {
            id: 220284,
            pid: 220200,
            type: 3,
            name: '磐石市',
            zipCode: '132300',
            child: null
          }
        ]
      },
      {
        id: 220300,
        pid: 220000,
        type: 2,
        name: '四平市',
        zipCode: '136000',
        child: [
          {
            id: 220302,
            pid: 220300,
            type: 3,
            name: '铁西区',
            zipCode: '136000',
            child: null
          },
          {
            id: 220303,
            pid: 220300,
            type: 3,
            name: '铁东区',
            zipCode: '136001',
            child: null
          },
          {
            id: 220322,
            pid: 220300,
            type: 3,
            name: '梨树县',
            zipCode: '136500',
            child: null
          },
          {
            id: 220323,
            pid: 220300,
            type: 3,
            name: '伊通满族自治县',
            zipCode: '130700',
            child: null
          },
          {
            id: 220381,
            pid: 220300,
            type: 3,
            name: '公主岭市',
            zipCode: '136100',
            child: null
          },
          {
            id: 220382,
            pid: 220300,
            type: 3,
            name: '双辽市',
            zipCode: '136400',
            child: null
          }
        ]
      },
      {
        id: 220400,
        pid: 220000,
        type: 2,
        name: '辽源市',
        zipCode: '136200',
        child: [
          {
            id: 220402,
            pid: 220400,
            type: 3,
            name: '龙山区',
            zipCode: '136200',
            child: null
          },
          {
            id: 220403,
            pid: 220400,
            type: 3,
            name: '西安区',
            zipCode: '136201',
            child: null
          },
          {
            id: 220421,
            pid: 220400,
            type: 3,
            name: '东丰县',
            zipCode: '136300',
            child: null
          },
          {
            id: 220422,
            pid: 220400,
            type: 3,
            name: '东辽县',
            zipCode: '136600',
            child: null
          }
        ]
      },
      {
        id: 220500,
        pid: 220000,
        type: 2,
        name: '通化市',
        zipCode: '134001',
        child: [
          {
            id: 220502,
            pid: 220500,
            type: 3,
            name: '东昌区',
            zipCode: '134001',
            child: null
          },
          {
            id: 220503,
            pid: 220500,
            type: 3,
            name: '二道江区',
            zipCode: '134003',
            child: null
          },
          {
            id: 220521,
            pid: 220500,
            type: 3,
            name: '通化县',
            zipCode: '134100',
            child: null
          },
          {
            id: 220523,
            pid: 220500,
            type: 3,
            name: '辉南县',
            zipCode: '135100',
            child: null
          },
          {
            id: 220524,
            pid: 220500,
            type: 3,
            name: '柳河县',
            zipCode: '135300',
            child: null
          },
          {
            id: 220581,
            pid: 220500,
            type: 3,
            name: '梅河口市',
            zipCode: '135000',
            child: null
          },
          {
            id: 220582,
            pid: 220500,
            type: 3,
            name: '集安市',
            zipCode: '134200',
            child: null
          }
        ]
      },
      {
        id: 220600,
        pid: 220000,
        type: 2,
        name: '白山市',
        zipCode: '134300',
        child: [
          {
            id: 220602,
            pid: 220600,
            type: 3,
            name: '浑江区',
            zipCode: '134300',
            child: null
          },
          {
            id: 220605,
            pid: 220600,
            type: 3,
            name: '江源区',
            zipCode: '134700',
            child: null
          },
          {
            id: 220621,
            pid: 220600,
            type: 3,
            name: '抚松县',
            zipCode: '134500',
            child: null
          },
          {
            id: 220622,
            pid: 220600,
            type: 3,
            name: '靖宇县',
            zipCode: '135200',
            child: null
          },
          {
            id: 220623,
            pid: 220600,
            type: 3,
            name: '长白朝鲜族自治县',
            zipCode: '134400',
            child: null
          },
          {
            id: 220681,
            pid: 220600,
            type: 3,
            name: '临江市',
            zipCode: '134600',
            child: null
          }
        ]
      },
      {
        id: 220700,
        pid: 220000,
        type: 2,
        name: '松原市',
        zipCode: '138000',
        child: [
          {
            id: 220702,
            pid: 220700,
            type: 3,
            name: '宁江区',
            zipCode: '138000',
            child: null
          },
          {
            id: 220721,
            pid: 220700,
            type: 3,
            name: '前郭尔罗斯蒙古族自治县',
            zipCode: '138000',
            child: null
          },
          {
            id: 220722,
            pid: 220700,
            type: 3,
            name: '长岭县',
            zipCode: '131500',
            child: null
          },
          {
            id: 220723,
            pid: 220700,
            type: 3,
            name: '乾安县',
            zipCode: '131400',
            child: null
          },
          {
            id: 220781,
            pid: 220700,
            type: 3,
            name: '扶余市',
            zipCode: '131200',
            child: null
          }
        ]
      },
      {
        id: 220800,
        pid: 220000,
        type: 2,
        name: '白城市',
        zipCode: '137000',
        child: [
          {
            id: 220802,
            pid: 220800,
            type: 3,
            name: '洮北区',
            zipCode: '137000',
            child: null
          },
          {
            id: 220821,
            pid: 220800,
            type: 3,
            name: '镇赉县',
            zipCode: '137300',
            child: null
          },
          {
            id: 220822,
            pid: 220800,
            type: 3,
            name: '通榆县',
            zipCode: '137200',
            child: null
          },
          {
            id: 220881,
            pid: 220800,
            type: 3,
            name: '洮南市',
            zipCode: '137100',
            child: null
          },
          {
            id: 220882,
            pid: 220800,
            type: 3,
            name: '大安市',
            zipCode: '131300',
            child: null
          }
        ]
      },
      {
        id: 222400,
        pid: 220000,
        type: 2,
        name: '延边朝鲜族自治州',
        zipCode: '133000',
        child: [
          {
            id: 222401,
            pid: 222400,
            type: 3,
            name: '延吉市',
            zipCode: '133000',
            child: null
          },
          {
            id: 222402,
            pid: 222400,
            type: 3,
            name: '图们市',
            zipCode: '133100',
            child: null
          },
          {
            id: 222403,
            pid: 222400,
            type: 3,
            name: '敦化市',
            zipCode: '133700',
            child: null
          },
          {
            id: 222404,
            pid: 222400,
            type: 3,
            name: '珲春市',
            zipCode: '133300',
            child: null
          },
          {
            id: 222405,
            pid: 222400,
            type: 3,
            name: '龙井市',
            zipCode: '133400',
            child: null
          },
          {
            id: 222406,
            pid: 222400,
            type: 3,
            name: '和龙市',
            zipCode: '133500',
            child: null
          },
          {
            id: 222424,
            pid: 222400,
            type: 3,
            name: '汪清县',
            zipCode: '133200',
            child: null
          },
          {
            id: 222426,
            pid: 222400,
            type: 3,
            name: '安图县',
            zipCode: '133600',
            child: null
          }
        ]
      }
    ]
  },
  {
    id: 230000,
    pid: 100000,
    type: 1,
    name: '黑龙江省',
    base: 'hlj', //省份简称
    zipCode: '',
    child: [
      {
        id: 230100,
        pid: 230000,
        type: 2,
        name: '哈尔滨市',
        zipCode: '150010',
        child: [
          {
            id: 230102,
            pid: 230100,
            type: 3,
            name: '道里区',
            zipCode: '150010',
            child: null
          },
          {
            id: 230103,
            pid: 230100,
            type: 3,
            name: '南岗区',
            zipCode: '150006',
            child: null
          },
          {
            id: 230104,
            pid: 230100,
            type: 3,
            name: '道外区',
            zipCode: '150020',
            child: null
          },
          {
            id: 230108,
            pid: 230100,
            type: 3,
            name: '平房区',
            zipCode: '150060',
            child: null
          },
          {
            id: 230109,
            pid: 230100,
            type: 3,
            name: '松北区',
            zipCode: '150028',
            child: null
          },
          {
            id: 230110,
            pid: 230100,
            type: 3,
            name: '香坊区',
            zipCode: '150036',
            child: null
          },
          {
            id: 230111,
            pid: 230100,
            type: 3,
            name: '呼兰区',
            zipCode: '150500',
            child: null
          },
          {
            id: 230112,
            pid: 230100,
            type: 3,
            name: '阿城区',
            zipCode: '150300',
            child: null
          },
          {
            id: 230113,
            pid: 230100,
            type: 3,
            name: '双城区',
            zipCode: '150100',
            child: null
          },
          {
            id: 230123,
            pid: 230100,
            type: 3,
            name: '依兰县',
            zipCode: '154800',
            child: null
          },
          {
            id: 230124,
            pid: 230100,
            type: 3,
            name: '方正县',
            zipCode: '150800',
            child: null
          },
          {
            id: 230125,
            pid: 230100,
            type: 3,
            name: '宾县',
            zipCode: '150400',
            child: null
          },
          {
            id: 230126,
            pid: 230100,
            type: 3,
            name: '巴彦县',
            zipCode: '151800',
            child: null
          },
          {
            id: 230127,
            pid: 230100,
            type: 3,
            name: '木兰县',
            zipCode: '151900',
            child: null
          },
          {
            id: 230128,
            pid: 230100,
            type: 3,
            name: '通河县',
            zipCode: '150900',
            child: null
          },
          {
            id: 230129,
            pid: 230100,
            type: 3,
            name: '延寿县',
            zipCode: '150700',
            child: null
          },
          {
            id: 230183,
            pid: 230100,
            type: 3,
            name: '尚志市',
            zipCode: '150600',
            child: null
          },
          {
            id: 230184,
            pid: 230100,
            type: 3,
            name: '五常市',
            zipCode: '150200',
            child: null
          }
        ]
      },
      {
        id: 230200,
        pid: 230000,
        type: 2,
        name: '齐齐哈尔市',
        zipCode: '161005',
        child: [
          {
            id: 230202,
            pid: 230200,
            type: 3,
            name: '龙沙区',
            zipCode: '161000',
            child: null
          },
          {
            id: 230203,
            pid: 230200,
            type: 3,
            name: '建华区',
            zipCode: '161006',
            child: null
          },
          {
            id: 230204,
            pid: 230200,
            type: 3,
            name: '铁锋区',
            zipCode: '161000',
            child: null
          },
          {
            id: 230205,
            pid: 230200,
            type: 3,
            name: '昂昂溪区',
            zipCode: '161031',
            child: null
          },
          {
            id: 230206,
            pid: 230200,
            type: 3,
            name: '富拉尔基区',
            zipCode: '161041',
            child: null
          },
          {
            id: 230207,
            pid: 230200,
            type: 3,
            name: '碾子山区',
            zipCode: '161046',
            child: null
          },
          {
            id: 230208,
            pid: 230200,
            type: 3,
            name: '梅里斯达斡尔族区',
            zipCode: '161021',
            child: null
          },
          {
            id: 230221,
            pid: 230200,
            type: 3,
            name: '龙江县',
            zipCode: '161100',
            child: null
          },
          {
            id: 230223,
            pid: 230200,
            type: 3,
            name: '依安县',
            zipCode: '161500',
            child: null
          },
          {
            id: 230224,
            pid: 230200,
            type: 3,
            name: '泰来县',
            zipCode: '162400',
            child: null
          },
          {
            id: 230225,
            pid: 230200,
            type: 3,
            name: '甘南县',
            zipCode: '162100',
            child: null
          },
          {
            id: 230227,
            pid: 230200,
            type: 3,
            name: '富裕县',
            zipCode: '161200',
            child: null
          },
          {
            id: 230229,
            pid: 230200,
            type: 3,
            name: '克山县',
            zipCode: '161600',
            child: null
          },
          {
            id: 230230,
            pid: 230200,
            type: 3,
            name: '克东县',
            zipCode: '164800',
            child: null
          },
          {
            id: 230231,
            pid: 230200,
            type: 3,
            name: '拜泉县',
            zipCode: '164700',
            child: null
          },
          {
            id: 230281,
            pid: 230200,
            type: 3,
            name: '讷河市',
            zipCode: '161300',
            child: null
          }
        ]
      },
      {
        id: 230300,
        pid: 230000,
        type: 2,
        name: '鸡西市',
        zipCode: '158100',
        child: [
          {
            id: 230302,
            pid: 230300,
            type: 3,
            name: '鸡冠区',
            zipCode: '158100',
            child: null
          },
          {
            id: 230303,
            pid: 230300,
            type: 3,
            name: '恒山区',
            zipCode: '158130',
            child: null
          },
          {
            id: 230304,
            pid: 230300,
            type: 3,
            name: '滴道区',
            zipCode: '158150',
            child: null
          },
          {
            id: 230305,
            pid: 230300,
            type: 3,
            name: '梨树区',
            zipCode: '158160',
            child: null
          },
          {
            id: 230306,
            pid: 230300,
            type: 3,
            name: '城子河区',
            zipCode: '158170',
            child: null
          },
          {
            id: 230307,
            pid: 230300,
            type: 3,
            name: '麻山区',
            zipCode: '158180',
            child: null
          },
          {
            id: 230321,
            pid: 230300,
            type: 3,
            name: '鸡东县',
            zipCode: '158200',
            child: null
          },
          {
            id: 230381,
            pid: 230300,
            type: 3,
            name: '虎林市',
            zipCode: '158400',
            child: null
          },
          {
            id: 230382,
            pid: 230300,
            type: 3,
            name: '密山市',
            zipCode: '158300',
            child: null
          }
        ]
      },
      {
        id: 230400,
        pid: 230000,
        type: 2,
        name: '鹤岗市',
        zipCode: '154100',
        child: [
          {
            id: 230402,
            pid: 230400,
            type: 3,
            name: '向阳区',
            zipCode: '154100',
            child: null
          },
          {
            id: 230403,
            pid: 230400,
            type: 3,
            name: '工农区',
            zipCode: '154101',
            child: null
          },
          {
            id: 230404,
            pid: 230400,
            type: 3,
            name: '南山区',
            zipCode: '154104',
            child: null
          },
          {
            id: 230405,
            pid: 230400,
            type: 3,
            name: '兴安区',
            zipCode: '154102',
            child: null
          },
          {
            id: 230406,
            pid: 230400,
            type: 3,
            name: '东山区',
            zipCode: '154106',
            child: null
          },
          {
            id: 230407,
            pid: 230400,
            type: 3,
            name: '兴山区',
            zipCode: '154105',
            child: null
          },
          {
            id: 230421,
            pid: 230400,
            type: 3,
            name: '萝北县',
            zipCode: '154200',
            child: null
          },
          {
            id: 230422,
            pid: 230400,
            type: 3,
            name: '绥滨县',
            zipCode: '156200',
            child: null
          }
        ]
      },
      {
        id: 230500,
        pid: 230000,
        type: 2,
        name: '双鸭山市',
        zipCode: '155100',
        child: [
          {
            id: 230502,
            pid: 230500,
            type: 3,
            name: '尖山区',
            zipCode: '155100',
            child: null
          },
          {
            id: 230503,
            pid: 230500,
            type: 3,
            name: '岭东区',
            zipCode: '155120',
            child: null
          },
          {
            id: 230505,
            pid: 230500,
            type: 3,
            name: '四方台区',
            zipCode: '155130',
            child: null
          },
          {
            id: 230506,
            pid: 230500,
            type: 3,
            name: '宝山区',
            zipCode: '155131',
            child: null
          },
          {
            id: 230521,
            pid: 230500,
            type: 3,
            name: '集贤县',
            zipCode: '155900',
            child: null
          },
          {
            id: 230522,
            pid: 230500,
            type: 3,
            name: '友谊县',
            zipCode: '155800',
            child: null
          },
          {
            id: 230523,
            pid: 230500,
            type: 3,
            name: '宝清县',
            zipCode: '155600',
            child: null
          },
          {
            id: 230524,
            pid: 230500,
            type: 3,
            name: '饶河县',
            zipCode: '155700',
            child: null
          }
        ]
      },
      {
        id: 230600,
        pid: 230000,
        type: 2,
        name: '大庆市',
        zipCode: '163000',
        child: [
          {
            id: 230602,
            pid: 230600,
            type: 3,
            name: '萨尔图区',
            zipCode: '163001',
            child: null
          },
          {
            id: 230603,
            pid: 230600,
            type: 3,
            name: '龙凤区',
            zipCode: '163711',
            child: null
          },
          {
            id: 230604,
            pid: 230600,
            type: 3,
            name: '让胡路区',
            zipCode: '163712',
            child: null
          },
          {
            id: 230605,
            pid: 230600,
            type: 3,
            name: '红岗区',
            zipCode: '163511',
            child: null
          },
          {
            id: 230606,
            pid: 230600,
            type: 3,
            name: '大同区',
            zipCode: '163515',
            child: null
          },
          {
            id: 230621,
            pid: 230600,
            type: 3,
            name: '肇州县',
            zipCode: '166400',
            child: null
          },
          {
            id: 230622,
            pid: 230600,
            type: 3,
            name: '肇源县',
            zipCode: '166500',
            child: null
          },
          {
            id: 230623,
            pid: 230600,
            type: 3,
            name: '林甸县',
            zipCode: '166300',
            child: null
          },
          {
            id: 230624,
            pid: 230600,
            type: 3,
            name: '杜尔伯特蒙古族自治县',
            zipCode: '166200',
            child: null
          }
        ]
      },
      {
        id: 230700,
        pid: 230000,
        type: 2,
        name: '伊春市',
        zipCode: '153000',
        child: [
          {
            id: 230702,
            pid: 230700,
            type: 3,
            name: '伊春区',
            zipCode: '153000',
            child: null
          },
          {
            id: 230703,
            pid: 230700,
            type: 3,
            name: '南岔区',
            zipCode: '153100',
            child: null
          },
          {
            id: 230704,
            pid: 230700,
            type: 3,
            name: '友好区',
            zipCode: '153031',
            child: null
          },
          {
            id: 230705,
            pid: 230700,
            type: 3,
            name: '西林区',
            zipCode: '153025',
            child: null
          },
          {
            id: 230706,
            pid: 230700,
            type: 3,
            name: '翠峦区',
            zipCode: '153013',
            child: null
          },
          {
            id: 230707,
            pid: 230700,
            type: 3,
            name: '新青区',
            zipCode: '153036',
            child: null
          },
          {
            id: 230708,
            pid: 230700,
            type: 3,
            name: '美溪区',
            zipCode: '153021',
            child: null
          },
          {
            id: 230709,
            pid: 230700,
            type: 3,
            name: '金山屯区',
            zipCode: '153026',
            child: null
          },
          {
            id: 230710,
            pid: 230700,
            type: 3,
            name: '五营区',
            zipCode: '153033',
            child: null
          },
          {
            id: 230711,
            pid: 230700,
            type: 3,
            name: '乌马河区',
            zipCode: '153011',
            child: null
          },
          {
            id: 230712,
            pid: 230700,
            type: 3,
            name: '汤旺河区',
            zipCode: '153037',
            child: null
          },
          {
            id: 230713,
            pid: 230700,
            type: 3,
            name: '带岭区',
            zipCode: '153106',
            child: null
          },
          {
            id: 230714,
            pid: 230700,
            type: 3,
            name: '乌伊岭区',
            zipCode: '153038',
            child: null
          },
          {
            id: 230715,
            pid: 230700,
            type: 3,
            name: '红星区',
            zipCode: '153035',
            child: null
          },
          {
            id: 230716,
            pid: 230700,
            type: 3,
            name: '上甘岭区',
            zipCode: '153032',
            child: null
          },
          {
            id: 230722,
            pid: 230700,
            type: 3,
            name: '嘉荫县',
            zipCode: '153200',
            child: null
          },
          {
            id: 230781,
            pid: 230700,
            type: 3,
            name: '铁力市',
            zipCode: '152500',
            child: null
          }
        ]
      },
      {
        id: 230800,
        pid: 230000,
        type: 2,
        name: '佳木斯市',
        zipCode: '154002',
        child: [
          {
            id: 230803,
            pid: 230800,
            type: 3,
            name: '向阳区',
            zipCode: '154002',
            child: null
          },
          {
            id: 230804,
            pid: 230800,
            type: 3,
            name: '前进区',
            zipCode: '154002',
            child: null
          },
          {
            id: 230805,
            pid: 230800,
            type: 3,
            name: '东风区',
            zipCode: '154005',
            child: null
          },
          {
            id: 230811,
            pid: 230800,
            type: 3,
            name: '郊区',
            zipCode: '154004',
            child: null
          },
          {
            id: 230822,
            pid: 230800,
            type: 3,
            name: '桦南县',
            zipCode: '154400',
            child: null
          },
          {
            id: 230826,
            pid: 230800,
            type: 3,
            name: '桦川县',
            zipCode: '154300',
            child: null
          },
          {
            id: 230828,
            pid: 230800,
            type: 3,
            name: '汤原县',
            zipCode: '154700',
            child: null
          },
          {
            id: 230833,
            pid: 230800,
            type: 3,
            name: '抚远县',
            zipCode: '156500',
            child: null
          },
          {
            id: 230881,
            pid: 230800,
            type: 3,
            name: '同江市',
            zipCode: '156400',
            child: null
          },
          {
            id: 230882,
            pid: 230800,
            type: 3,
            name: '富锦市',
            zipCode: '156100',
            child: null
          }
        ]
      },
      {
        id: 230900,
        pid: 230000,
        type: 2,
        name: '七台河市',
        zipCode: '154600',
        child: [
          {
            id: 230902,
            pid: 230900,
            type: 3,
            name: '新兴区',
            zipCode: '154604',
            child: null
          },
          {
            id: 230903,
            pid: 230900,
            type: 3,
            name: '桃山区',
            zipCode: '154600',
            child: null
          },
          {
            id: 230904,
            pid: 230900,
            type: 3,
            name: '茄子河区',
            zipCode: '154622',
            child: null
          },
          {
            id: 230921,
            pid: 230900,
            type: 3,
            name: '勃利县',
            zipCode: '154500',
            child: null
          }
        ]
      },
      {
        id: 231000,
        pid: 230000,
        type: 2,
        name: '牡丹江市',
        zipCode: '157000',
        child: [
          {
            id: 231002,
            pid: 231000,
            type: 3,
            name: '东安区',
            zipCode: '157000',
            child: null
          },
          {
            id: 231003,
            pid: 231000,
            type: 3,
            name: '阳明区',
            zipCode: '157013',
            child: null
          },
          {
            id: 231004,
            pid: 231000,
            type: 3,
            name: '爱民区',
            zipCode: '157009',
            child: null
          },
          {
            id: 231005,
            pid: 231000,
            type: 3,
            name: '西安区',
            zipCode: '157000',
            child: null
          },
          {
            id: 231024,
            pid: 231000,
            type: 3,
            name: '东宁县',
            zipCode: '157200',
            child: null
          },
          {
            id: 231025,
            pid: 231000,
            type: 3,
            name: '林口县',
            zipCode: '157600',
            child: null
          },
          {
            id: 231081,
            pid: 231000,
            type: 3,
            name: '绥芬河市',
            zipCode: '157300',
            child: null
          },
          {
            id: 231083,
            pid: 231000,
            type: 3,
            name: '海林市',
            zipCode: '157100',
            child: null
          },
          {
            id: 231084,
            pid: 231000,
            type: 3,
            name: '宁安市',
            zipCode: '157400',
            child: null
          },
          {
            id: 231085,
            pid: 231000,
            type: 3,
            name: '穆棱市',
            zipCode: '157500',
            child: null
          }
        ]
      },
      {
        id: 231100,
        pid: 230000,
        type: 2,
        name: '黑河市',
        zipCode: '164300',
        child: [
          {
            id: 231102,
            pid: 231100,
            type: 3,
            name: '爱辉区',
            zipCode: '164300',
            child: null
          },
          {
            id: 231121,
            pid: 231100,
            type: 3,
            name: '嫩江县',
            zipCode: '161400',
            child: null
          },
          {
            id: 231123,
            pid: 231100,
            type: 3,
            name: '逊克县',
            zipCode: '164400',
            child: null
          },
          {
            id: 231124,
            pid: 231100,
            type: 3,
            name: '孙吴县',
            zipCode: '164200',
            child: null
          },
          {
            id: 231181,
            pid: 231100,
            type: 3,
            name: '北安市',
            zipCode: '164000',
            child: null
          },
          {
            id: 231182,
            pid: 231100,
            type: 3,
            name: '五大连池市',
            zipCode: '164100',
            child: null
          }
        ]
      },
      {
        id: 231200,
        pid: 230000,
        type: 2,
        name: '绥化市',
        zipCode: '152000',
        child: [
          {
            id: 231202,
            pid: 231200,
            type: 3,
            name: '北林区',
            zipCode: '152000',
            child: null
          },
          {
            id: 231221,
            pid: 231200,
            type: 3,
            name: '望奎县',
            zipCode: '152100',
            child: null
          },
          {
            id: 231222,
            pid: 231200,
            type: 3,
            name: '兰西县',
            zipCode: '151500',
            child: null
          },
          {
            id: 231223,
            pid: 231200,
            type: 3,
            name: '青冈县',
            zipCode: '151600',
            child: null
          },
          {
            id: 231224,
            pid: 231200,
            type: 3,
            name: '庆安县',
            zipCode: '152400',
            child: null
          },
          {
            id: 231225,
            pid: 231200,
            type: 3,
            name: '明水县',
            zipCode: '151700',
            child: null
          },
          {
            id: 231226,
            pid: 231200,
            type: 3,
            name: '绥棱县',
            zipCode: '152200',
            child: null
          },
          {
            id: 231281,
            pid: 231200,
            type: 3,
            name: '安达市',
            zipCode: '151400',
            child: null
          },
          {
            id: 231282,
            pid: 231200,
            type: 3,
            name: '肇东市',
            zipCode: '151100',
            child: null
          },
          {
            id: 231283,
            pid: 231200,
            type: 3,
            name: '海伦市',
            zipCode: '152300',
            child: null
          }
        ]
      },
      {
        id: 232700,
        pid: 230000,
        type: 2,
        name: '大兴安岭地区',
        zipCode: '165000',
        child: [
          {
            id: 232701,
            pid: 232700,
            type: 3,
            name: '加格达奇区',
            zipCode: '165000',
            child: null
          },
          {
            id: 232702,
            pid: 232700,
            type: 3,
            name: '新林区',
            zipCode: '165000',
            child: null
          },
          {
            id: 232703,
            pid: 232700,
            type: 3,
            name: '松岭区',
            zipCode: '165000',
            child: null
          },
          {
            id: 232704,
            pid: 232700,
            type: 3,
            name: '呼中区',
            zipCode: '165000',
            child: null
          },
          {
            id: 232721,
            pid: 232700,
            type: 3,
            name: '呼玛县',
            zipCode: '165100',
            child: null
          },
          {
            id: 232722,
            pid: 232700,
            type: 3,
            name: '塔河县',
            zipCode: '165200',
            child: null
          },
          {
            id: 232723,
            pid: 232700,
            type: 3,
            name: '漠河县',
            zipCode: '165300',
            child: null
          }
        ]
      }
    ]
  },
  {
    id: 310000,
    pid: 100000,
    type: 1,
    name: '上海市',
    base: 'sh', //省份简称
    zipCode: '',
    child: [
      {
        id: 310100,
        pid: 310000,
        type: 2,
        name: '上海市',
        zipCode: '200000',
        child: [
          {
            id: 310101,
            pid: 310100,
            type: 3,
            name: '黄浦区',
            zipCode: '200001',
            child: null
          },
          {
            id: 310104,
            pid: 310100,
            type: 3,
            name: '徐汇区',
            zipCode: '200030',
            child: null
          },
          {
            id: 310105,
            pid: 310100,
            type: 3,
            name: '长宁区',
            zipCode: '200050',
            child: null
          },
          {
            id: 310106,
            pid: 310100,
            type: 3,
            name: '静安区',
            zipCode: '200040',
            child: null
          },
          {
            id: 310107,
            pid: 310100,
            type: 3,
            name: '普陀区',
            zipCode: '200333',
            child: null
          },
          {
            id: 310108,
            pid: 310100,
            type: 3,
            name: '闸北区',
            zipCode: '200070',
            child: null
          },
          {
            id: 310109,
            pid: 310100,
            type: 3,
            name: '虹口区',
            zipCode: '200086',
            child: null
          },
          {
            id: 310110,
            pid: 310100,
            type: 3,
            name: '杨浦区',
            zipCode: '200082',
            child: null
          },
          {
            id: 310112,
            pid: 310100,
            type: 3,
            name: '闵行区',
            zipCode: '201100',
            child: null
          },
          {
            id: 310113,
            pid: 310100,
            type: 3,
            name: '宝山区',
            zipCode: '201900',
            child: null
          },
          {
            id: 310114,
            pid: 310100,
            type: 3,
            name: '嘉定区',
            zipCode: '201800',
            child: null
          },
          {
            id: 310115,
            pid: 310100,
            type: 3,
            name: '浦东新区',
            zipCode: '200135',
            child: null
          },
          {
            id: 310116,
            pid: 310100,
            type: 3,
            name: '金山区',
            zipCode: '200540',
            child: null
          },
          {
            id: 310117,
            pid: 310100,
            type: 3,
            name: '松江区',
            zipCode: '201600',
            child: null
          },
          {
            id: 310118,
            pid: 310100,
            type: 3,
            name: '青浦区',
            zipCode: '201700',
            child: null
          },
          {
            id: 310120,
            pid: 310100,
            type: 3,
            name: '奉贤区',
            zipCode: '201400',
            child: null
          },
          {
            id: 310230,
            pid: 310100,
            type: 3,
            name: '崇明县',
            zipCode: '202150',
            child: null
          }
        ]
      }
    ]
  },
  {
    id: 320000,
    pid: 100000,
    type: 1,
    name: '江苏省',
    base: 'js', //省份简称
    zipCode: '',
    child: [
      {
        id: 320100,
        pid: 320000,
        type: 2,
        name: '南京市',
        zipCode: '210008',
        child: [
          {
            id: 320102,
            pid: 320100,
            type: 3,
            name: '玄武区',
            zipCode: '210018',
            child: null
          },
          {
            id: 320104,
            pid: 320100,
            type: 3,
            name: '秦淮区',
            zipCode: '210001',
            child: null
          },
          {
            id: 320105,
            pid: 320100,
            type: 3,
            name: '建邺区',
            zipCode: '210004',
            child: null
          },
          {
            id: 320106,
            pid: 320100,
            type: 3,
            name: '鼓楼区',
            zipCode: '210009',
            child: null
          },
          {
            id: 320111,
            pid: 320100,
            type: 3,
            name: '浦口区',
            zipCode: '211800',
            child: null
          },
          {
            id: 320113,
            pid: 320100,
            type: 3,
            name: '栖霞区',
            zipCode: '210046',
            child: null
          },
          {
            id: 320114,
            pid: 320100,
            type: 3,
            name: '雨花台区',
            zipCode: '210012',
            child: null
          },
          {
            id: 320115,
            pid: 320100,
            type: 3,
            name: '江宁区',
            zipCode: '211100',
            child: null
          },
          {
            id: 320116,
            pid: 320100,
            type: 3,
            name: '六合区',
            zipCode: '211500',
            child: null
          },
          {
            id: 320117,
            pid: 320100,
            type: 3,
            name: '溧水区',
            zipCode: '211200',
            child: null
          },
          {
            id: 320118,
            pid: 320100,
            type: 3,
            name: '高淳区',
            zipCode: '211300',
            child: null
          }
        ]
      },
      {
        id: 320200,
        pid: 320000,
        type: 2,
        name: '无锡市',
        zipCode: '214000',
        child: [
          {
            id: 320202,
            pid: 320200,
            type: 3,
            name: '崇安区',
            zipCode: '214001',
            child: null
          },
          {
            id: 320203,
            pid: 320200,
            type: 3,
            name: '南长区',
            zipCode: '214021',
            child: null
          },
          {
            id: 320204,
            pid: 320200,
            type: 3,
            name: '北塘区',
            zipCode: '214044',
            child: null
          },
          {
            id: 320205,
            pid: 320200,
            type: 3,
            name: '锡山区',
            zipCode: '214101',
            child: null
          },
          {
            id: 320206,
            pid: 320200,
            type: 3,
            name: '惠山区',
            zipCode: '214174',
            child: null
          },
          {
            id: 320211,
            pid: 320200,
            type: 3,
            name: '滨湖区',
            zipCode: '214123',
            child: null
          },
          {
            id: 320281,
            pid: 320200,
            type: 3,
            name: '江阴市',
            zipCode: '214431',
            child: null
          },
          {
            id: 320282,
            pid: 320200,
            type: 3,
            name: '宜兴市',
            zipCode: '214200',
            child: null
          }
        ]
      },
      {
        id: 320300,
        pid: 320000,
        type: 2,
        name: '徐州市',
        zipCode: '221003',
        child: [
          {
            id: 320302,
            pid: 320300,
            type: 3,
            name: '鼓楼区',
            zipCode: '221005',
            child: null
          },
          {
            id: 320303,
            pid: 320300,
            type: 3,
            name: '云龙区',
            zipCode: '221007',
            child: null
          },
          {
            id: 320305,
            pid: 320300,
            type: 3,
            name: '贾汪区',
            zipCode: '221003',
            child: null
          },
          {
            id: 320311,
            pid: 320300,
            type: 3,
            name: '泉山区',
            zipCode: '221006',
            child: null
          },
          {
            id: 320312,
            pid: 320300,
            type: 3,
            name: '铜山区',
            zipCode: '221106',
            child: null
          },
          {
            id: 320321,
            pid: 320300,
            type: 3,
            name: '丰县',
            zipCode: '221700',
            child: null
          },
          {
            id: 320322,
            pid: 320300,
            type: 3,
            name: '沛县',
            zipCode: '221600',
            child: null
          },
          {
            id: 320324,
            pid: 320300,
            type: 3,
            name: '睢宁县',
            zipCode: '221200',
            child: null
          },
          {
            id: 320381,
            pid: 320300,
            type: 3,
            name: '新沂市',
            zipCode: '221400',
            child: null
          },
          {
            id: 320382,
            pid: 320300,
            type: 3,
            name: '邳州市',
            zipCode: '221300',
            child: null
          }
        ]
      },
      {
        id: 320400,
        pid: 320000,
        type: 2,
        name: '常州市',
        zipCode: '213000',
        child: [
          {
            id: 320402,
            pid: 320400,
            type: 3,
            name: '天宁区',
            zipCode: '213000',
            child: null
          },
          {
            id: 320404,
            pid: 320400,
            type: 3,
            name: '钟楼区',
            zipCode: '213023',
            child: null
          },
          {
            id: 320405,
            pid: 320400,
            type: 3,
            name: '戚墅堰区',
            zipCode: '213025',
            child: null
          },
          {
            id: 320411,
            pid: 320400,
            type: 3,
            name: '新北区',
            zipCode: '213022',
            child: null
          },
          {
            id: 320412,
            pid: 320400,
            type: 3,
            name: '武进区',
            zipCode: '213100',
            child: null
          },
          {
            id: 320481,
            pid: 320400,
            type: 3,
            name: '溧阳市',
            zipCode: '213300',
            child: null
          },
          {
            id: 320482,
            pid: 320400,
            type: 3,
            name: '金坛市',
            zipCode: '213200',
            child: null
          }
        ]
      },
      {
        id: 320500,
        pid: 320000,
        type: 2,
        name: '苏州市',
        zipCode: '215002',
        child: [
          {
            id: 320505,
            pid: 320500,
            type: 3,
            name: '虎丘区',
            zipCode: '215004',
            child: null
          },
          {
            id: 320506,
            pid: 320500,
            type: 3,
            name: '吴中区',
            zipCode: '215128',
            child: null
          },
          {
            id: 320507,
            pid: 320500,
            type: 3,
            name: '相城区',
            zipCode: '215131',
            child: null
          },
          {
            id: 320508,
            pid: 320500,
            type: 3,
            name: '姑苏区',
            zipCode: '215031',
            child: null
          },
          {
            id: 320509,
            pid: 320500,
            type: 3,
            name: '吴江区',
            zipCode: '215200',
            child: null
          },
          {
            id: 320581,
            pid: 320500,
            type: 3,
            name: '常熟市',
            zipCode: '215500',
            child: null
          },
          {
            id: 320582,
            pid: 320500,
            type: 3,
            name: '张家港市',
            zipCode: '215600',
            child: null
          },
          {
            id: 320583,
            pid: 320500,
            type: 3,
            name: '昆山市',
            zipCode: '215300',
            child: null
          },
          {
            id: 320585,
            pid: 320500,
            type: 3,
            name: '太仓市',
            zipCode: '215400',
            child: null
          }
        ]
      },
      {
        id: 320600,
        pid: 320000,
        type: 2,
        name: '南通市',
        zipCode: '226001',
        child: [
          {
            id: 320602,
            pid: 320600,
            type: 3,
            name: '崇川区',
            zipCode: '226001',
            child: null
          },
          {
            id: 320611,
            pid: 320600,
            type: 3,
            name: '港闸区',
            zipCode: '226001',
            child: null
          },
          {
            id: 320612,
            pid: 320600,
            type: 3,
            name: '通州区',
            zipCode: '226300',
            child: null
          },
          {
            id: 320621,
            pid: 320600,
            type: 3,
            name: '海安县',
            zipCode: '226600',
            child: null
          },
          {
            id: 320623,
            pid: 320600,
            type: 3,
            name: '如东县',
            zipCode: '226400',
            child: null
          },
          {
            id: 320681,
            pid: 320600,
            type: 3,
            name: '启东市',
            zipCode: '226200',
            child: null
          },
          {
            id: 320682,
            pid: 320600,
            type: 3,
            name: '如皋市',
            zipCode: '226500',
            child: null
          },
          {
            id: 320684,
            pid: 320600,
            type: 3,
            name: '海门市',
            zipCode: '226100',
            child: null
          }
        ]
      },
      {
        id: 320700,
        pid: 320000,
        type: 2,
        name: '连云港市',
        zipCode: '222002',
        child: [
          {
            id: 320703,
            pid: 320700,
            type: 3,
            name: '连云区',
            zipCode: '222042',
            child: null
          },
          {
            id: 320706,
            pid: 320700,
            type: 3,
            name: '海州区',
            zipCode: '222003',
            child: null
          },
          {
            id: 320707,
            pid: 320700,
            type: 3,
            name: '赣榆区',
            zipCode: '222100',
            child: null
          },
          {
            id: 320722,
            pid: 320700,
            type: 3,
            name: '东海县',
            zipCode: '222300',
            child: null
          },
          {
            id: 320723,
            pid: 320700,
            type: 3,
            name: '灌云县',
            zipCode: '222200',
            child: null
          },
          {
            id: 320724,
            pid: 320700,
            type: 3,
            name: '灌南县',
            zipCode: '222500',
            child: null
          }
        ]
      },
      {
        id: 320800,
        pid: 320000,
        type: 2,
        name: '淮安市',
        zipCode: '223001',
        child: [
          {
            id: 320802,
            pid: 320800,
            type: 3,
            name: '清河区',
            zipCode: '223001',
            child: null
          },
          {
            id: 320803,
            pid: 320800,
            type: 3,
            name: '淮安区',
            zipCode: '223200',
            child: null
          },
          {
            id: 320804,
            pid: 320800,
            type: 3,
            name: '淮阴区',
            zipCode: '223300',
            child: null
          },
          {
            id: 320811,
            pid: 320800,
            type: 3,
            name: '清浦区',
            zipCode: '223002',
            child: null
          },
          {
            id: 320826,
            pid: 320800,
            type: 3,
            name: '涟水县',
            zipCode: '223400',
            child: null
          },
          {
            id: 320829,
            pid: 320800,
            type: 3,
            name: '洪泽县',
            zipCode: '223100',
            child: null
          },
          {
            id: 320830,
            pid: 320800,
            type: 3,
            name: '盱眙县',
            zipCode: '211700',
            child: null
          },
          {
            id: 320831,
            pid: 320800,
            type: 3,
            name: '金湖县',
            zipCode: '211600',
            child: null
          }
        ]
      },
      {
        id: 320900,
        pid: 320000,
        type: 2,
        name: '盐城市',
        zipCode: '224005',
        child: [
          {
            id: 320902,
            pid: 320900,
            type: 3,
            name: '亭湖区',
            zipCode: '224005',
            child: null
          },
          {
            id: 320903,
            pid: 320900,
            type: 3,
            name: '盐都区',
            zipCode: '224055',
            child: null
          },
          {
            id: 320921,
            pid: 320900,
            type: 3,
            name: '响水县',
            zipCode: '224600',
            child: null
          },
          {
            id: 320922,
            pid: 320900,
            type: 3,
            name: '滨海县',
            zipCode: '224500',
            child: null
          },
          {
            id: 320923,
            pid: 320900,
            type: 3,
            name: '阜宁县',
            zipCode: '224400',
            child: null
          },
          {
            id: 320924,
            pid: 320900,
            type: 3,
            name: '射阳县',
            zipCode: '224300',
            child: null
          },
          {
            id: 320925,
            pid: 320900,
            type: 3,
            name: '建湖县',
            zipCode: '224700',
            child: null
          },
          {
            id: 320981,
            pid: 320900,
            type: 3,
            name: '东台市',
            zipCode: '224200',
            child: null
          },
          {
            id: 320982,
            pid: 320900,
            type: 3,
            name: '大丰市',
            zipCode: '224100',
            child: null
          }
        ]
      },
      {
        id: 321000,
        pid: 320000,
        type: 2,
        name: '扬州市',
        zipCode: '225002',
        child: [
          {
            id: 321002,
            pid: 321000,
            type: 3,
            name: '广陵区',
            zipCode: '225002',
            child: null
          },
          {
            id: 321003,
            pid: 321000,
            type: 3,
            name: '邗江区',
            zipCode: '225002',
            child: null
          },
          {
            id: 321012,
            pid: 321000,
            type: 3,
            name: '江都区',
            zipCode: '225200',
            child: null
          },
          {
            id: 321023,
            pid: 321000,
            type: 3,
            name: '宝应县',
            zipCode: '225800',
            child: null
          },
          {
            id: 321081,
            pid: 321000,
            type: 3,
            name: '仪征市',
            zipCode: '211400',
            child: null
          },
          {
            id: 321084,
            pid: 321000,
            type: 3,
            name: '高邮市',
            zipCode: '225600',
            child: null
          }
        ]
      },
      {
        id: 321100,
        pid: 320000,
        type: 2,
        name: '镇江市',
        zipCode: '212004',
        child: [
          {
            id: 321102,
            pid: 321100,
            type: 3,
            name: '京口区',
            zipCode: '212003',
            child: null
          },
          {
            id: 321111,
            pid: 321100,
            type: 3,
            name: '润州区',
            zipCode: '212005',
            child: null
          },
          {
            id: 321112,
            pid: 321100,
            type: 3,
            name: '丹徒区',
            zipCode: '212028',
            child: null
          },
          {
            id: 321181,
            pid: 321100,
            type: 3,
            name: '丹阳市',
            zipCode: '212300',
            child: null
          },
          {
            id: 321182,
            pid: 321100,
            type: 3,
            name: '扬中市',
            zipCode: '212200',
            child: null
          },
          {
            id: 321183,
            pid: 321100,
            type: 3,
            name: '句容市',
            zipCode: '212400',
            child: null
          }
        ]
      },
      {
        id: 321200,
        pid: 320000,
        type: 2,
        name: '泰州市',
        zipCode: '225300',
        child: [
          {
            id: 321202,
            pid: 321200,
            type: 3,
            name: '海陵区',
            zipCode: '225300',
            child: null
          },
          {
            id: 321203,
            pid: 321200,
            type: 3,
            name: '高港区',
            zipCode: '225321',
            child: null
          },
          {
            id: 321204,
            pid: 321200,
            type: 3,
            name: '姜堰区',
            zipCode: '225500',
            child: null
          },
          {
            id: 321281,
            pid: 321200,
            type: 3,
            name: '兴化市',
            zipCode: '225700',
            child: null
          },
          {
            id: 321282,
            pid: 321200,
            type: 3,
            name: '靖江市',
            zipCode: '214500',
            child: null
          },
          {
            id: 321283,
            pid: 321200,
            type: 3,
            name: '泰兴市',
            zipCode: '225400',
            child: null
          }
        ]
      },
      {
        id: 321300,
        pid: 320000,
        type: 2,
        name: '宿迁市',
        zipCode: '223800',
        child: [
          {
            id: 321302,
            pid: 321300,
            type: 3,
            name: '宿城区',
            zipCode: '223800',
            child: null
          },
          {
            id: 321311,
            pid: 321300,
            type: 3,
            name: '宿豫区',
            zipCode: '223800',
            child: null
          },
          {
            id: 321322,
            pid: 321300,
            type: 3,
            name: '沭阳县',
            zipCode: '223600',
            child: null
          },
          {
            id: 321323,
            pid: 321300,
            type: 3,
            name: '泗阳县',
            zipCode: '223700',
            child: null
          },
          {
            id: 321324,
            pid: 321300,
            type: 3,
            name: '泗洪县',
            zipCode: '223900',
            child: null
          }
        ]
      }
    ]
  },
  {
    id: 330000,
    pid: 100000,
    type: 1,
    name: '浙江省',
    base: 'zj', //省份简称
    zipCode: '',
    child: [
      {
        id: 330100,
        pid: 330000,
        type: 2,
        name: '杭州市',
        zipCode: '310026',
        child: [
          {
            id: 330102,
            pid: 330100,
            type: 3,
            name: '上城区',
            zipCode: '310002',
            child: null
          },
          {
            id: 330103,
            pid: 330100,
            type: 3,
            name: '下城区',
            zipCode: '310006',
            child: null
          },
          {
            id: 330104,
            pid: 330100,
            type: 3,
            name: '江干区',
            zipCode: '310016',
            child: null
          },
          {
            id: 330105,
            pid: 330100,
            type: 3,
            name: '拱墅区',
            zipCode: '310011',
            child: null
          },
          {
            id: 330106,
            pid: 330100,
            type: 3,
            name: '西湖区',
            zipCode: '310013',
            child: null
          },
          {
            id: 330108,
            pid: 330100,
            type: 3,
            name: '滨江区',
            zipCode: '310051',
            child: null
          },
          {
            id: 330109,
            pid: 330100,
            type: 3,
            name: '萧山区',
            zipCode: '311200',
            child: null
          },
          {
            id: 330110,
            pid: 330100,
            type: 3,
            name: '余杭区',
            zipCode: '311100',
            child: null
          },
          {
            id: 330122,
            pid: 330100,
            type: 3,
            name: '桐庐县',
            zipCode: '311500',
            child: null
          },
          {
            id: 330127,
            pid: 330100,
            type: 3,
            name: '淳安县',
            zipCode: '311700',
            child: null
          },
          {
            id: 330182,
            pid: 330100,
            type: 3,
            name: '建德市',
            zipCode: '311600',
            child: null
          },
          {
            id: 330183,
            pid: 330100,
            type: 3,
            name: '富阳区',
            zipCode: '311400',
            child: null
          },
          {
            id: 330185,
            pid: 330100,
            type: 3,
            name: '临安市',
            zipCode: '311300',
            child: null
          }
        ]
      },
      {
        id: 330200,
        pid: 330000,
        type: 2,
        name: '宁波市',
        zipCode: '315000',
        child: [
          {
            id: 330203,
            pid: 330200,
            type: 3,
            name: '海曙区',
            zipCode: '315000',
            child: null
          },
          {
            id: 330204,
            pid: 330200,
            type: 3,
            name: '江东区',
            zipCode: '315040',
            child: null
          },
          {
            id: 330205,
            pid: 330200,
            type: 3,
            name: '江北区',
            zipCode: '315020',
            child: null
          },
          {
            id: 330206,
            pid: 330200,
            type: 3,
            name: '北仑区',
            zipCode: '315800',
            child: null
          },
          {
            id: 330211,
            pid: 330200,
            type: 3,
            name: '镇海区',
            zipCode: '315200',
            child: null
          },
          {
            id: 330212,
            pid: 330200,
            type: 3,
            name: '鄞州区',
            zipCode: '315100',
            child: null
          },
          {
            id: 330225,
            pid: 330200,
            type: 3,
            name: '象山县',
            zipCode: '315700',
            child: null
          },
          {
            id: 330226,
            pid: 330200,
            type: 3,
            name: '宁海县',
            zipCode: '315600',
            child: null
          },
          {
            id: 330281,
            pid: 330200,
            type: 3,
            name: '余姚市',
            zipCode: '315400',
            child: null
          },
          {
            id: 330282,
            pid: 330200,
            type: 3,
            name: '慈溪市',
            zipCode: '315300',
            child: null
          },
          {
            id: 330283,
            pid: 330200,
            type: 3,
            name: '奉化市',
            zipCode: '315500',
            child: null
          }
        ]
      },
      {
        id: 330300,
        pid: 330000,
        type: 2,
        name: '温州市',
        zipCode: '325000',
        child: [
          {
            id: 330302,
            pid: 330300,
            type: 3,
            name: '鹿城区',
            zipCode: '325000',
            child: null
          },
          {
            id: 330303,
            pid: 330300,
            type: 3,
            name: '龙湾区',
            zipCode: '325013',
            child: null
          },
          {
            id: 330304,
            pid: 330300,
            type: 3,
            name: '瓯海区',
            zipCode: '325005',
            child: null
          },
          {
            id: 330322,
            pid: 330300,
            type: 3,
            name: '洞头县',
            zipCode: '325700',
            child: null
          },
          {
            id: 330324,
            pid: 330300,
            type: 3,
            name: '永嘉县',
            zipCode: '325100',
            child: null
          },
          {
            id: 330326,
            pid: 330300,
            type: 3,
            name: '平阳县',
            zipCode: '325400',
            child: null
          },
          {
            id: 330327,
            pid: 330300,
            type: 3,
            name: '苍南县',
            zipCode: '325800',
            child: null
          },
          {
            id: 330328,
            pid: 330300,
            type: 3,
            name: '文成县',
            zipCode: '325300',
            child: null
          },
          {
            id: 330329,
            pid: 330300,
            type: 3,
            name: '泰顺县',
            zipCode: '325500',
            child: null
          },
          {
            id: 330381,
            pid: 330300,
            type: 3,
            name: '瑞安市',
            zipCode: '325200',
            child: null
          },
          {
            id: 330382,
            pid: 330300,
            type: 3,
            name: '乐清市',
            zipCode: '325600',
            child: null
          }
        ]
      },
      {
        id: 330400,
        pid: 330000,
        type: 2,
        name: '嘉兴市',
        zipCode: '314000',
        child: [
          {
            id: 330402,
            pid: 330400,
            type: 3,
            name: '南湖区',
            zipCode: '314051',
            child: null
          },
          {
            id: 330411,
            pid: 330400,
            type: 3,
            name: '秀洲区',
            zipCode: '314031',
            child: null
          },
          {
            id: 330421,
            pid: 330400,
            type: 3,
            name: '嘉善县',
            zipCode: '314100',
            child: null
          },
          {
            id: 330424,
            pid: 330400,
            type: 3,
            name: '海盐县',
            zipCode: '314300',
            child: null
          },
          {
            id: 330481,
            pid: 330400,
            type: 3,
            name: '海宁市',
            zipCode: '314400',
            child: null
          },
          {
            id: 330482,
            pid: 330400,
            type: 3,
            name: '平湖市',
            zipCode: '314200',
            child: null
          },
          {
            id: 330483,
            pid: 330400,
            type: 3,
            name: '桐乡市',
            zipCode: '314500',
            child: null
          }
        ]
      },
      {
        id: 330500,
        pid: 330000,
        type: 2,
        name: '湖州市',
        zipCode: '313000',
        child: [
          {
            id: 330502,
            pid: 330500,
            type: 3,
            name: '吴兴区',
            zipCode: '313000',
            child: null
          },
          {
            id: 330503,
            pid: 330500,
            type: 3,
            name: '南浔区',
            zipCode: '313009',
            child: null
          },
          {
            id: 330521,
            pid: 330500,
            type: 3,
            name: '德清县',
            zipCode: '313200',
            child: null
          },
          {
            id: 330522,
            pid: 330500,
            type: 3,
            name: '长兴县',
            zipCode: '313100',
            child: null
          },
          {
            id: 330523,
            pid: 330500,
            type: 3,
            name: '安吉县',
            zipCode: '313300',
            child: null
          }
        ]
      },
      {
        id: 330600,
        pid: 330000,
        type: 2,
        name: '绍兴市',
        zipCode: '312000',
        child: [
          {
            id: 330602,
            pid: 330600,
            type: 3,
            name: '越城区',
            zipCode: '312000',
            child: null
          },
          {
            id: 330603,
            pid: 330600,
            type: 3,
            name: '柯桥区',
            zipCode: '312030',
            child: null
          },
          {
            id: 330604,
            pid: 330600,
            type: 3,
            name: '上虞区',
            zipCode: '312300',
            child: null
          },
          {
            id: 330624,
            pid: 330600,
            type: 3,
            name: '新昌县',
            zipCode: '312500',
            child: null
          },
          {
            id: 330681,
            pid: 330600,
            type: 3,
            name: '诸暨市',
            zipCode: '311800',
            child: null
          },
          {
            id: 330683,
            pid: 330600,
            type: 3,
            name: '嵊州市',
            zipCode: '312400',
            child: null
          }
        ]
      },
      {
        id: 330700,
        pid: 330000,
        type: 2,
        name: '金华市',
        zipCode: '321000',
        child: [
          {
            id: 330702,
            pid: 330700,
            type: 3,
            name: '婺城区',
            zipCode: '321000',
            child: null
          },
          {
            id: 330703,
            pid: 330700,
            type: 3,
            name: '金东区',
            zipCode: '321000',
            child: null
          },
          {
            id: 330723,
            pid: 330700,
            type: 3,
            name: '武义县',
            zipCode: '321200',
            child: null
          },
          {
            id: 330726,
            pid: 330700,
            type: 3,
            name: '浦江县',
            zipCode: '322200',
            child: null
          },
          {
            id: 330727,
            pid: 330700,
            type: 3,
            name: '磐安县',
            zipCode: '322300',
            child: null
          },
          {
            id: 330781,
            pid: 330700,
            type: 3,
            name: '兰溪市',
            zipCode: '321100',
            child: null
          },
          {
            id: 330782,
            pid: 330700,
            type: 3,
            name: '义乌市',
            zipCode: '322000',
            child: null
          },
          {
            id: 330783,
            pid: 330700,
            type: 3,
            name: '东阳市',
            zipCode: '322100',
            child: null
          },
          {
            id: 330784,
            pid: 330700,
            type: 3,
            name: '永康市',
            zipCode: '321300',
            child: null
          }
        ]
      },
      {
        id: 330800,
        pid: 330000,
        type: 2,
        name: '衢州市',
        zipCode: '324002',
        child: [
          {
            id: 330802,
            pid: 330800,
            type: 3,
            name: '柯城区',
            zipCode: '324100',
            child: null
          },
          {
            id: 330803,
            pid: 330800,
            type: 3,
            name: '衢江区',
            zipCode: '324022',
            child: null
          },
          {
            id: 330822,
            pid: 330800,
            type: 3,
            name: '常山县',
            zipCode: '324200',
            child: null
          },
          {
            id: 330824,
            pid: 330800,
            type: 3,
            name: '开化县',
            zipCode: '324300',
            child: null
          },
          {
            id: 330825,
            pid: 330800,
            type: 3,
            name: '龙游县',
            zipCode: '324400',
            child: null
          },
          {
            id: 330881,
            pid: 330800,
            type: 3,
            name: '江山市',
            zipCode: '324100',
            child: null
          }
        ]
      },
      {
        id: 330900,
        pid: 330000,
        type: 2,
        name: '舟山市',
        zipCode: '316000',
        child: [
          {
            id: 330902,
            pid: 330900,
            type: 3,
            name: '定海区',
            zipCode: '316000',
            child: null
          },
          {
            id: 330903,
            pid: 330900,
            type: 3,
            name: '普陀区',
            zipCode: '316100',
            child: null
          },
          {
            id: 330921,
            pid: 330900,
            type: 3,
            name: '岱山县',
            zipCode: '316200',
            child: null
          },
          {
            id: 330922,
            pid: 330900,
            type: 3,
            name: '嵊泗县',
            zipCode: '202450',
            child: null
          }
        ]
      },
      {
        id: 331000,
        pid: 330000,
        type: 2,
        name: '台州市',
        zipCode: '318000',
        child: [
          {
            id: 331002,
            pid: 331000,
            type: 3,
            name: '椒江区',
            zipCode: '318000',
            child: null
          },
          {
            id: 331003,
            pid: 331000,
            type: 3,
            name: '黄岩区',
            zipCode: '318020',
            child: null
          },
          {
            id: 331004,
            pid: 331000,
            type: 3,
            name: '路桥区',
            zipCode: '318050',
            child: null
          },
          {
            id: 331021,
            pid: 331000,
            type: 3,
            name: '玉环县',
            zipCode: '317600',
            child: null
          },
          {
            id: 331022,
            pid: 331000,
            type: 3,
            name: '三门县',
            zipCode: '317100',
            child: null
          },
          {
            id: 331023,
            pid: 331000,
            type: 3,
            name: '天台县',
            zipCode: '317200',
            child: null
          },
          {
            id: 331024,
            pid: 331000,
            type: 3,
            name: '仙居县',
            zipCode: '317300',
            child: null
          },
          {
            id: 331081,
            pid: 331000,
            type: 3,
            name: '温岭市',
            zipCode: '317500',
            child: null
          },
          {
            id: 331082,
            pid: 331000,
            type: 3,
            name: '临海市',
            zipCode: '317000',
            child: null
          }
        ]
      },
      {
        id: 331100,
        pid: 330000,
        type: 2,
        name: '丽水市',
        zipCode: '323000',
        child: [
          {
            id: 331102,
            pid: 331100,
            type: 3,
            name: '莲都区',
            zipCode: '323000',
            child: null
          },
          {
            id: 331121,
            pid: 331100,
            type: 3,
            name: '青田县',
            zipCode: '323900',
            child: null
          },
          {
            id: 331122,
            pid: 331100,
            type: 3,
            name: '缙云县',
            zipCode: '321400',
            child: null
          },
          {
            id: 331123,
            pid: 331100,
            type: 3,
            name: '遂昌县',
            zipCode: '323300',
            child: null
          },
          {
            id: 331124,
            pid: 331100,
            type: 3,
            name: '松阳县',
            zipCode: '323400',
            child: null
          },
          {
            id: 331125,
            pid: 331100,
            type: 3,
            name: '云和县',
            zipCode: '323600',
            child: null
          },
          {
            id: 331126,
            pid: 331100,
            type: 3,
            name: '庆元县',
            zipCode: '323800',
            child: null
          },
          {
            id: 331127,
            pid: 331100,
            type: 3,
            name: '景宁畲族自治县',
            zipCode: '323500',
            child: null
          },
          {
            id: 331181,
            pid: 331100,
            type: 3,
            name: '龙泉市',
            zipCode: '323700',
            child: null
          }
        ]
      },
      {
        id: 331200,
        pid: 330000,
        type: 2,
        name: '舟山群岛新区',
        zipCode: '316000',
        child: [
          {
            id: 331201,
            pid: 331200,
            type: 3,
            name: '金塘岛',
            zipCode: '316000',
            child: null
          },
          {
            id: 331202,
            pid: 331200,
            type: 3,
            name: '六横岛',
            zipCode: '316000',
            child: null
          },
          {
            id: 331203,
            pid: 331200,
            type: 3,
            name: '衢山岛',
            zipCode: '316000',
            child: null
          },
          {
            id: 331204,
            pid: 331200,
            type: 3,
            name: '舟山本岛西北部',
            zipCode: '316000',
            child: null
          },
          {
            id: 331205,
            pid: 331200,
            type: 3,
            name: '岱山岛西南部',
            zipCode: '316000',
            child: null
          },
          {
            id: 331206,
            pid: 331200,
            type: 3,
            name: '泗礁岛',
            zipCode: '316000',
            child: null
          },
          {
            id: 331207,
            pid: 331200,
            type: 3,
            name: '朱家尖岛',
            zipCode: '316000',
            child: null
          },
          {
            id: 331208,
            pid: 331200,
            type: 3,
            name: '洋山岛',
            zipCode: '316000',
            child: null
          },
          {
            id: 331209,
            pid: 331200,
            type: 3,
            name: '长涂岛',
            zipCode: '316000',
            child: null
          },
          {
            id: 331210,
            pid: 331200,
            type: 3,
            name: '虾峙岛',
            zipCode: '316000',
            child: null
          }
        ]
      }
    ]
  },
  {
    id: 340000,
    pid: 100000,
    type: 1,
    name: '安徽省',
    base: 'ah', //省份简称
    zipCode: '',
    child: [
      {
        id: 340100,
        pid: 340000,
        type: 2,
        name: '合肥市',
        zipCode: '230001',
        child: [
          {
            id: 340102,
            pid: 340100,
            type: 3,
            name: '瑶海区',
            zipCode: '230011',
            child: null
          },
          {
            id: 340103,
            pid: 340100,
            type: 3,
            name: '庐阳区',
            zipCode: '230001',
            child: null
          },
          {
            id: 340104,
            pid: 340100,
            type: 3,
            name: '蜀山区',
            zipCode: '230031',
            child: null
          },
          {
            id: 340111,
            pid: 340100,
            type: 3,
            name: '包河区',
            zipCode: '230041',
            child: null
          },
          {
            id: 340121,
            pid: 340100,
            type: 3,
            name: '长丰县',
            zipCode: '231100',
            child: null
          },
          {
            id: 340122,
            pid: 340100,
            type: 3,
            name: '肥东县',
            zipCode: '231600',
            child: null
          },
          {
            id: 340123,
            pid: 340100,
            type: 3,
            name: '肥西县',
            zipCode: '231200',
            child: null
          },
          {
            id: 340124,
            pid: 340100,
            type: 3,
            name: '庐江县',
            zipCode: '231500',
            child: null
          },
          {
            id: 340181,
            pid: 340100,
            type: 3,
            name: '巢湖市',
            zipCode: '238000',
            child: null
          }
        ]
      },
      {
        id: 340200,
        pid: 340000,
        type: 2,
        name: '芜湖市',
        zipCode: '241000',
        child: [
          {
            id: 340202,
            pid: 340200,
            type: 3,
            name: '镜湖区',
            zipCode: '241000',
            child: null
          },
          {
            id: 340203,
            pid: 340200,
            type: 3,
            name: '弋江区',
            zipCode: '241000',
            child: null
          },
          {
            id: 340207,
            pid: 340200,
            type: 3,
            name: '鸠江区',
            zipCode: '241000',
            child: null
          },
          {
            id: 340208,
            pid: 340200,
            type: 3,
            name: '三山区',
            zipCode: '241000',
            child: null
          },
          {
            id: 340221,
            pid: 340200,
            type: 3,
            name: '芜湖县',
            zipCode: '241100',
            child: null
          },
          {
            id: 340222,
            pid: 340200,
            type: 3,
            name: '繁昌县',
            zipCode: '241200',
            child: null
          },
          {
            id: 340223,
            pid: 340200,
            type: 3,
            name: '南陵县',
            zipCode: '242400',
            child: null
          },
          {
            id: 340225,
            pid: 340200,
            type: 3,
            name: '无为县',
            zipCode: '238300',
            child: null
          }
        ]
      },
      {
        id: 340300,
        pid: 340000,
        type: 2,
        name: '蚌埠市',
        zipCode: '233000',
        child: [
          {
            id: 340302,
            pid: 340300,
            type: 3,
            name: '龙子湖区',
            zipCode: '233000',
            child: null
          },
          {
            id: 340303,
            pid: 340300,
            type: 3,
            name: '蚌山区',
            zipCode: '233000',
            child: null
          },
          {
            id: 340304,
            pid: 340300,
            type: 3,
            name: '禹会区',
            zipCode: '233010',
            child: null
          },
          {
            id: 340311,
            pid: 340300,
            type: 3,
            name: '淮上区',
            zipCode: '233002',
            child: null
          },
          {
            id: 340321,
            pid: 340300,
            type: 3,
            name: '怀远县',
            zipCode: '233400',
            child: null
          },
          {
            id: 340322,
            pid: 340300,
            type: 3,
            name: '五河县',
            zipCode: '233300',
            child: null
          },
          {
            id: 340323,
            pid: 340300,
            type: 3,
            name: '固镇县',
            zipCode: '233700',
            child: null
          }
        ]
      },
      {
        id: 340400,
        pid: 340000,
        type: 2,
        name: '淮南市',
        zipCode: '232001',
        child: [
          {
            id: 340402,
            pid: 340400,
            type: 3,
            name: '大通区',
            zipCode: '232033',
            child: null
          },
          {
            id: 340403,
            pid: 340400,
            type: 3,
            name: '田家庵区',
            zipCode: '232000',
            child: null
          },
          {
            id: 340404,
            pid: 340400,
            type: 3,
            name: '谢家集区',
            zipCode: '232052',
            child: null
          },
          {
            id: 340405,
            pid: 340400,
            type: 3,
            name: '八公山区',
            zipCode: '232072',
            child: null
          },
          {
            id: 340406,
            pid: 340400,
            type: 3,
            name: '潘集区',
            zipCode: '232082',
            child: null
          },
          {
            id: 340421,
            pid: 340400,
            type: 3,
            name: '凤台县',
            zipCode: '232100',
            child: null
          }
        ]
      },
      {
        id: 340500,
        pid: 340000,
        type: 2,
        name: '马鞍山市',
        zipCode: '243001',
        child: [
          {
            id: 340503,
            pid: 340500,
            type: 3,
            name: '花山区',
            zipCode: '243000',
            child: null
          },
          {
            id: 340504,
            pid: 340500,
            type: 3,
            name: '雨山区',
            zipCode: '243071',
            child: null
          },
          {
            id: 340506,
            pid: 340500,
            type: 3,
            name: '博望区',
            zipCode: '243131',
            child: null
          },
          {
            id: 340521,
            pid: 340500,
            type: 3,
            name: '当涂县',
            zipCode: '243100',
            child: null
          },
          {
            id: 340522,
            pid: 340500,
            type: 3,
            name: '含山县',
            zipCode: '238100',
            child: null
          },
          {
            id: 340523,
            pid: 340500,
            type: 3,
            name: '和县',
            zipCode: '238200',
            child: null
          }
        ]
      },
      {
        id: 340600,
        pid: 340000,
        type: 2,
        name: '淮北市',
        zipCode: '235000',
        child: [
          {
            id: 340602,
            pid: 340600,
            type: 3,
            name: '杜集区',
            zipCode: '235000',
            child: null
          },
          {
            id: 340603,
            pid: 340600,
            type: 3,
            name: '相山区',
            zipCode: '235000',
            child: null
          },
          {
            id: 340604,
            pid: 340600,
            type: 3,
            name: '烈山区',
            zipCode: '235000',
            child: null
          },
          {
            id: 340621,
            pid: 340600,
            type: 3,
            name: '濉溪县',
            zipCode: '235100',
            child: null
          }
        ]
      },
      {
        id: 340700,
        pid: 340000,
        type: 2,
        name: '铜陵市',
        zipCode: '244000',
        child: [
          {
            id: 340702,
            pid: 340700,
            type: 3,
            name: '铜官山区',
            zipCode: '244000',
            child: null
          },
          {
            id: 340703,
            pid: 340700,
            type: 3,
            name: '狮子山区',
            zipCode: '244000',
            child: null
          },
          {
            id: 340711,
            pid: 340700,
            type: 3,
            name: '郊区',
            zipCode: '244000',
            child: null
          },
          {
            id: 340721,
            pid: 340700,
            type: 3,
            name: '铜陵县',
            zipCode: '244100',
            child: null
          }
        ]
      },
      {
        id: 340800,
        pid: 340000,
        type: 2,
        name: '安庆市',
        zipCode: '246001',
        child: [
          {
            id: 340802,
            pid: 340800,
            type: 3,
            name: '迎江区',
            zipCode: '246001',
            child: null
          },
          {
            id: 340803,
            pid: 340800,
            type: 3,
            name: '大观区',
            zipCode: '246002',
            child: null
          },
          {
            id: 340811,
            pid: 340800,
            type: 3,
            name: '宜秀区',
            zipCode: '246003',
            child: null
          },
          {
            id: 340822,
            pid: 340800,
            type: 3,
            name: '怀宁县',
            zipCode: '246100',
            child: null
          },
          {
            id: 340823,
            pid: 340800,
            type: 3,
            name: '枞阳县',
            zipCode: '246700',
            child: null
          },
          {
            id: 340824,
            pid: 340800,
            type: 3,
            name: '潜山县',
            zipCode: '246300',
            child: null
          },
          {
            id: 340825,
            pid: 340800,
            type: 3,
            name: '太湖县',
            zipCode: '246400',
            child: null
          },
          {
            id: 340826,
            pid: 340800,
            type: 3,
            name: '宿松县',
            zipCode: '246500',
            child: null
          },
          {
            id: 340827,
            pid: 340800,
            type: 3,
            name: '望江县',
            zipCode: '246200',
            child: null
          },
          {
            id: 340828,
            pid: 340800,
            type: 3,
            name: '岳西县',
            zipCode: '246600',
            child: null
          },
          {
            id: 340881,
            pid: 340800,
            type: 3,
            name: '桐城市',
            zipCode: '231400',
            child: null
          }
        ]
      },
      {
        id: 341000,
        pid: 340000,
        type: 2,
        name: '黄山市',
        zipCode: '245000',
        child: [
          {
            id: 341002,
            pid: 341000,
            type: 3,
            name: '屯溪区',
            zipCode: '245000',
            child: null
          },
          {
            id: 341003,
            pid: 341000,
            type: 3,
            name: '黄山区',
            zipCode: '242700',
            child: null
          },
          {
            id: 341004,
            pid: 341000,
            type: 3,
            name: '徽州区',
            zipCode: '245061',
            child: null
          },
          {
            id: 341021,
            pid: 341000,
            type: 3,
            name: '歙县',
            zipCode: '245200',
            child: null
          },
          {
            id: 341022,
            pid: 341000,
            type: 3,
            name: '休宁县',
            zipCode: '245400',
            child: null
          },
          {
            id: 341023,
            pid: 341000,
            type: 3,
            name: '黟县',
            zipCode: '245500',
            child: null
          },
          {
            id: 341024,
            pid: 341000,
            type: 3,
            name: '祁门县',
            zipCode: '245600',
            child: null
          }
        ]
      },
      {
        id: 341100,
        pid: 340000,
        type: 2,
        name: '滁州市',
        zipCode: '239000',
        child: [
          {
            id: 341102,
            pid: 341100,
            type: 3,
            name: '琅琊区',
            zipCode: '239000',
            child: null
          },
          {
            id: 341103,
            pid: 341100,
            type: 3,
            name: '南谯区',
            zipCode: '239000',
            child: null
          },
          {
            id: 341122,
            pid: 341100,
            type: 3,
            name: '来安县',
            zipCode: '239200',
            child: null
          },
          {
            id: 341124,
            pid: 341100,
            type: 3,
            name: '全椒县',
            zipCode: '239500',
            child: null
          },
          {
            id: 341125,
            pid: 341100,
            type: 3,
            name: '定远县',
            zipCode: '233200',
            child: null
          },
          {
            id: 341126,
            pid: 341100,
            type: 3,
            name: '凤阳县',
            zipCode: '233100',
            child: null
          },
          {
            id: 341181,
            pid: 341100,
            type: 3,
            name: '天长市',
            zipCode: '239300',
            child: null
          },
          {
            id: 341182,
            pid: 341100,
            type: 3,
            name: '明光市',
            zipCode: '239400',
            child: null
          }
        ]
      },
      {
        id: 341200,
        pid: 340000,
        type: 2,
        name: '阜阳市',
        zipCode: '236033',
        child: [
          {
            id: 341202,
            pid: 341200,
            type: 3,
            name: '颍州区',
            zipCode: '236001',
            child: null
          },
          {
            id: 341203,
            pid: 341200,
            type: 3,
            name: '颍东区',
            zipCode: '236058',
            child: null
          },
          {
            id: 341204,
            pid: 341200,
            type: 3,
            name: '颍泉区',
            zipCode: '236045',
            child: null
          },
          {
            id: 341221,
            pid: 341200,
            type: 3,
            name: '临泉县',
            zipCode: '236400',
            child: null
          },
          {
            id: 341222,
            pid: 341200,
            type: 3,
            name: '太和县',
            zipCode: '236600',
            child: null
          },
          {
            id: 341225,
            pid: 341200,
            type: 3,
            name: '阜南县',
            zipCode: '236300',
            child: null
          },
          {
            id: 341226,
            pid: 341200,
            type: 3,
            name: '颍上县',
            zipCode: '236200',
            child: null
          },
          {
            id: 341282,
            pid: 341200,
            type: 3,
            name: '界首市',
            zipCode: '236500',
            child: null
          }
        ]
      },
      {
        id: 341300,
        pid: 340000,
        type: 2,
        name: '宿州市',
        zipCode: '234000',
        child: [
          {
            id: 341302,
            pid: 341300,
            type: 3,
            name: '埇桥区',
            zipCode: '234000',
            child: null
          },
          {
            id: 341321,
            pid: 341300,
            type: 3,
            name: '砀山县',
            zipCode: '235300',
            child: null
          },
          {
            id: 341322,
            pid: 341300,
            type: 3,
            name: '萧县',
            zipCode: '235200',
            child: null
          },
          {
            id: 341323,
            pid: 341300,
            type: 3,
            name: '灵璧县',
            zipCode: '234200',
            child: null
          },
          {
            id: 341324,
            pid: 341300,
            type: 3,
            name: '泗县',
            zipCode: '234300',
            child: null
          }
        ]
      },
      {
        id: 341500,
        pid: 340000,
        type: 2,
        name: '六安市',
        zipCode: '237000',
        child: [
          {
            id: 341502,
            pid: 341500,
            type: 3,
            name: '金安区',
            zipCode: '237005',
            child: null
          },
          {
            id: 341503,
            pid: 341500,
            type: 3,
            name: '裕安区',
            zipCode: '237010',
            child: null
          },
          {
            id: 341521,
            pid: 341500,
            type: 3,
            name: '寿县',
            zipCode: '232200',
            child: null
          },
          {
            id: 341522,
            pid: 341500,
            type: 3,
            name: '霍邱县',
            zipCode: '237400',
            child: null
          },
          {
            id: 341523,
            pid: 341500,
            type: 3,
            name: '舒城县',
            zipCode: '231300',
            child: null
          },
          {
            id: 341524,
            pid: 341500,
            type: 3,
            name: '金寨县',
            zipCode: '237300',
            child: null
          },
          {
            id: 341525,
            pid: 341500,
            type: 3,
            name: '霍山县',
            zipCode: '237200',
            child: null
          }
        ]
      },
      {
        id: 341600,
        pid: 340000,
        type: 2,
        name: '亳州市',
        zipCode: '236802',
        child: [
          {
            id: 341602,
            pid: 341600,
            type: 3,
            name: '谯城区',
            zipCode: '236800',
            child: null
          },
          {
            id: 341621,
            pid: 341600,
            type: 3,
            name: '涡阳县',
            zipCode: '233600',
            child: null
          },
          {
            id: 341622,
            pid: 341600,
            type: 3,
            name: '蒙城县',
            zipCode: '233500',
            child: null
          },
          {
            id: 341623,
            pid: 341600,
            type: 3,
            name: '利辛县',
            zipCode: '236700',
            child: null
          }
        ]
      },
      {
        id: 341700,
        pid: 340000,
        type: 2,
        name: '池州市',
        zipCode: '247100',
        child: [
          {
            id: 341702,
            pid: 341700,
            type: 3,
            name: '贵池区',
            zipCode: '247100',
            child: null
          },
          {
            id: 341721,
            pid: 341700,
            type: 3,
            name: '东至县',
            zipCode: '247200',
            child: null
          },
          {
            id: 341722,
            pid: 341700,
            type: 3,
            name: '石台县',
            zipCode: '245100',
            child: null
          },
          {
            id: 341723,
            pid: 341700,
            type: 3,
            name: '青阳县',
            zipCode: '242800',
            child: null
          }
        ]
      },
      {
        id: 341800,
        pid: 340000,
        type: 2,
        name: '宣城市',
        zipCode: '242000',
        child: [
          {
            id: 341802,
            pid: 341800,
            type: 3,
            name: '宣州区',
            zipCode: '242000',
            child: null
          },
          {
            id: 341821,
            pid: 341800,
            type: 3,
            name: '郎溪县',
            zipCode: '242100',
            child: null
          },
          {
            id: 341822,
            pid: 341800,
            type: 3,
            name: '广德县',
            zipCode: '242200',
            child: null
          },
          {
            id: 341823,
            pid: 341800,
            type: 3,
            name: '泾县',
            zipCode: '242500',
            child: null
          },
          {
            id: 341824,
            pid: 341800,
            type: 3,
            name: '绩溪县',
            zipCode: '245300',
            child: null
          },
          {
            id: 341825,
            pid: 341800,
            type: 3,
            name: '旌德县',
            zipCode: '242600',
            child: null
          },
          {
            id: 341881,
            pid: 341800,
            type: 3,
            name: '宁国市',
            zipCode: '242300',
            child: null
          }
        ]
      }
    ]
  },
  {
    id: 350000,
    pid: 100000,
    type: 1,
    name: '福建省',
    base: 'fj', //省份简称
    zipCode: '',
    child: [
      {
        id: 350100,
        pid: 350000,
        type: 2,
        name: '福州市',
        zipCode: '350001',
        child: [
          {
            id: 350102,
            pid: 350100,
            type: 3,
            name: '鼓楼区',
            zipCode: '350001',
            child: null
          },
          {
            id: 350103,
            pid: 350100,
            type: 3,
            name: '台江区',
            zipCode: '350004',
            child: null
          },
          {
            id: 350104,
            pid: 350100,
            type: 3,
            name: '仓山区',
            zipCode: '350007',
            child: null
          },
          {
            id: 350105,
            pid: 350100,
            type: 3,
            name: '马尾区',
            zipCode: '350015',
            child: null
          },
          {
            id: 350111,
            pid: 350100,
            type: 3,
            name: '晋安区',
            zipCode: '350011',
            child: null
          },
          {
            id: 350121,
            pid: 350100,
            type: 3,
            name: '闽侯县',
            zipCode: '350100',
            child: null
          },
          {
            id: 350122,
            pid: 350100,
            type: 3,
            name: '连江县',
            zipCode: '350500',
            child: null
          },
          {
            id: 350123,
            pid: 350100,
            type: 3,
            name: '罗源县',
            zipCode: '350600',
            child: null
          },
          {
            id: 350124,
            pid: 350100,
            type: 3,
            name: '闽清县',
            zipCode: '350800',
            child: null
          },
          {
            id: 350125,
            pid: 350100,
            type: 3,
            name: '永泰县',
            zipCode: '350700',
            child: null
          },
          {
            id: 350128,
            pid: 350100,
            type: 3,
            name: '平潭县',
            zipCode: '350400',
            child: null
          },
          {
            id: 350181,
            pid: 350100,
            type: 3,
            name: '福清市',
            zipCode: '350300',
            child: null
          },
          {
            id: 350182,
            pid: 350100,
            type: 3,
            name: '长乐市',
            zipCode: '350200',
            child: null
          }
        ]
      },
      {
        id: 350200,
        pid: 350000,
        type: 2,
        name: '厦门市',
        zipCode: '361003',
        child: [
          {
            id: 350203,
            pid: 350200,
            type: 3,
            name: '思明区',
            zipCode: '361001',
            child: null
          },
          {
            id: 350205,
            pid: 350200,
            type: 3,
            name: '海沧区',
            zipCode: '361026',
            child: null
          },
          {
            id: 350206,
            pid: 350200,
            type: 3,
            name: '湖里区',
            zipCode: '361006',
            child: null
          },
          {
            id: 350211,
            pid: 350200,
            type: 3,
            name: '集美区',
            zipCode: '361021',
            child: null
          },
          {
            id: 350212,
            pid: 350200,
            type: 3,
            name: '同安区',
            zipCode: '361100',
            child: null
          },
          {
            id: 350213,
            pid: 350200,
            type: 3,
            name: '翔安区',
            zipCode: '361101',
            child: null
          }
        ]
      },
      {
        id: 350300,
        pid: 350000,
        type: 2,
        name: '莆田市',
        zipCode: '351100',
        child: [
          {
            id: 350302,
            pid: 350300,
            type: 3,
            name: '城厢区',
            zipCode: '351100',
            child: null
          },
          {
            id: 350303,
            pid: 350300,
            type: 3,
            name: '涵江区',
            zipCode: '351111',
            child: null
          },
          {
            id: 350304,
            pid: 350300,
            type: 3,
            name: '荔城区',
            zipCode: '351100',
            child: null
          },
          {
            id: 350305,
            pid: 350300,
            type: 3,
            name: '秀屿区',
            zipCode: '351152',
            child: null
          },
          {
            id: 350322,
            pid: 350300,
            type: 3,
            name: '仙游县',
            zipCode: '351200',
            child: null
          }
        ]
      },
      {
        id: 350400,
        pid: 350000,
        type: 2,
        name: '三明市',
        zipCode: '365000',
        child: [
          {
            id: 350402,
            pid: 350400,
            type: 3,
            name: '梅列区',
            zipCode: '365000',
            child: null
          },
          {
            id: 350403,
            pid: 350400,
            type: 3,
            name: '三元区',
            zipCode: '365001',
            child: null
          },
          {
            id: 350421,
            pid: 350400,
            type: 3,
            name: '明溪县',
            zipCode: '365200',
            child: null
          },
          {
            id: 350423,
            pid: 350400,
            type: 3,
            name: '清流县',
            zipCode: '365300',
            child: null
          },
          {
            id: 350424,
            pid: 350400,
            type: 3,
            name: '宁化县',
            zipCode: '365400',
            child: null
          },
          {
            id: 350425,
            pid: 350400,
            type: 3,
            name: '大田县',
            zipCode: '366100',
            child: null
          },
          {
            id: 350426,
            pid: 350400,
            type: 3,
            name: '尤溪县',
            zipCode: '365100',
            child: null
          },
          {
            id: 350427,
            pid: 350400,
            type: 3,
            name: '沙县',
            zipCode: '365500',
            child: null
          },
          {
            id: 350428,
            pid: 350400,
            type: 3,
            name: '将乐县',
            zipCode: '353300',
            child: null
          },
          {
            id: 350429,
            pid: 350400,
            type: 3,
            name: '泰宁县',
            zipCode: '354400',
            child: null
          },
          {
            id: 350430,
            pid: 350400,
            type: 3,
            name: '建宁县',
            zipCode: '354500',
            child: null
          },
          {
            id: 350481,
            pid: 350400,
            type: 3,
            name: '永安市',
            zipCode: '366000',
            child: null
          }
        ]
      },
      {
        id: 350500,
        pid: 350000,
        type: 2,
        name: '泉州市',
        zipCode: '362000',
        child: [
          {
            id: 350502,
            pid: 350500,
            type: 3,
            name: '鲤城区',
            zipCode: '362000',
            child: null
          },
          {
            id: 350503,
            pid: 350500,
            type: 3,
            name: '丰泽区',
            zipCode: '362000',
            child: null
          },
          {
            id: 350504,
            pid: 350500,
            type: 3,
            name: '洛江区',
            zipCode: '362011',
            child: null
          },
          {
            id: 350505,
            pid: 350500,
            type: 3,
            name: '泉港区',
            zipCode: '362114',
            child: null
          },
          {
            id: 350521,
            pid: 350500,
            type: 3,
            name: '惠安县',
            zipCode: '362100',
            child: null
          },
          {
            id: 350524,
            pid: 350500,
            type: 3,
            name: '安溪县',
            zipCode: '362400',
            child: null
          },
          {
            id: 350525,
            pid: 350500,
            type: 3,
            name: '永春县',
            zipCode: '362600',
            child: null
          },
          {
            id: 350526,
            pid: 350500,
            type: 3,
            name: '德化县',
            zipCode: '362500',
            child: null
          },
          {
            id: 350527,
            pid: 350500,
            type: 3,
            name: '金门县',
            zipCode: '',
            child: null
          },
          {
            id: 350581,
            pid: 350500,
            type: 3,
            name: '石狮市',
            zipCode: '362700',
            child: null
          },
          {
            id: 350582,
            pid: 350500,
            type: 3,
            name: '晋江市',
            zipCode: '362200',
            child: null
          },
          {
            id: 350583,
            pid: 350500,
            type: 3,
            name: '南安市',
            zipCode: '362300',
            child: null
          }
        ]
      },
      {
        id: 350600,
        pid: 350000,
        type: 2,
        name: '漳州市',
        zipCode: '363005',
        child: [
          {
            id: 350602,
            pid: 350600,
            type: 3,
            name: '芗城区',
            zipCode: '363000',
            child: null
          },
          {
            id: 350603,
            pid: 350600,
            type: 3,
            name: '龙文区',
            zipCode: '363005',
            child: null
          },
          {
            id: 350622,
            pid: 350600,
            type: 3,
            name: '云霄县',
            zipCode: '363300',
            child: null
          },
          {
            id: 350623,
            pid: 350600,
            type: 3,
            name: '漳浦县',
            zipCode: '363200',
            child: null
          },
          {
            id: 350624,
            pid: 350600,
            type: 3,
            name: '诏安县',
            zipCode: '363500',
            child: null
          },
          {
            id: 350625,
            pid: 350600,
            type: 3,
            name: '长泰县',
            zipCode: '363900',
            child: null
          },
          {
            id: 350626,
            pid: 350600,
            type: 3,
            name: '东山县',
            zipCode: '363400',
            child: null
          },
          {
            id: 350627,
            pid: 350600,
            type: 3,
            name: '南靖县',
            zipCode: '363600',
            child: null
          },
          {
            id: 350628,
            pid: 350600,
            type: 3,
            name: '平和县',
            zipCode: '363700',
            child: null
          },
          {
            id: 350629,
            pid: 350600,
            type: 3,
            name: '华安县',
            zipCode: '363800',
            child: null
          },
          {
            id: 350681,
            pid: 350600,
            type: 3,
            name: '龙海市',
            zipCode: '363100',
            child: null
          }
        ]
      },
      {
        id: 350700,
        pid: 350000,
        type: 2,
        name: '南平市',
        zipCode: '353000',
        child: [
          {
            id: 350702,
            pid: 350700,
            type: 3,
            name: '延平区',
            zipCode: '353000',
            child: null
          },
          {
            id: 350703,
            pid: 350700,
            type: 3,
            name: '建阳区',
            zipCode: '354200',
            child: null
          },
          {
            id: 350721,
            pid: 350700,
            type: 3,
            name: '顺昌县',
            zipCode: '353200',
            child: null
          },
          {
            id: 350722,
            pid: 350700,
            type: 3,
            name: '浦城县',
            zipCode: '353400',
            child: null
          },
          {
            id: 350723,
            pid: 350700,
            type: 3,
            name: '光泽县',
            zipCode: '354100',
            child: null
          },
          {
            id: 350724,
            pid: 350700,
            type: 3,
            name: '松溪县',
            zipCode: '353500',
            child: null
          },
          {
            id: 350725,
            pid: 350700,
            type: 3,
            name: '政和县',
            zipCode: '353600',
            child: null
          },
          {
            id: 350781,
            pid: 350700,
            type: 3,
            name: '邵武市',
            zipCode: '354000',
            child: null
          },
          {
            id: 350782,
            pid: 350700,
            type: 3,
            name: '武夷山市',
            zipCode: '354300',
            child: null
          },
          {
            id: 350783,
            pid: 350700,
            type: 3,
            name: '建瓯市',
            zipCode: '353100',
            child: null
          }
        ]
      },
      {
        id: 350800,
        pid: 350000,
        type: 2,
        name: '龙岩市',
        zipCode: '364000',
        child: [
          {
            id: 350802,
            pid: 350800,
            type: 3,
            name: '新罗区',
            zipCode: '364000',
            child: null
          },
          {
            id: 350821,
            pid: 350800,
            type: 3,
            name: '长汀县',
            zipCode: '366300',
            child: null
          },
          {
            id: 350822,
            pid: 350800,
            type: 3,
            name: '永定区',
            zipCode: '364100',
            child: null
          },
          {
            id: 350823,
            pid: 350800,
            type: 3,
            name: '上杭县',
            zipCode: '364200',
            child: null
          },
          {
            id: 350824,
            pid: 350800,
            type: 3,
            name: '武平县',
            zipCode: '364300',
            child: null
          },
          {
            id: 350825,
            pid: 350800,
            type: 3,
            name: '连城县',
            zipCode: '366200',
            child: null
          },
          {
            id: 350881,
            pid: 350800,
            type: 3,
            name: '漳平市',
            zipCode: '364400',
            child: null
          }
        ]
      },
      {
        id: 350900,
        pid: 350000,
        type: 2,
        name: '宁德市',
        zipCode: '352100',
        child: [
          {
            id: 350902,
            pid: 350900,
            type: 3,
            name: '蕉城区',
            zipCode: '352100',
            child: null
          },
          {
            id: 350921,
            pid: 350900,
            type: 3,
            name: '霞浦县',
            zipCode: '355100',
            child: null
          },
          {
            id: 350922,
            pid: 350900,
            type: 3,
            name: '古田县',
            zipCode: '352200',
            child: null
          },
          {
            id: 350923,
            pid: 350900,
            type: 3,
            name: '屏南县',
            zipCode: '352300',
            child: null
          },
          {
            id: 350924,
            pid: 350900,
            type: 3,
            name: '寿宁县',
            zipCode: '355500',
            child: null
          },
          {
            id: 350925,
            pid: 350900,
            type: 3,
            name: '周宁县',
            zipCode: '355400',
            child: null
          },
          {
            id: 350926,
            pid: 350900,
            type: 3,
            name: '柘荣县',
            zipCode: '355300',
            child: null
          },
          {
            id: 350981,
            pid: 350900,
            type: 3,
            name: '福安市',
            zipCode: '355000',
            child: null
          },
          {
            id: 350982,
            pid: 350900,
            type: 3,
            name: '福鼎市',
            zipCode: '355200',
            child: null
          }
        ]
      }
    ]
  },
  {
    id: 360000,
    pid: 100000,
    type: 1,
    name: '江西省',
    base: 'jx', //省份简称
    zipCode: '',
    child: [
      {
        id: 360100,
        pid: 360000,
        type: 2,
        name: '南昌市',
        zipCode: '330008',
        child: [
          {
            id: 360102,
            pid: 360100,
            type: 3,
            name: '东湖区',
            zipCode: '330006',
            child: null
          },
          {
            id: 360103,
            pid: 360100,
            type: 3,
            name: '西湖区',
            zipCode: '330009',
            child: null
          },
          {
            id: 360104,
            pid: 360100,
            type: 3,
            name: '青云谱区',
            zipCode: '330001',
            child: null
          },
          {
            id: 360105,
            pid: 360100,
            type: 3,
            name: '湾里区',
            zipCode: '330004',
            child: null
          },
          {
            id: 360111,
            pid: 360100,
            type: 3,
            name: '青山湖区',
            zipCode: '330029',
            child: null
          },
          {
            id: 360121,
            pid: 360100,
            type: 3,
            name: '南昌县',
            zipCode: '330200',
            child: null
          },
          {
            id: 360122,
            pid: 360100,
            type: 3,
            name: '新建县',
            zipCode: '330100',
            child: null
          },
          {
            id: 360123,
            pid: 360100,
            type: 3,
            name: '安义县',
            zipCode: '330500',
            child: null
          },
          {
            id: 360124,
            pid: 360100,
            type: 3,
            name: '进贤县',
            zipCode: '331700',
            child: null
          }
        ]
      },
      {
        id: 360200,
        pid: 360000,
        type: 2,
        name: '景德镇市',
        zipCode: '333000',
        child: [
          {
            id: 360202,
            pid: 360200,
            type: 3,
            name: '昌江区',
            zipCode: '333000',
            child: null
          },
          {
            id: 360203,
            pid: 360200,
            type: 3,
            name: '珠山区',
            zipCode: '333000',
            child: null
          },
          {
            id: 360222,
            pid: 360200,
            type: 3,
            name: '浮梁县',
            zipCode: '333400',
            child: null
          },
          {
            id: 360281,
            pid: 360200,
            type: 3,
            name: '乐平市',
            zipCode: '333300',
            child: null
          }
        ]
      },
      {
        id: 360300,
        pid: 360000,
        type: 2,
        name: '萍乡市',
        zipCode: '337000',
        child: [
          {
            id: 360302,
            pid: 360300,
            type: 3,
            name: '安源区',
            zipCode: '337000',
            child: null
          },
          {
            id: 360313,
            pid: 360300,
            type: 3,
            name: '湘东区',
            zipCode: '337016',
            child: null
          },
          {
            id: 360321,
            pid: 360300,
            type: 3,
            name: '莲花县',
            zipCode: '337100',
            child: null
          },
          {
            id: 360322,
            pid: 360300,
            type: 3,
            name: '上栗县',
            zipCode: '337009',
            child: null
          },
          {
            id: 360323,
            pid: 360300,
            type: 3,
            name: '芦溪县',
            zipCode: '337053',
            child: null
          }
        ]
      },
      {
        id: 360400,
        pid: 360000,
        type: 2,
        name: '九江市',
        zipCode: '332000',
        child: [
          {
            id: 360402,
            pid: 360400,
            type: 3,
            name: '庐山区',
            zipCode: '332005',
            child: null
          },
          {
            id: 360403,
            pid: 360400,
            type: 3,
            name: '浔阳区',
            zipCode: '332000',
            child: null
          },
          {
            id: 360421,
            pid: 360400,
            type: 3,
            name: '九江县',
            zipCode: '332100',
            child: null
          },
          {
            id: 360423,
            pid: 360400,
            type: 3,
            name: '武宁县',
            zipCode: '332300',
            child: null
          },
          {
            id: 360424,
            pid: 360400,
            type: 3,
            name: '修水县',
            zipCode: '332400',
            child: null
          },
          {
            id: 360425,
            pid: 360400,
            type: 3,
            name: '永修县',
            zipCode: '330300',
            child: null
          },
          {
            id: 360426,
            pid: 360400,
            type: 3,
            name: '德安县',
            zipCode: '330400',
            child: null
          },
          {
            id: 360427,
            pid: 360400,
            type: 3,
            name: '星子县',
            zipCode: '332800',
            child: null
          },
          {
            id: 360428,
            pid: 360400,
            type: 3,
            name: '都昌县',
            zipCode: '332600',
            child: null
          },
          {
            id: 360429,
            pid: 360400,
            type: 3,
            name: '湖口县',
            zipCode: '332500',
            child: null
          },
          {
            id: 360430,
            pid: 360400,
            type: 3,
            name: '彭泽县',
            zipCode: '332700',
            child: null
          },
          {
            id: 360481,
            pid: 360400,
            type: 3,
            name: '瑞昌市',
            zipCode: '332200',
            child: null
          },
          {
            id: 360482,
            pid: 360400,
            type: 3,
            name: '共青城市',
            zipCode: '332020',
            child: null
          }
        ]
      },
      {
        id: 360500,
        pid: 360000,
        type: 2,
        name: '新余市',
        zipCode: '338025',
        child: [
          {
            id: 360502,
            pid: 360500,
            type: 3,
            name: '渝水区',
            zipCode: '338025',
            child: null
          },
          {
            id: 360521,
            pid: 360500,
            type: 3,
            name: '分宜县',
            zipCode: '336600',
            child: null
          }
        ]
      },
      {
        id: 360600,
        pid: 360000,
        type: 2,
        name: '鹰潭市',
        zipCode: '335000',
        child: [
          {
            id: 360602,
            pid: 360600,
            type: 3,
            name: '月湖区',
            zipCode: '335000',
            child: null
          },
          {
            id: 360622,
            pid: 360600,
            type: 3,
            name: '余江县',
            zipCode: '335200',
            child: null
          },
          {
            id: 360681,
            pid: 360600,
            type: 3,
            name: '贵溪市',
            zipCode: '335400',
            child: null
          }
        ]
      },
      {
        id: 360700,
        pid: 360000,
        type: 2,
        name: '赣州市',
        zipCode: '341000',
        child: [
          {
            id: 360702,
            pid: 360700,
            type: 3,
            name: '章贡区',
            zipCode: '341000',
            child: null
          },
          {
            id: 360703,
            pid: 360700,
            type: 3,
            name: '南康区',
            zipCode: '341400',
            child: null
          },
          {
            id: 360721,
            pid: 360700,
            type: 3,
            name: '赣县',
            zipCode: '341100',
            child: null
          },
          {
            id: 360722,
            pid: 360700,
            type: 3,
            name: '信丰县',
            zipCode: '341600',
            child: null
          },
          {
            id: 360723,
            pid: 360700,
            type: 3,
            name: '大余县',
            zipCode: '341500',
            child: null
          },
          {
            id: 360724,
            pid: 360700,
            type: 3,
            name: '上犹县',
            zipCode: '341200',
            child: null
          },
          {
            id: 360725,
            pid: 360700,
            type: 3,
            name: '崇义县',
            zipCode: '341300',
            child: null
          },
          {
            id: 360726,
            pid: 360700,
            type: 3,
            name: '安远县',
            zipCode: '342100',
            child: null
          },
          {
            id: 360727,
            pid: 360700,
            type: 3,
            name: '龙南县',
            zipCode: '341700',
            child: null
          },
          {
            id: 360728,
            pid: 360700,
            type: 3,
            name: '定南县',
            zipCode: '341900',
            child: null
          },
          {
            id: 360729,
            pid: 360700,
            type: 3,
            name: '全南县',
            zipCode: '341800',
            child: null
          },
          {
            id: 360730,
            pid: 360700,
            type: 3,
            name: '宁都县',
            zipCode: '342800',
            child: null
          },
          {
            id: 360731,
            pid: 360700,
            type: 3,
            name: '于都县',
            zipCode: '342300',
            child: null
          },
          {
            id: 360732,
            pid: 360700,
            type: 3,
            name: '兴国县',
            zipCode: '342400',
            child: null
          },
          {
            id: 360733,
            pid: 360700,
            type: 3,
            name: '会昌县',
            zipCode: '342600',
            child: null
          },
          {
            id: 360734,
            pid: 360700,
            type: 3,
            name: '寻乌县',
            zipCode: '342200',
            child: null
          },
          {
            id: 360735,
            pid: 360700,
            type: 3,
            name: '石城县',
            zipCode: '342700',
            child: null
          },
          {
            id: 360781,
            pid: 360700,
            type: 3,
            name: '瑞金市',
            zipCode: '342500',
            child: null
          }
        ]
      },
      {
        id: 360800,
        pid: 360000,
        type: 2,
        name: '吉安市',
        zipCode: '343000',
        child: [
          {
            id: 360802,
            pid: 360800,
            type: 3,
            name: '吉州区',
            zipCode: '343000',
            child: null
          },
          {
            id: 360803,
            pid: 360800,
            type: 3,
            name: '青原区',
            zipCode: '343009',
            child: null
          },
          {
            id: 360821,
            pid: 360800,
            type: 3,
            name: '吉安县',
            zipCode: '343100',
            child: null
          },
          {
            id: 360822,
            pid: 360800,
            type: 3,
            name: '吉水县',
            zipCode: '331600',
            child: null
          },
          {
            id: 360823,
            pid: 360800,
            type: 3,
            name: '峡江县',
            zipCode: '331409',
            child: null
          },
          {
            id: 360824,
            pid: 360800,
            type: 3,
            name: '新干县',
            zipCode: '331300',
            child: null
          },
          {
            id: 360825,
            pid: 360800,
            type: 3,
            name: '永丰县',
            zipCode: '331500',
            child: null
          },
          {
            id: 360826,
            pid: 360800,
            type: 3,
            name: '泰和县',
            zipCode: '343700',
            child: null
          },
          {
            id: 360827,
            pid: 360800,
            type: 3,
            name: '遂川县',
            zipCode: '343900',
            child: null
          },
          {
            id: 360828,
            pid: 360800,
            type: 3,
            name: '万安县',
            zipCode: '343800',
            child: null
          },
          {
            id: 360829,
            pid: 360800,
            type: 3,
            name: '安福县',
            zipCode: '343200',
            child: null
          },
          {
            id: 360830,
            pid: 360800,
            type: 3,
            name: '永新县',
            zipCode: '343400',
            child: null
          },
          {
            id: 360881,
            pid: 360800,
            type: 3,
            name: '井冈山市',
            zipCode: '343600',
            child: null
          }
        ]
      },
      {
        id: 360900,
        pid: 360000,
        type: 2,
        name: '宜春市',
        zipCode: '336000',
        child: [
          {
            id: 360902,
            pid: 360900,
            type: 3,
            name: '袁州区',
            zipCode: '336000',
            child: null
          },
          {
            id: 360921,
            pid: 360900,
            type: 3,
            name: '奉新县',
            zipCode: '330700',
            child: null
          },
          {
            id: 360922,
            pid: 360900,
            type: 3,
            name: '万载县',
            zipCode: '336100',
            child: null
          },
          {
            id: 360923,
            pid: 360900,
            type: 3,
            name: '上高县',
            zipCode: '336400',
            child: null
          },
          {
            id: 360924,
            pid: 360900,
            type: 3,
            name: '宜丰县',
            zipCode: '336300',
            child: null
          },
          {
            id: 360925,
            pid: 360900,
            type: 3,
            name: '靖安县',
            zipCode: '330600',
            child: null
          },
          {
            id: 360926,
            pid: 360900,
            type: 3,
            name: '铜鼓县',
            zipCode: '336200',
            child: null
          },
          {
            id: 360981,
            pid: 360900,
            type: 3,
            name: '丰城市',
            zipCode: '331100',
            child: null
          },
          {
            id: 360982,
            pid: 360900,
            type: 3,
            name: '樟树市',
            zipCode: '331200',
            child: null
          },
          {
            id: 360983,
            pid: 360900,
            type: 3,
            name: '高安市',
            zipCode: '330800',
            child: null
          }
        ]
      },
      {
        id: 361000,
        pid: 360000,
        type: 2,
        name: '抚州市',
        zipCode: '344000',
        child: [
          {
            id: 361002,
            pid: 361000,
            type: 3,
            name: '临川区',
            zipCode: '344000',
            child: null
          },
          {
            id: 361021,
            pid: 361000,
            type: 3,
            name: '南城县',
            zipCode: '344700',
            child: null
          },
          {
            id: 361022,
            pid: 361000,
            type: 3,
            name: '黎川县',
            zipCode: '344600',
            child: null
          },
          {
            id: 361023,
            pid: 361000,
            type: 3,
            name: '南丰县',
            zipCode: '344500',
            child: null
          },
          {
            id: 361024,
            pid: 361000,
            type: 3,
            name: '崇仁县',
            zipCode: '344200',
            child: null
          },
          {
            id: 361025,
            pid: 361000,
            type: 3,
            name: '乐安县',
            zipCode: '344300',
            child: null
          },
          {
            id: 361026,
            pid: 361000,
            type: 3,
            name: '宜黄县',
            zipCode: '344400',
            child: null
          },
          {
            id: 361027,
            pid: 361000,
            type: 3,
            name: '金溪县',
            zipCode: '344800',
            child: null
          },
          {
            id: 361028,
            pid: 361000,
            type: 3,
            name: '资溪县',
            zipCode: '335300',
            child: null
          },
          {
            id: 361029,
            pid: 361000,
            type: 3,
            name: '东乡县',
            zipCode: '331800',
            child: null
          },
          {
            id: 361030,
            pid: 361000,
            type: 3,
            name: '广昌县',
            zipCode: '344900',
            child: null
          }
        ]
      },
      {
        id: 361100,
        pid: 360000,
        type: 2,
        name: '上饶市',
        zipCode: '334000',
        child: [
          {
            id: 361102,
            pid: 361100,
            type: 3,
            name: '信州区',
            zipCode: '334000',
            child: null
          },
          {
            id: 361121,
            pid: 361100,
            type: 3,
            name: '上饶县',
            zipCode: '334100',
            child: null
          },
          {
            id: 361122,
            pid: 361100,
            type: 3,
            name: '广丰县',
            zipCode: '334600',
            child: null
          },
          {
            id: 361123,
            pid: 361100,
            type: 3,
            name: '玉山县',
            zipCode: '334700',
            child: null
          },
          {
            id: 361124,
            pid: 361100,
            type: 3,
            name: '铅山县',
            zipCode: '334500',
            child: null
          },
          {
            id: 361125,
            pid: 361100,
            type: 3,
            name: '横峰县',
            zipCode: '334300',
            child: null
          },
          {
            id: 361126,
            pid: 361100,
            type: 3,
            name: '弋阳县',
            zipCode: '334400',
            child: null
          },
          {
            id: 361127,
            pid: 361100,
            type: 3,
            name: '余干县',
            zipCode: '335100',
            child: null
          },
          {
            id: 361128,
            pid: 361100,
            type: 3,
            name: '鄱阳县',
            zipCode: '333100',
            child: null
          },
          {
            id: 361129,
            pid: 361100,
            type: 3,
            name: '万年县',
            zipCode: '335500',
            child: null
          },
          {
            id: 361130,
            pid: 361100,
            type: 3,
            name: '婺源县',
            zipCode: '333200',
            child: null
          },
          {
            id: 361181,
            pid: 361100,
            type: 3,
            name: '德兴市',
            zipCode: '334200',
            child: null
          }
        ]
      }
    ]
  },
  {
    id: 370000,
    pid: 100000,
    type: 1,
    name: '山东省',
    base: 'sd', //省份简称
    zipCode: '',
    child: [
      {
        id: 370100,
        pid: 370000,
        type: 2,
        name: '济南市',
        zipCode: '250001',
        child: [
          {
            id: 370102,
            pid: 370100,
            type: 3,
            name: '历下区',
            zipCode: '250014',
            child: null
          },
          {
            id: 370103,
            pid: 370100,
            type: 3,
            name: '市中区',
            zipCode: '250001',
            child: null
          },
          {
            id: 370104,
            pid: 370100,
            type: 3,
            name: '槐荫区',
            zipCode: '250117',
            child: null
          },
          {
            id: 370105,
            pid: 370100,
            type: 3,
            name: '天桥区',
            zipCode: '250031',
            child: null
          },
          {
            id: 370112,
            pid: 370100,
            type: 3,
            name: '历城区',
            zipCode: '250100',
            child: null
          },
          {
            id: 370113,
            pid: 370100,
            type: 3,
            name: '长清区',
            zipCode: '250300',
            child: null
          },
          {
            id: 370124,
            pid: 370100,
            type: 3,
            name: '平阴县',
            zipCode: '250400',
            child: null
          },
          {
            id: 370125,
            pid: 370100,
            type: 3,
            name: '济阳县',
            zipCode: '251400',
            child: null
          },
          {
            id: 370126,
            pid: 370100,
            type: 3,
            name: '商河县',
            zipCode: '251600',
            child: null
          },
          {
            id: 370181,
            pid: 370100,
            type: 3,
            name: '章丘市',
            zipCode: '250200',
            child: null
          }
        ]
      },
      {
        id: 370200,
        pid: 370000,
        type: 2,
        name: '青岛市',
        zipCode: '266001',
        child: [
          {
            id: 370202,
            pid: 370200,
            type: 3,
            name: '市南区',
            zipCode: '266001',
            child: null
          },
          {
            id: 370203,
            pid: 370200,
            type: 3,
            name: '市北区',
            zipCode: '266011',
            child: null
          },
          {
            id: 370211,
            pid: 370200,
            type: 3,
            name: '黄岛区',
            zipCode: '266500',
            child: null
          },
          {
            id: 370212,
            pid: 370200,
            type: 3,
            name: '崂山区',
            zipCode: '266100',
            child: null
          },
          {
            id: 370213,
            pid: 370200,
            type: 3,
            name: '李沧区',
            zipCode: '266021',
            child: null
          },
          {
            id: 370214,
            pid: 370200,
            type: 3,
            name: '城阳区',
            zipCode: '266041',
            child: null
          },
          {
            id: 370281,
            pid: 370200,
            type: 3,
            name: '胶州市',
            zipCode: '266300',
            child: null
          },
          {
            id: 370282,
            pid: 370200,
            type: 3,
            name: '即墨市',
            zipCode: '266200',
            child: null
          },
          {
            id: 370283,
            pid: 370200,
            type: 3,
            name: '平度市',
            zipCode: '266700',
            child: null
          },
          {
            id: 370285,
            pid: 370200,
            type: 3,
            name: '莱西市',
            zipCode: '266600',
            child: null
          },
          {
            id: 370286,
            pid: 370200,
            type: 3,
            name: '西海岸新区',
            zipCode: '266500',
            child: null
          }
        ]
      },
      {
        id: 370300,
        pid: 370000,
        type: 2,
        name: '淄博市',
        zipCode: '255039',
        child: [
          {
            id: 370302,
            pid: 370300,
            type: 3,
            name: '淄川区',
            zipCode: '255100',
            child: null
          },
          {
            id: 370303,
            pid: 370300,
            type: 3,
            name: '张店区',
            zipCode: '255022',
            child: null
          },
          {
            id: 370304,
            pid: 370300,
            type: 3,
            name: '博山区',
            zipCode: '255200',
            child: null
          },
          {
            id: 370305,
            pid: 370300,
            type: 3,
            name: '临淄区',
            zipCode: '255400',
            child: null
          },
          {
            id: 370306,
            pid: 370300,
            type: 3,
            name: '周村区',
            zipCode: '255300',
            child: null
          },
          {
            id: 370321,
            pid: 370300,
            type: 3,
            name: '桓台县',
            zipCode: '256400',
            child: null
          },
          {
            id: 370322,
            pid: 370300,
            type: 3,
            name: '高青县',
            zipCode: '256300',
            child: null
          },
          {
            id: 370323,
            pid: 370300,
            type: 3,
            name: '沂源县',
            zipCode: '256100',
            child: null
          }
        ]
      },
      {
        id: 370400,
        pid: 370000,
        type: 2,
        name: '枣庄市',
        zipCode: '277101',
        child: [
          {
            id: 370402,
            pid: 370400,
            type: 3,
            name: '市中区',
            zipCode: '277101',
            child: null
          },
          {
            id: 370403,
            pid: 370400,
            type: 3,
            name: '薛城区',
            zipCode: '277000',
            child: null
          },
          {
            id: 370404,
            pid: 370400,
            type: 3,
            name: '峄城区',
            zipCode: '277300',
            child: null
          },
          {
            id: 370405,
            pid: 370400,
            type: 3,
            name: '台儿庄区',
            zipCode: '277400',
            child: null
          },
          {
            id: 370406,
            pid: 370400,
            type: 3,
            name: '山亭区',
            zipCode: '277200',
            child: null
          },
          {
            id: 370481,
            pid: 370400,
            type: 3,
            name: '滕州市',
            zipCode: '277500',
            child: null
          }
        ]
      },
      {
        id: 370500,
        pid: 370000,
        type: 2,
        name: '东营市',
        zipCode: '257093',
        child: [
          {
            id: 370502,
            pid: 370500,
            type: 3,
            name: '东营区',
            zipCode: '257029',
            child: null
          },
          {
            id: 370503,
            pid: 370500,
            type: 3,
            name: '河口区',
            zipCode: '257200',
            child: null
          },
          {
            id: 370521,
            pid: 370500,
            type: 3,
            name: '垦利县',
            zipCode: '257500',
            child: null
          },
          {
            id: 370522,
            pid: 370500,
            type: 3,
            name: '利津县',
            zipCode: '257400',
            child: null
          },
          {
            id: 370523,
            pid: 370500,
            type: 3,
            name: '广饶县',
            zipCode: '257300',
            child: null
          }
        ]
      },
      {
        id: 370600,
        pid: 370000,
        type: 2,
        name: '烟台市',
        zipCode: '264010',
        child: [
          {
            id: 370602,
            pid: 370600,
            type: 3,
            name: '芝罘区',
            zipCode: '264001',
            child: null
          },
          {
            id: 370611,
            pid: 370600,
            type: 3,
            name: '福山区',
            zipCode: '265500',
            child: null
          },
          {
            id: 370612,
            pid: 370600,
            type: 3,
            name: '牟平区',
            zipCode: '264100',
            child: null
          },
          {
            id: 370613,
            pid: 370600,
            type: 3,
            name: '莱山区',
            zipCode: '264600',
            child: null
          },
          {
            id: 370634,
            pid: 370600,
            type: 3,
            name: '长岛县',
            zipCode: '265800',
            child: null
          },
          {
            id: 370681,
            pid: 370600,
            type: 3,
            name: '龙口市',
            zipCode: '265700',
            child: null
          },
          {
            id: 370682,
            pid: 370600,
            type: 3,
            name: '莱阳市',
            zipCode: '265200',
            child: null
          },
          {
            id: 370683,
            pid: 370600,
            type: 3,
            name: '莱州市',
            zipCode: '261400',
            child: null
          },
          {
            id: 370684,
            pid: 370600,
            type: 3,
            name: '蓬莱市',
            zipCode: '265600',
            child: null
          },
          {
            id: 370685,
            pid: 370600,
            type: 3,
            name: '招远市',
            zipCode: '265400',
            child: null
          },
          {
            id: 370686,
            pid: 370600,
            type: 3,
            name: '栖霞市',
            zipCode: '265300',
            child: null
          },
          {
            id: 370687,
            pid: 370600,
            type: 3,
            name: '海阳市',
            zipCode: '265100',
            child: null
          }
        ]
      },
      {
        id: 370700,
        pid: 370000,
        type: 2,
        name: '潍坊市',
        zipCode: '261041',
        child: [
          {
            id: 370702,
            pid: 370700,
            type: 3,
            name: '潍城区',
            zipCode: '261021',
            child: null
          },
          {
            id: 370703,
            pid: 370700,
            type: 3,
            name: '寒亭区',
            zipCode: '261100',
            child: null
          },
          {
            id: 370704,
            pid: 370700,
            type: 3,
            name: '坊子区',
            zipCode: '261200',
            child: null
          },
          {
            id: 370705,
            pid: 370700,
            type: 3,
            name: '奎文区',
            zipCode: '261031',
            child: null
          },
          {
            id: 370724,
            pid: 370700,
            type: 3,
            name: '临朐县',
            zipCode: '262600',
            child: null
          },
          {
            id: 370725,
            pid: 370700,
            type: 3,
            name: '昌乐县',
            zipCode: '262400',
            child: null
          },
          {
            id: 370781,
            pid: 370700,
            type: 3,
            name: '青州市',
            zipCode: '262500',
            child: null
          },
          {
            id: 370782,
            pid: 370700,
            type: 3,
            name: '诸城市',
            zipCode: '262200',
            child: null
          },
          {
            id: 370783,
            pid: 370700,
            type: 3,
            name: '寿光市',
            zipCode: '262700',
            child: null
          },
          {
            id: 370784,
            pid: 370700,
            type: 3,
            name: '安丘市',
            zipCode: '262100',
            child: null
          },
          {
            id: 370785,
            pid: 370700,
            type: 3,
            name: '高密市',
            zipCode: '261500',
            child: null
          },
          {
            id: 370786,
            pid: 370700,
            type: 3,
            name: '昌邑市',
            zipCode: '261300',
            child: null
          }
        ]
      },
      {
        id: 370800,
        pid: 370000,
        type: 2,
        name: '济宁市',
        zipCode: '272119',
        child: [
          {
            id: 370811,
            pid: 370800,
            type: 3,
            name: '任城区',
            zipCode: '272113',
            child: null
          },
          {
            id: 370812,
            pid: 370800,
            type: 3,
            name: '兖州区',
            zipCode: '272000',
            child: null
          },
          {
            id: 370826,
            pid: 370800,
            type: 3,
            name: '微山县',
            zipCode: '277600',
            child: null
          },
          {
            id: 370827,
            pid: 370800,
            type: 3,
            name: '鱼台县',
            zipCode: '272300',
            child: null
          },
          {
            id: 370828,
            pid: 370800,
            type: 3,
            name: '金乡县',
            zipCode: '272200',
            child: null
          },
          {
            id: 370829,
            pid: 370800,
            type: 3,
            name: '嘉祥县',
            zipCode: '272400',
            child: null
          },
          {
            id: 370830,
            pid: 370800,
            type: 3,
            name: '汶上县',
            zipCode: '272501',
            child: null
          },
          {
            id: 370831,
            pid: 370800,
            type: 3,
            name: '泗水县',
            zipCode: '273200',
            child: null
          },
          {
            id: 370832,
            pid: 370800,
            type: 3,
            name: '梁山县',
            zipCode: '272600',
            child: null
          },
          {
            id: 370881,
            pid: 370800,
            type: 3,
            name: '曲阜市',
            zipCode: '273100',
            child: null
          },
          {
            id: 370883,
            pid: 370800,
            type: 3,
            name: '邹城市',
            zipCode: '273500',
            child: null
          }
        ]
      },
      {
        id: 370900,
        pid: 370000,
        type: 2,
        name: '泰安市',
        zipCode: '271000',
        child: [
          {
            id: 370902,
            pid: 370900,
            type: 3,
            name: '泰山区',
            zipCode: '271000',
            child: null
          },
          {
            id: 370911,
            pid: 370900,
            type: 3,
            name: '岱岳区',
            zipCode: '271000',
            child: null
          },
          {
            id: 370921,
            pid: 370900,
            type: 3,
            name: '宁阳县',
            zipCode: '271400',
            child: null
          },
          {
            id: 370923,
            pid: 370900,
            type: 3,
            name: '东平县',
            zipCode: '271500',
            child: null
          },
          {
            id: 370982,
            pid: 370900,
            type: 3,
            name: '新泰市',
            zipCode: '271200',
            child: null
          },
          {
            id: 370983,
            pid: 370900,
            type: 3,
            name: '肥城市',
            zipCode: '271600',
            child: null
          }
        ]
      },
      {
        id: 371000,
        pid: 370000,
        type: 2,
        name: '威海市',
        zipCode: '264200',
        child: [
          {
            id: 371002,
            pid: 371000,
            type: 3,
            name: '环翠区',
            zipCode: '264200',
            child: null
          },
          {
            id: 371003,
            pid: 371000,
            type: 3,
            name: '文登区',
            zipCode: '266440',
            child: null
          },
          {
            id: 371082,
            pid: 371000,
            type: 3,
            name: '荣成市',
            zipCode: '264300',
            child: null
          },
          {
            id: 371083,
            pid: 371000,
            type: 3,
            name: '乳山市',
            zipCode: '264500',
            child: null
          }
        ]
      },
      {
        id: 371100,
        pid: 370000,
        type: 2,
        name: '日照市',
        zipCode: '276800',
        child: [
          {
            id: 371102,
            pid: 371100,
            type: 3,
            name: '东港区',
            zipCode: '276800',
            child: null
          },
          {
            id: 371103,
            pid: 371100,
            type: 3,
            name: '岚山区',
            zipCode: '276808',
            child: null
          },
          {
            id: 371121,
            pid: 371100,
            type: 3,
            name: '五莲县',
            zipCode: '262300',
            child: null
          },
          {
            id: 371122,
            pid: 371100,
            type: 3,
            name: '莒县',
            zipCode: '276500',
            child: null
          }
        ]
      },
      {
        id: 371200,
        pid: 370000,
        type: 2,
        name: '莱芜市',
        zipCode: '271100',
        child: [
          {
            id: 371202,
            pid: 371200,
            type: 3,
            name: '莱城区',
            zipCode: '271199',
            child: null
          },
          {
            id: 371203,
            pid: 371200,
            type: 3,
            name: '钢城区',
            zipCode: '271100',
            child: null
          }
        ]
      },
      {
        id: 371300,
        pid: 370000,
        type: 2,
        name: '临沂市',
        zipCode: '253000',
        child: [
          {
            id: 371302,
            pid: 371300,
            type: 3,
            name: '兰山区',
            zipCode: '276002',
            child: null
          },
          {
            id: 371311,
            pid: 371300,
            type: 3,
            name: '罗庄区',
            zipCode: '276022',
            child: null
          },
          {
            id: 371312,
            pid: 371300,
            type: 3,
            name: '河东区',
            zipCode: '276034',
            child: null
          },
          {
            id: 371321,
            pid: 371300,
            type: 3,
            name: '沂南县',
            zipCode: '276300',
            child: null
          },
          {
            id: 371322,
            pid: 371300,
            type: 3,
            name: '郯城县',
            zipCode: '276100',
            child: null
          },
          {
            id: 371323,
            pid: 371300,
            type: 3,
            name: '沂水县',
            zipCode: '276400',
            child: null
          },
          {
            id: 371324,
            pid: 371300,
            type: 3,
            name: '兰陵县',
            zipCode: '277700',
            child: null
          },
          {
            id: 371325,
            pid: 371300,
            type: 3,
            name: '费县',
            zipCode: '273400',
            child: null
          },
          {
            id: 371326,
            pid: 371300,
            type: 3,
            name: '平邑县',
            zipCode: '273300',
            child: null
          },
          {
            id: 371327,
            pid: 371300,
            type: 3,
            name: '莒南县',
            zipCode: '276600',
            child: null
          },
          {
            id: 371328,
            pid: 371300,
            type: 3,
            name: '蒙阴县',
            zipCode: '276200',
            child: null
          },
          {
            id: 371329,
            pid: 371300,
            type: 3,
            name: '临沭县',
            zipCode: '276700',
            child: null
          }
        ]
      },
      {
        id: 371400,
        pid: 370000,
        type: 2,
        name: '德州市',
        zipCode: '253000',
        child: [
          {
            id: 371402,
            pid: 371400,
            type: 3,
            name: '德城区',
            zipCode: '253012',
            child: null
          },
          {
            id: 371403,
            pid: 371400,
            type: 3,
            name: '陵城区',
            zipCode: '253500',
            child: null
          },
          {
            id: 371422,
            pid: 371400,
            type: 3,
            name: '宁津县',
            zipCode: '253400',
            child: null
          },
          {
            id: 371423,
            pid: 371400,
            type: 3,
            name: '庆云县',
            zipCode: '253700',
            child: null
          },
          {
            id: 371424,
            pid: 371400,
            type: 3,
            name: '临邑县',
            zipCode: '251500',
            child: null
          },
          {
            id: 371425,
            pid: 371400,
            type: 3,
            name: '齐河县',
            zipCode: '251100',
            child: null
          },
          {
            id: 371426,
            pid: 371400,
            type: 3,
            name: '平原县',
            zipCode: '253100',
            child: null
          },
          {
            id: 371427,
            pid: 371400,
            type: 3,
            name: '夏津县',
            zipCode: '253200',
            child: null
          },
          {
            id: 371428,
            pid: 371400,
            type: 3,
            name: '武城县',
            zipCode: '253300',
            child: null
          },
          {
            id: 371481,
            pid: 371400,
            type: 3,
            name: '乐陵市',
            zipCode: '253600',
            child: null
          },
          {
            id: 371482,
            pid: 371400,
            type: 3,
            name: '禹城市',
            zipCode: '251200',
            child: null
          }
        ]
      },
      {
        id: 371500,
        pid: 370000,
        type: 2,
        name: '聊城市',
        zipCode: '252052',
        child: [
          {
            id: 371502,
            pid: 371500,
            type: 3,
            name: '东昌府区',
            zipCode: '252000',
            child: null
          },
          {
            id: 371521,
            pid: 371500,
            type: 3,
            name: '阳谷县',
            zipCode: '252300',
            child: null
          },
          {
            id: 371522,
            pid: 371500,
            type: 3,
            name: '莘县',
            zipCode: '252400',
            child: null
          },
          {
            id: 371523,
            pid: 371500,
            type: 3,
            name: '茌平县',
            zipCode: '252100',
            child: null
          },
          {
            id: 371524,
            pid: 371500,
            type: 3,
            name: '东阿县',
            zipCode: '252200',
            child: null
          },
          {
            id: 371525,
            pid: 371500,
            type: 3,
            name: '冠县',
            zipCode: '252500',
            child: null
          },
          {
            id: 371526,
            pid: 371500,
            type: 3,
            name: '高唐县',
            zipCode: '252800',
            child: null
          },
          {
            id: 371581,
            pid: 371500,
            type: 3,
            name: '临清市',
            zipCode: '252600',
            child: null
          }
        ]
      },
      {
        id: 371600,
        pid: 370000,
        type: 2,
        name: '滨州市',
        zipCode: '256619',
        child: [
          {
            id: 371602,
            pid: 371600,
            type: 3,
            name: '滨城区',
            zipCode: '256613',
            child: null
          },
          {
            id: 371603,
            pid: 371600,
            type: 3,
            name: '沾化区',
            zipCode: '256800',
            child: null
          },
          {
            id: 371621,
            pid: 371600,
            type: 3,
            name: '惠民县',
            zipCode: '251700',
            child: null
          },
          {
            id: 371622,
            pid: 371600,
            type: 3,
            name: '阳信县',
            zipCode: '251800',
            child: null
          },
          {
            id: 371623,
            pid: 371600,
            type: 3,
            name: '无棣县',
            zipCode: '251900',
            child: null
          },
          {
            id: 371625,
            pid: 371600,
            type: 3,
            name: '博兴县',
            zipCode: '256500',
            child: null
          },
          {
            id: 371626,
            pid: 371600,
            type: 3,
            name: '邹平县',
            zipCode: '256200',
            child: null
          },
          {
            id: 371627,
            pid: 371600,
            type: 3,
            name: '北海新区',
            zipCode: '256200',
            child: null
          }
        ]
      },
      {
        id: 371700,
        pid: 370000,
        type: 2,
        name: '菏泽市',
        zipCode: '274020',
        child: [
          {
            id: 371702,
            pid: 371700,
            type: 3,
            name: '牡丹区',
            zipCode: '274009',
            child: null
          },
          {
            id: 371721,
            pid: 371700,
            type: 3,
            name: '曹县',
            zipCode: '274400',
            child: null
          },
          {
            id: 371722,
            pid: 371700,
            type: 3,
            name: '单县',
            zipCode: '273700',
            child: null
          },
          {
            id: 371723,
            pid: 371700,
            type: 3,
            name: '成武县',
            zipCode: '274200',
            child: null
          },
          {
            id: 371724,
            pid: 371700,
            type: 3,
            name: '巨野县',
            zipCode: '274900',
            child: null
          },
          {
            id: 371725,
            pid: 371700,
            type: 3,
            name: '郓城县',
            zipCode: '274700',
            child: null
          },
          {
            id: 371726,
            pid: 371700,
            type: 3,
            name: '鄄城县',
            zipCode: '274600',
            child: null
          },
          {
            id: 371727,
            pid: 371700,
            type: 3,
            name: '定陶县',
            zipCode: '274100',
            child: null
          },
          {
            id: 371728,
            pid: 371700,
            type: 3,
            name: '东明县',
            zipCode: '274500',
            child: null
          }
        ]
      }
    ]
  },
  {
    id: 410000,
    pid: 100000,
    type: 1,
    name: '河南省',
    base: 'hen', //省份简称
    zipCode: '',
    child: [
      {
        id: 410100,
        pid: 410000,
        type: 2,
        name: '郑州市',
        zipCode: '450000',
        child: [
          {
            id: 410102,
            pid: 410100,
            type: 3,
            name: '中原区',
            zipCode: '450007',
            child: null
          },
          {
            id: 410103,
            pid: 410100,
            type: 3,
            name: '二七区',
            zipCode: '450052',
            child: null
          },
          {
            id: 410104,
            pid: 410100,
            type: 3,
            name: '管城回族区',
            zipCode: '450000',
            child: null
          },
          {
            id: 410105,
            pid: 410100,
            type: 3,
            name: '金水区',
            zipCode: '450003',
            child: null
          },
          {
            id: 410106,
            pid: 410100,
            type: 3,
            name: '上街区',
            zipCode: '450041',
            child: null
          },
          {
            id: 410108,
            pid: 410100,
            type: 3,
            name: '惠济区',
            zipCode: '450053',
            child: null
          },
          {
            id: 410122,
            pid: 410100,
            type: 3,
            name: '中牟县',
            zipCode: '451450',
            child: null
          },
          {
            id: 410181,
            pid: 410100,
            type: 3,
            name: '巩义市',
            zipCode: '451200',
            child: null
          },
          {
            id: 410182,
            pid: 410100,
            type: 3,
            name: '荥阳市',
            zipCode: '450100',
            child: null
          },
          {
            id: 410183,
            pid: 410100,
            type: 3,
            name: '新密市',
            zipCode: '452300',
            child: null
          },
          {
            id: 410184,
            pid: 410100,
            type: 3,
            name: '新郑市',
            zipCode: '451100',
            child: null
          },
          {
            id: 410185,
            pid: 410100,
            type: 3,
            name: '登封市',
            zipCode: '452470',
            child: null
          }
        ]
      },
      {
        id: 410200,
        pid: 410000,
        type: 2,
        name: '开封市',
        zipCode: '475001',
        child: [
          {
            id: 410202,
            pid: 410200,
            type: 3,
            name: '龙亭区',
            zipCode: '475100',
            child: null
          },
          {
            id: 410203,
            pid: 410200,
            type: 3,
            name: '顺河回族区',
            zipCode: '475000',
            child: null
          },
          {
            id: 410204,
            pid: 410200,
            type: 3,
            name: '鼓楼区',
            zipCode: '475000',
            child: null
          },
          {
            id: 410205,
            pid: 410200,
            type: 3,
            name: '禹王台区',
            zipCode: '475003',
            child: null
          },
          {
            id: 410212,
            pid: 410200,
            type: 3,
            name: '祥符区',
            zipCode: '475100',
            child: null
          },
          {
            id: 410221,
            pid: 410200,
            type: 3,
            name: '杞县',
            zipCode: '475200',
            child: null
          },
          {
            id: 410222,
            pid: 410200,
            type: 3,
            name: '通许县',
            zipCode: '475400',
            child: null
          },
          {
            id: 410223,
            pid: 410200,
            type: 3,
            name: '尉氏县',
            zipCode: '475500',
            child: null
          },
          {
            id: 410225,
            pid: 410200,
            type: 3,
            name: '兰考县',
            zipCode: '475300',
            child: null
          }
        ]
      },
      {
        id: 410300,
        pid: 410000,
        type: 2,
        name: '洛阳市',
        zipCode: '471000',
        child: [
          {
            id: 410302,
            pid: 410300,
            type: 3,
            name: '老城区',
            zipCode: '471002',
            child: null
          },
          {
            id: 410303,
            pid: 410300,
            type: 3,
            name: '西工区',
            zipCode: '471000',
            child: null
          },
          {
            id: 410304,
            pid: 410300,
            type: 3,
            name: '瀍河回族区',
            zipCode: '471002',
            child: null
          },
          {
            id: 410305,
            pid: 410300,
            type: 3,
            name: '涧西区',
            zipCode: '471003',
            child: null
          },
          {
            id: 410306,
            pid: 410300,
            type: 3,
            name: '吉利区',
            zipCode: '471012',
            child: null
          },
          {
            id: 410311,
            pid: 410300,
            type: 3,
            name: '洛龙区',
            zipCode: '471000',
            child: null
          },
          {
            id: 410322,
            pid: 410300,
            type: 3,
            name: '孟津县',
            zipCode: '471100',
            child: null
          },
          {
            id: 410323,
            pid: 410300,
            type: 3,
            name: '新安县',
            zipCode: '471800',
            child: null
          },
          {
            id: 410324,
            pid: 410300,
            type: 3,
            name: '栾川县',
            zipCode: '471500',
            child: null
          },
          {
            id: 410325,
            pid: 410300,
            type: 3,
            name: '嵩县',
            zipCode: '471400',
            child: null
          },
          {
            id: 410326,
            pid: 410300,
            type: 3,
            name: '汝阳县',
            zipCode: '471200',
            child: null
          },
          {
            id: 410327,
            pid: 410300,
            type: 3,
            name: '宜阳县',
            zipCode: '471600',
            child: null
          },
          {
            id: 410328,
            pid: 410300,
            type: 3,
            name: '洛宁县',
            zipCode: '471700',
            child: null
          },
          {
            id: 410329,
            pid: 410300,
            type: 3,
            name: '伊川县',
            zipCode: '471300',
            child: null
          },
          {
            id: 410381,
            pid: 410300,
            type: 3,
            name: '偃师市',
            zipCode: '471900',
            child: null
          }
        ]
      },
      {
        id: 410400,
        pid: 410000,
        type: 2,
        name: '平顶山市',
        zipCode: '467000',
        child: [
          {
            id: 410402,
            pid: 410400,
            type: 3,
            name: '新华区',
            zipCode: '467002',
            child: null
          },
          {
            id: 410403,
            pid: 410400,
            type: 3,
            name: '卫东区',
            zipCode: '467021',
            child: null
          },
          {
            id: 410404,
            pid: 410400,
            type: 3,
            name: '石龙区',
            zipCode: '467045',
            child: null
          },
          {
            id: 410411,
            pid: 410400,
            type: 3,
            name: '湛河区',
            zipCode: '467000',
            child: null
          },
          {
            id: 410421,
            pid: 410400,
            type: 3,
            name: '宝丰县',
            zipCode: '467400',
            child: null
          },
          {
            id: 410422,
            pid: 410400,
            type: 3,
            name: '叶县',
            zipCode: '467200',
            child: null
          },
          {
            id: 410423,
            pid: 410400,
            type: 3,
            name: '鲁山县',
            zipCode: '467300',
            child: null
          },
          {
            id: 410425,
            pid: 410400,
            type: 3,
            name: '郏县',
            zipCode: '467100',
            child: null
          },
          {
            id: 410481,
            pid: 410400,
            type: 3,
            name: '舞钢市',
            zipCode: '462500',
            child: null
          },
          {
            id: 410482,
            pid: 410400,
            type: 3,
            name: '汝州市',
            zipCode: '467500',
            child: null
          }
        ]
      },
      {
        id: 410500,
        pid: 410000,
        type: 2,
        name: '安阳市',
        zipCode: '455000',
        child: [
          {
            id: 410502,
            pid: 410500,
            type: 3,
            name: '文峰区',
            zipCode: '455000',
            child: null
          },
          {
            id: 410503,
            pid: 410500,
            type: 3,
            name: '北关区',
            zipCode: '455001',
            child: null
          },
          {
            id: 410505,
            pid: 410500,
            type: 3,
            name: '殷都区',
            zipCode: '455004',
            child: null
          },
          {
            id: 410506,
            pid: 410500,
            type: 3,
            name: '龙安区',
            zipCode: '455001',
            child: null
          },
          {
            id: 410522,
            pid: 410500,
            type: 3,
            name: '安阳县',
            zipCode: '455000',
            child: null
          },
          {
            id: 410523,
            pid: 410500,
            type: 3,
            name: '汤阴县',
            zipCode: '456150',
            child: null
          },
          {
            id: 410526,
            pid: 410500,
            type: 3,
            name: '滑县',
            zipCode: '456400',
            child: null
          },
          {
            id: 410527,
            pid: 410500,
            type: 3,
            name: '内黄县',
            zipCode: '456350',
            child: null
          },
          {
            id: 410581,
            pid: 410500,
            type: 3,
            name: '林州市',
            zipCode: '456550',
            child: null
          }
        ]
      },
      {
        id: 410600,
        pid: 410000,
        type: 2,
        name: '鹤壁市',
        zipCode: '458030',
        child: [
          {
            id: 410602,
            pid: 410600,
            type: 3,
            name: '鹤山区',
            zipCode: '458010',
            child: null
          },
          {
            id: 410603,
            pid: 410600,
            type: 3,
            name: '山城区',
            zipCode: '458000',
            child: null
          },
          {
            id: 410611,
            pid: 410600,
            type: 3,
            name: '淇滨区',
            zipCode: '458000',
            child: null
          },
          {
            id: 410621,
            pid: 410600,
            type: 3,
            name: '浚县',
            zipCode: '456250',
            child: null
          },
          {
            id: 410622,
            pid: 410600,
            type: 3,
            name: '淇县',
            zipCode: '456750',
            child: null
          }
        ]
      },
      {
        id: 410700,
        pid: 410000,
        type: 2,
        name: '新乡市',
        zipCode: '453000',
        child: [
          {
            id: 410702,
            pid: 410700,
            type: 3,
            name: '红旗区',
            zipCode: '453000',
            child: null
          },
          {
            id: 410703,
            pid: 410700,
            type: 3,
            name: '卫滨区',
            zipCode: '453000',
            child: null
          },
          {
            id: 410704,
            pid: 410700,
            type: 3,
            name: '凤泉区',
            zipCode: '453011',
            child: null
          },
          {
            id: 410711,
            pid: 410700,
            type: 3,
            name: '牧野区',
            zipCode: '453002',
            child: null
          },
          {
            id: 410721,
            pid: 410700,
            type: 3,
            name: '新乡县',
            zipCode: '453700',
            child: null
          },
          {
            id: 410724,
            pid: 410700,
            type: 3,
            name: '获嘉县',
            zipCode: '453800',
            child: null
          },
          {
            id: 410725,
            pid: 410700,
            type: 3,
            name: '原阳县',
            zipCode: '453500',
            child: null
          },
          {
            id: 410726,
            pid: 410700,
            type: 3,
            name: '延津县',
            zipCode: '453200',
            child: null
          },
          {
            id: 410727,
            pid: 410700,
            type: 3,
            name: '封丘县',
            zipCode: '453300',
            child: null
          },
          {
            id: 410728,
            pid: 410700,
            type: 3,
            name: '长垣县',
            zipCode: '453400',
            child: null
          },
          {
            id: 410781,
            pid: 410700,
            type: 3,
            name: '卫辉市',
            zipCode: '453100',
            child: null
          },
          {
            id: 410782,
            pid: 410700,
            type: 3,
            name: '辉县市',
            zipCode: '453600',
            child: null
          }
        ]
      },
      {
        id: 410800,
        pid: 410000,
        type: 2,
        name: '焦作市',
        zipCode: '454002',
        child: [
          {
            id: 410802,
            pid: 410800,
            type: 3,
            name: '解放区',
            zipCode: '454000',
            child: null
          },
          {
            id: 410803,
            pid: 410800,
            type: 3,
            name: '中站区',
            zipCode: '454191',
            child: null
          },
          {
            id: 410804,
            pid: 410800,
            type: 3,
            name: '马村区',
            zipCode: '454171',
            child: null
          },
          {
            id: 410811,
            pid: 410800,
            type: 3,
            name: '山阳区',
            zipCode: '454002',
            child: null
          },
          {
            id: 410821,
            pid: 410800,
            type: 3,
            name: '修武县',
            zipCode: '454350',
            child: null
          },
          {
            id: 410822,
            pid: 410800,
            type: 3,
            name: '博爱县',
            zipCode: '454450',
            child: null
          },
          {
            id: 410823,
            pid: 410800,
            type: 3,
            name: '武陟县',
            zipCode: '454950',
            child: null
          },
          {
            id: 410825,
            pid: 410800,
            type: 3,
            name: '温县',
            zipCode: '454850',
            child: null
          },
          {
            id: 410882,
            pid: 410800,
            type: 3,
            name: '沁阳市',
            zipCode: '454550',
            child: null
          },
          {
            id: 410883,
            pid: 410800,
            type: 3,
            name: '孟州市',
            zipCode: '454750',
            child: null
          }
        ]
      },
      {
        id: 410900,
        pid: 410000,
        type: 2,
        name: '濮阳市',
        zipCode: '457000',
        child: [
          {
            id: 410902,
            pid: 410900,
            type: 3,
            name: '华龙区',
            zipCode: '457001',
            child: null
          },
          {
            id: 410922,
            pid: 410900,
            type: 3,
            name: '清丰县',
            zipCode: '457300',
            child: null
          },
          {
            id: 410923,
            pid: 410900,
            type: 3,
            name: '南乐县',
            zipCode: '457400',
            child: null
          },
          {
            id: 410926,
            pid: 410900,
            type: 3,
            name: '范县',
            zipCode: '457500',
            child: null
          },
          {
            id: 410927,
            pid: 410900,
            type: 3,
            name: '台前县',
            zipCode: '457600',
            child: null
          },
          {
            id: 410928,
            pid: 410900,
            type: 3,
            name: '濮阳县',
            zipCode: '457100',
            child: null
          }
        ]
      },
      {
        id: 411000,
        pid: 410000,
        type: 2,
        name: '许昌市',
        zipCode: '461000',
        child: [
          {
            id: 411002,
            pid: 411000,
            type: 3,
            name: '魏都区',
            zipCode: '461000',
            child: null
          },
          {
            id: 411023,
            pid: 411000,
            type: 3,
            name: '许昌县',
            zipCode: '461100',
            child: null
          },
          {
            id: 411024,
            pid: 411000,
            type: 3,
            name: '鄢陵县',
            zipCode: '461200',
            child: null
          },
          {
            id: 411025,
            pid: 411000,
            type: 3,
            name: '襄城县',
            zipCode: '461700',
            child: null
          },
          {
            id: 411081,
            pid: 411000,
            type: 3,
            name: '禹州市',
            zipCode: '461670',
            child: null
          },
          {
            id: 411082,
            pid: 411000,
            type: 3,
            name: '长葛市',
            zipCode: '461500',
            child: null
          }
        ]
      },
      {
        id: 411100,
        pid: 410000,
        type: 2,
        name: '漯河市',
        zipCode: '462000',
        child: [
          {
            id: 411102,
            pid: 411100,
            type: 3,
            name: '源汇区',
            zipCode: '462000',
            child: null
          },
          {
            id: 411103,
            pid: 411100,
            type: 3,
            name: '郾城区',
            zipCode: '462300',
            child: null
          },
          {
            id: 411104,
            pid: 411100,
            type: 3,
            name: '召陵区',
            zipCode: '462300',
            child: null
          },
          {
            id: 411121,
            pid: 411100,
            type: 3,
            name: '舞阳县',
            zipCode: '462400',
            child: null
          },
          {
            id: 411122,
            pid: 411100,
            type: 3,
            name: '临颍县',
            zipCode: '462600',
            child: null
          }
        ]
      },
      {
        id: 411200,
        pid: 410000,
        type: 2,
        name: '三门峡市',
        zipCode: '472000',
        child: [
          {
            id: 411202,
            pid: 411200,
            type: 3,
            name: '湖滨区',
            zipCode: '472000',
            child: null
          },
          {
            id: 411221,
            pid: 411200,
            type: 3,
            name: '渑池县',
            zipCode: '472400',
            child: null
          },
          {
            id: 411222,
            pid: 411200,
            type: 3,
            name: '陕县',
            zipCode: '472100',
            child: null
          },
          {
            id: 411224,
            pid: 411200,
            type: 3,
            name: '卢氏县',
            zipCode: '472200',
            child: null
          },
          {
            id: 411281,
            pid: 411200,
            type: 3,
            name: '义马市',
            zipCode: '472300',
            child: null
          },
          {
            id: 411282,
            pid: 411200,
            type: 3,
            name: '灵宝市',
            zipCode: '472500',
            child: null
          }
        ]
      },
      {
        id: 411300,
        pid: 410000,
        type: 2,
        name: '南阳市',
        zipCode: '473002',
        child: [
          {
            id: 411302,
            pid: 411300,
            type: 3,
            name: '宛城区',
            zipCode: '473001',
            child: null
          },
          {
            id: 411303,
            pid: 411300,
            type: 3,
            name: '卧龙区',
            zipCode: '473003',
            child: null
          },
          {
            id: 411321,
            pid: 411300,
            type: 3,
            name: '南召县',
            zipCode: '474650',
            child: null
          },
          {
            id: 411322,
            pid: 411300,
            type: 3,
            name: '方城县',
            zipCode: '473200',
            child: null
          },
          {
            id: 411323,
            pid: 411300,
            type: 3,
            name: '西峡县',
            zipCode: '474550',
            child: null
          },
          {
            id: 411324,
            pid: 411300,
            type: 3,
            name: '镇平县',
            zipCode: '474250',
            child: null
          },
          {
            id: 411325,
            pid: 411300,
            type: 3,
            name: '内乡县',
            zipCode: '474350',
            child: null
          },
          {
            id: 411326,
            pid: 411300,
            type: 3,
            name: '淅川县',
            zipCode: '474450',
            child: null
          },
          {
            id: 411327,
            pid: 411300,
            type: 3,
            name: '社旗县',
            zipCode: '473300',
            child: null
          },
          {
            id: 411328,
            pid: 411300,
            type: 3,
            name: '唐河县',
            zipCode: '473400',
            child: null
          },
          {
            id: 411329,
            pid: 411300,
            type: 3,
            name: '新野县',
            zipCode: '473500',
            child: null
          },
          {
            id: 411330,
            pid: 411300,
            type: 3,
            name: '桐柏县',
            zipCode: '474750',
            child: null
          },
          {
            id: 411381,
            pid: 411300,
            type: 3,
            name: '邓州市',
            zipCode: '474150',
            child: null
          }
        ]
      },
      {
        id: 411400,
        pid: 410000,
        type: 2,
        name: '商丘市',
        zipCode: '476000',
        child: [
          {
            id: 411402,
            pid: 411400,
            type: 3,
            name: '梁园区',
            zipCode: '476000',
            child: null
          },
          {
            id: 411403,
            pid: 411400,
            type: 3,
            name: '睢阳区',
            zipCode: '476100',
            child: null
          },
          {
            id: 411421,
            pid: 411400,
            type: 3,
            name: '民权县',
            zipCode: '476800',
            child: null
          },
          {
            id: 411422,
            pid: 411400,
            type: 3,
            name: '睢县',
            zipCode: '476900',
            child: null
          },
          {
            id: 411423,
            pid: 411400,
            type: 3,
            name: '宁陵县',
            zipCode: '476700',
            child: null
          },
          {
            id: 411424,
            pid: 411400,
            type: 3,
            name: '柘城县',
            zipCode: '476200',
            child: null
          },
          {
            id: 411425,
            pid: 411400,
            type: 3,
            name: '虞城县',
            zipCode: '476300',
            child: null
          },
          {
            id: 411426,
            pid: 411400,
            type: 3,
            name: '夏邑县',
            zipCode: '476400',
            child: null
          },
          {
            id: 411481,
            pid: 411400,
            type: 3,
            name: '永城市',
            zipCode: '476600',
            child: null
          }
        ]
      },
      {
        id: 411500,
        pid: 410000,
        type: 2,
        name: '信阳市',
        zipCode: '464000',
        child: [
          {
            id: 411502,
            pid: 411500,
            type: 3,
            name: '浉河区',
            zipCode: '464000',
            child: null
          },
          {
            id: 411503,
            pid: 411500,
            type: 3,
            name: '平桥区',
            zipCode: '464100',
            child: null
          },
          {
            id: 411521,
            pid: 411500,
            type: 3,
            name: '罗山县',
            zipCode: '464200',
            child: null
          },
          {
            id: 411522,
            pid: 411500,
            type: 3,
            name: '光山县',
            zipCode: '465450',
            child: null
          },
          {
            id: 411523,
            pid: 411500,
            type: 3,
            name: '新县',
            zipCode: '465550',
            child: null
          },
          {
            id: 411524,
            pid: 411500,
            type: 3,
            name: '商城县',
            zipCode: '465350',
            child: null
          },
          {
            id: 411525,
            pid: 411500,
            type: 3,
            name: '固始县',
            zipCode: '465250',
            child: null
          },
          {
            id: 411526,
            pid: 411500,
            type: 3,
            name: '潢川县',
            zipCode: '465150',
            child: null
          },
          {
            id: 411527,
            pid: 411500,
            type: 3,
            name: '淮滨县',
            zipCode: '464400',
            child: null
          },
          {
            id: 411528,
            pid: 411500,
            type: 3,
            name: '息县',
            zipCode: '464300',
            child: null
          }
        ]
      },
      {
        id: 411600,
        pid: 410000,
        type: 2,
        name: '周口市',
        zipCode: '466000',
        child: [
          {
            id: 411602,
            pid: 411600,
            type: 3,
            name: '川汇区',
            zipCode: '466000',
            child: null
          },
          {
            id: 411621,
            pid: 411600,
            type: 3,
            name: '扶沟县',
            zipCode: '461300',
            child: null
          },
          {
            id: 411622,
            pid: 411600,
            type: 3,
            name: '西华县',
            zipCode: '466600',
            child: null
          },
          {
            id: 411623,
            pid: 411600,
            type: 3,
            name: '商水县',
            zipCode: '466100',
            child: null
          },
          {
            id: 411624,
            pid: 411600,
            type: 3,
            name: '沈丘县',
            zipCode: '466300',
            child: null
          },
          {
            id: 411625,
            pid: 411600,
            type: 3,
            name: '郸城县',
            zipCode: '477150',
            child: null
          },
          {
            id: 411626,
            pid: 411600,
            type: 3,
            name: '淮阳县',
            zipCode: '466700',
            child: null
          },
          {
            id: 411627,
            pid: 411600,
            type: 3,
            name: '太康县',
            zipCode: '461400',
            child: null
          },
          {
            id: 411628,
            pid: 411600,
            type: 3,
            name: '鹿邑县',
            zipCode: '477200',
            child: null
          },
          {
            id: 411681,
            pid: 411600,
            type: 3,
            name: '项城市',
            zipCode: '466200',
            child: null
          }
        ]
      },
      {
        id: 411700,
        pid: 410000,
        type: 2,
        name: '驻马店市',
        zipCode: '463000',
        child: [
          {
            id: 411702,
            pid: 411700,
            type: 3,
            name: '驿城区',
            zipCode: '463000',
            child: null
          },
          {
            id: 411721,
            pid: 411700,
            type: 3,
            name: '西平县',
            zipCode: '463900',
            child: null
          },
          {
            id: 411722,
            pid: 411700,
            type: 3,
            name: '上蔡县',
            zipCode: '463800',
            child: null
          },
          {
            id: 411723,
            pid: 411700,
            type: 3,
            name: '平舆县',
            zipCode: '463400',
            child: null
          },
          {
            id: 411724,
            pid: 411700,
            type: 3,
            name: '正阳县',
            zipCode: '463600',
            child: null
          },
          {
            id: 411725,
            pid: 411700,
            type: 3,
            name: '确山县',
            zipCode: '463200',
            child: null
          },
          {
            id: 411726,
            pid: 411700,
            type: 3,
            name: '泌阳县',
            zipCode: '463700',
            child: null
          },
          {
            id: 411727,
            pid: 411700,
            type: 3,
            name: '汝南县',
            zipCode: '463300',
            child: null
          },
          {
            id: 411728,
            pid: 411700,
            type: 3,
            name: '遂平县',
            zipCode: '463100',
            child: null
          },
          {
            id: 411729,
            pid: 411700,
            type: 3,
            name: '新蔡县',
            zipCode: '463500',
            child: null
          }
        ]
      },
      {
        id: 419000,
        pid: 410000,
        type: 2,
        name: '直辖县级',
        zipCode: '',
        child: [
          {
            id: 419001,
            pid: 419000,
            type: 3,
            name: '济源市',
            zipCode: '454650',
            child: null
          }
        ]
      }
    ]
  },
  {
    id: 420000,
    pid: 100000,
    type: 1,
    name: '湖北省',
    base: 'hub', //省份简称
    zipCode: '',
    child: [
      {
        id: 420100,
        pid: 420000,
        type: 2,
        name: '武汉市',
        zipCode: '430014',
        child: [
          {
            id: 420102,
            pid: 420100,
            type: 3,
            name: '江岸区',
            zipCode: '430014',
            child: null
          },
          {
            id: 420103,
            pid: 420100,
            type: 3,
            name: '江汉区',
            zipCode: '430021',
            child: null
          },
          {
            id: 420104,
            pid: 420100,
            type: 3,
            name: '硚口区',
            zipCode: '430033',
            child: null
          },
          {
            id: 420105,
            pid: 420100,
            type: 3,
            name: '汉阳区',
            zipCode: '430050',
            child: null
          },
          {
            id: 420106,
            pid: 420100,
            type: 3,
            name: '武昌区',
            zipCode: '430061',
            child: null
          },
          {
            id: 420107,
            pid: 420100,
            type: 3,
            name: '青山区',
            zipCode: '430080',
            child: null
          },
          {
            id: 420111,
            pid: 420100,
            type: 3,
            name: '洪山区',
            zipCode: '430070',
            child: null
          },
          {
            id: 420112,
            pid: 420100,
            type: 3,
            name: '东西湖区',
            zipCode: '430040',
            child: null
          },
          {
            id: 420113,
            pid: 420100,
            type: 3,
            name: '汉南区',
            zipCode: '430090',
            child: null
          },
          {
            id: 420114,
            pid: 420100,
            type: 3,
            name: '蔡甸区',
            zipCode: '430100',
            child: null
          },
          {
            id: 420115,
            pid: 420100,
            type: 3,
            name: '江夏区',
            zipCode: '430200',
            child: null
          },
          {
            id: 420116,
            pid: 420100,
            type: 3,
            name: '黄陂区',
            zipCode: '432200',
            child: null
          },
          {
            id: 420117,
            pid: 420100,
            type: 3,
            name: '新洲区',
            zipCode: '431400',
            child: null
          }
        ]
      },
      {
        id: 420200,
        pid: 420000,
        type: 2,
        name: '黄石市',
        zipCode: '435003',
        child: [
          {
            id: 420202,
            pid: 420200,
            type: 3,
            name: '黄石港区',
            zipCode: '435000',
            child: null
          },
          {
            id: 420203,
            pid: 420200,
            type: 3,
            name: '西塞山区',
            zipCode: '435001',
            child: null
          },
          {
            id: 420204,
            pid: 420200,
            type: 3,
            name: '下陆区',
            zipCode: '435005',
            child: null
          },
          {
            id: 420205,
            pid: 420200,
            type: 3,
            name: '铁山区',
            zipCode: '435006',
            child: null
          },
          {
            id: 420222,
            pid: 420200,
            type: 3,
            name: '阳新县',
            zipCode: '435200',
            child: null
          },
          {
            id: 420281,
            pid: 420200,
            type: 3,
            name: '大冶市',
            zipCode: '435100',
            child: null
          }
        ]
      },
      {
        id: 420300,
        pid: 420000,
        type: 2,
        name: '十堰市',
        zipCode: '442000',
        child: [
          {
            id: 420302,
            pid: 420300,
            type: 3,
            name: '茅箭区',
            zipCode: '442012',
            child: null
          },
          {
            id: 420303,
            pid: 420300,
            type: 3,
            name: '张湾区',
            zipCode: '442001',
            child: null
          },
          {
            id: 420304,
            pid: 420300,
            type: 3,
            name: '郧阳区',
            zipCode: '442500',
            child: null
          },
          {
            id: 420322,
            pid: 420300,
            type: 3,
            name: '郧西县',
            zipCode: '442600',
            child: null
          },
          {
            id: 420323,
            pid: 420300,
            type: 3,
            name: '竹山县',
            zipCode: '442200',
            child: null
          },
          {
            id: 420324,
            pid: 420300,
            type: 3,
            name: '竹溪县',
            zipCode: '442300',
            child: null
          },
          {
            id: 420325,
            pid: 420300,
            type: 3,
            name: '房县',
            zipCode: '442100',
            child: null
          },
          {
            id: 420381,
            pid: 420300,
            type: 3,
            name: '丹江口市',
            zipCode: '442700',
            child: null
          }
        ]
      },
      {
        id: 420500,
        pid: 420000,
        type: 2,
        name: '宜昌市',
        zipCode: '443000',
        child: [
          {
            id: 420502,
            pid: 420500,
            type: 3,
            name: '西陵区',
            zipCode: '443000',
            child: null
          },
          {
            id: 420503,
            pid: 420500,
            type: 3,
            name: '伍家岗区',
            zipCode: '443001',
            child: null
          },
          {
            id: 420504,
            pid: 420500,
            type: 3,
            name: '点军区',
            zipCode: '443006',
            child: null
          },
          {
            id: 420505,
            pid: 420500,
            type: 3,
            name: '猇亭区',
            zipCode: '443007',
            child: null
          },
          {
            id: 420506,
            pid: 420500,
            type: 3,
            name: '夷陵区',
            zipCode: '443100',
            child: null
          },
          {
            id: 420525,
            pid: 420500,
            type: 3,
            name: '远安县',
            zipCode: '444200',
            child: null
          },
          {
            id: 420526,
            pid: 420500,
            type: 3,
            name: '兴山县',
            zipCode: '443711',
            child: null
          },
          {
            id: 420527,
            pid: 420500,
            type: 3,
            name: '秭归县',
            zipCode: '443600',
            child: null
          },
          {
            id: 420528,
            pid: 420500,
            type: 3,
            name: '长阳土家族自治县',
            zipCode: '443500',
            child: null
          },
          {
            id: 420529,
            pid: 420500,
            type: 3,
            name: '五峰土家族自治县',
            zipCode: '443413',
            child: null
          },
          {
            id: 420581,
            pid: 420500,
            type: 3,
            name: '宜都市',
            zipCode: '443300',
            child: null
          },
          {
            id: 420582,
            pid: 420500,
            type: 3,
            name: '当阳市',
            zipCode: '444100',
            child: null
          },
          {
            id: 420583,
            pid: 420500,
            type: 3,
            name: '枝江市',
            zipCode: '443200',
            child: null
          }
        ]
      },
      {
        id: 420600,
        pid: 420000,
        type: 2,
        name: '襄阳市',
        zipCode: '441021',
        child: [
          {
            id: 420602,
            pid: 420600,
            type: 3,
            name: '襄城区',
            zipCode: '441021',
            child: null
          },
          {
            id: 420606,
            pid: 420600,
            type: 3,
            name: '樊城区',
            zipCode: '441001',
            child: null
          },
          {
            id: 420607,
            pid: 420600,
            type: 3,
            name: '襄州区',
            zipCode: '441100',
            child: null
          },
          {
            id: 420624,
            pid: 420600,
            type: 3,
            name: '南漳县',
            zipCode: '441500',
            child: null
          },
          {
            id: 420625,
            pid: 420600,
            type: 3,
            name: '谷城县',
            zipCode: '441700',
            child: null
          },
          {
            id: 420626,
            pid: 420600,
            type: 3,
            name: '保康县',
            zipCode: '441600',
            child: null
          },
          {
            id: 420682,
            pid: 420600,
            type: 3,
            name: '老河口市',
            zipCode: '441800',
            child: null
          },
          {
            id: 420683,
            pid: 420600,
            type: 3,
            name: '枣阳市',
            zipCode: '441200',
            child: null
          },
          {
            id: 420684,
            pid: 420600,
            type: 3,
            name: '宜城市',
            zipCode: '441400',
            child: null
          }
        ]
      },
      {
        id: 420700,
        pid: 420000,
        type: 2,
        name: '鄂州市',
        zipCode: '436000',
        child: [
          {
            id: 420702,
            pid: 420700,
            type: 3,
            name: '梁子湖区',
            zipCode: '436064',
            child: null
          },
          {
            id: 420703,
            pid: 420700,
            type: 3,
            name: '华容区',
            zipCode: '436030',
            child: null
          },
          {
            id: 420704,
            pid: 420700,
            type: 3,
            name: '鄂城区',
            zipCode: '436000',
            child: null
          }
        ]
      },
      {
        id: 420800,
        pid: 420000,
        type: 2,
        name: '荆门市',
        zipCode: '448000',
        child: [
          {
            id: 420802,
            pid: 420800,
            type: 3,
            name: '东宝区',
            zipCode: '448004',
            child: null
          },
          {
            id: 420804,
            pid: 420800,
            type: 3,
            name: '掇刀区',
            zipCode: '448124',
            child: null
          },
          {
            id: 420821,
            pid: 420800,
            type: 3,
            name: '京山县',
            zipCode: '431800',
            child: null
          },
          {
            id: 420822,
            pid: 420800,
            type: 3,
            name: '沙洋县',
            zipCode: '448200',
            child: null
          },
          {
            id: 420881,
            pid: 420800,
            type: 3,
            name: '钟祥市',
            zipCode: '431900',
            child: null
          }
        ]
      },
      {
        id: 420900,
        pid: 420000,
        type: 2,
        name: '孝感市',
        zipCode: '432100',
        child: [
          {
            id: 420902,
            pid: 420900,
            type: 3,
            name: '孝南区',
            zipCode: '432100',
            child: null
          },
          {
            id: 420921,
            pid: 420900,
            type: 3,
            name: '孝昌县',
            zipCode: '432900',
            child: null
          },
          {
            id: 420922,
            pid: 420900,
            type: 3,
            name: '大悟县',
            zipCode: '432800',
            child: null
          },
          {
            id: 420923,
            pid: 420900,
            type: 3,
            name: '云梦县',
            zipCode: '432500',
            child: null
          },
          {
            id: 420981,
            pid: 420900,
            type: 3,
            name: '应城市',
            zipCode: '432400',
            child: null
          },
          {
            id: 420982,
            pid: 420900,
            type: 3,
            name: '安陆市',
            zipCode: '432600',
            child: null
          },
          {
            id: 420984,
            pid: 420900,
            type: 3,
            name: '汉川市',
            zipCode: '432300',
            child: null
          }
        ]
      },
      {
        id: 421000,
        pid: 420000,
        type: 2,
        name: '荆州市',
        zipCode: '434000',
        child: [
          {
            id: 421002,
            pid: 421000,
            type: 3,
            name: '沙市区',
            zipCode: '434000',
            child: null
          },
          {
            id: 421003,
            pid: 421000,
            type: 3,
            name: '荆州区',
            zipCode: '434020',
            child: null
          },
          {
            id: 421022,
            pid: 421000,
            type: 3,
            name: '公安县',
            zipCode: '434300',
            child: null
          },
          {
            id: 421023,
            pid: 421000,
            type: 3,
            name: '监利县',
            zipCode: '433300',
            child: null
          },
          {
            id: 421024,
            pid: 421000,
            type: 3,
            name: '江陵县',
            zipCode: '434101',
            child: null
          },
          {
            id: 421081,
            pid: 421000,
            type: 3,
            name: '石首市',
            zipCode: '434400',
            child: null
          },
          {
            id: 421083,
            pid: 421000,
            type: 3,
            name: '洪湖市',
            zipCode: '433200',
            child: null
          },
          {
            id: 421087,
            pid: 421000,
            type: 3,
            name: '松滋市',
            zipCode: '434200',
            child: null
          }
        ]
      },
      {
        id: 421100,
        pid: 420000,
        type: 2,
        name: '黄冈市',
        zipCode: '438000',
        child: [
          {
            id: 421102,
            pid: 421100,
            type: 3,
            name: '黄州区',
            zipCode: '438000',
            child: null
          },
          {
            id: 421121,
            pid: 421100,
            type: 3,
            name: '团风县',
            zipCode: '438800',
            child: null
          },
          {
            id: 421122,
            pid: 421100,
            type: 3,
            name: '红安县',
            zipCode: '438401',
            child: null
          },
          {
            id: 421123,
            pid: 421100,
            type: 3,
            name: '罗田县',
            zipCode: '438600',
            child: null
          },
          {
            id: 421124,
            pid: 421100,
            type: 3,
            name: '英山县',
            zipCode: '438700',
            child: null
          },
          {
            id: 421125,
            pid: 421100,
            type: 3,
            name: '浠水县',
            zipCode: '438200',
            child: null
          },
          {
            id: 421126,
            pid: 421100,
            type: 3,
            name: '蕲春县',
            zipCode: '435300',
            child: null
          },
          {
            id: 421127,
            pid: 421100,
            type: 3,
            name: '黄梅县',
            zipCode: '435500',
            child: null
          },
          {
            id: 421181,
            pid: 421100,
            type: 3,
            name: '麻城市',
            zipCode: '438300',
            child: null
          },
          {
            id: 421182,
            pid: 421100,
            type: 3,
            name: '武穴市',
            zipCode: '435400',
            child: null
          }
        ]
      },
      {
        id: 421200,
        pid: 420000,
        type: 2,
        name: '咸宁市',
        zipCode: '437000',
        child: [
          {
            id: 421202,
            pid: 421200,
            type: 3,
            name: '咸安区',
            zipCode: '437000',
            child: null
          },
          {
            id: 421221,
            pid: 421200,
            type: 3,
            name: '嘉鱼县',
            zipCode: '437200',
            child: null
          },
          {
            id: 421222,
            pid: 421200,
            type: 3,
            name: '通城县',
            zipCode: '437400',
            child: null
          },
          {
            id: 421223,
            pid: 421200,
            type: 3,
            name: '崇阳县',
            zipCode: '437500',
            child: null
          },
          {
            id: 421224,
            pid: 421200,
            type: 3,
            name: '通山县',
            zipCode: '437600',
            child: null
          },
          {
            id: 421281,
            pid: 421200,
            type: 3,
            name: '赤壁市',
            zipCode: '437300',
            child: null
          }
        ]
      },
      {
        id: 421300,
        pid: 420000,
        type: 2,
        name: '随州市',
        zipCode: '441300',
        child: [
          {
            id: 421303,
            pid: 421300,
            type: 3,
            name: '曾都区',
            zipCode: '441300',
            child: null
          },
          {
            id: 421321,
            pid: 421300,
            type: 3,
            name: '随县',
            zipCode: '441309',
            child: null
          },
          {
            id: 421381,
            pid: 421300,
            type: 3,
            name: '广水市',
            zipCode: '432700',
            child: null
          }
        ]
      },
      {
        id: 422800,
        pid: 420000,
        type: 2,
        name: '恩施土家族苗族自治州',
        zipCode: '445000',
        child: [
          {
            id: 422801,
            pid: 422800,
            type: 3,
            name: '恩施市',
            zipCode: '445000',
            child: null
          },
          {
            id: 422802,
            pid: 422800,
            type: 3,
            name: '利川市',
            zipCode: '445400',
            child: null
          },
          {
            id: 422822,
            pid: 422800,
            type: 3,
            name: '建始县',
            zipCode: '445300',
            child: null
          },
          {
            id: 422823,
            pid: 422800,
            type: 3,
            name: '巴东县',
            zipCode: '444300',
            child: null
          },
          {
            id: 422825,
            pid: 422800,
            type: 3,
            name: '宣恩县',
            zipCode: '445500',
            child: null
          },
          {
            id: 422826,
            pid: 422800,
            type: 3,
            name: '咸丰县',
            zipCode: '445600',
            child: null
          },
          {
            id: 422827,
            pid: 422800,
            type: 3,
            name: '来凤县',
            zipCode: '445700',
            child: null
          },
          {
            id: 422828,
            pid: 422800,
            type: 3,
            name: '鹤峰县',
            zipCode: '445800',
            child: null
          }
        ]
      },
      {
        id: 429000,
        pid: 420000,
        type: 2,
        name: '直辖县级',
        zipCode: '',
        child: [
          {
            id: 429004,
            pid: 429000,
            type: 3,
            name: '仙桃市',
            zipCode: '433000',
            child: null
          },
          {
            id: 429005,
            pid: 429000,
            type: 3,
            name: '潜江市',
            zipCode: '433100',
            child: null
          },
          {
            id: 429006,
            pid: 429000,
            type: 3,
            name: '天门市',
            zipCode: '431700',
            child: null
          },
          {
            id: 429021,
            pid: 429000,
            type: 3,
            name: '神农架林区',
            zipCode: '442400',
            child: null
          }
        ]
      }
    ]
  },
  {
    id: 430000,
    pid: 100000,
    type: 1,
    name: '湖南省',
    base: 'hun', //省份简称
    zipCode: '',
    child: [
      {
        id: 430100,
        pid: 430000,
        type: 2,
        name: '长沙市',
        zipCode: '410005',
        child: [
          {
            id: 430102,
            pid: 430100,
            type: 3,
            name: '芙蓉区',
            zipCode: '410011',
            child: null
          },
          {
            id: 430103,
            pid: 430100,
            type: 3,
            name: '天心区',
            zipCode: '410004',
            child: null
          },
          {
            id: 430104,
            pid: 430100,
            type: 3,
            name: '岳麓区',
            zipCode: '410013',
            child: null
          },
          {
            id: 430105,
            pid: 430100,
            type: 3,
            name: '开福区',
            zipCode: '410008',
            child: null
          },
          {
            id: 430111,
            pid: 430100,
            type: 3,
            name: '雨花区',
            zipCode: '410011',
            child: null
          },
          {
            id: 430112,
            pid: 430100,
            type: 3,
            name: '望城区',
            zipCode: '410200',
            child: null
          },
          {
            id: 430121,
            pid: 430100,
            type: 3,
            name: '长沙县',
            zipCode: '410100',
            child: null
          },
          {
            id: 430124,
            pid: 430100,
            type: 3,
            name: '宁乡县',
            zipCode: '410600',
            child: null
          },
          {
            id: 430181,
            pid: 430100,
            type: 3,
            name: '浏阳市',
            zipCode: '410300',
            child: null
          }
        ]
      },
      {
        id: 430200,
        pid: 430000,
        type: 2,
        name: '株洲市',
        zipCode: '412000',
        child: [
          {
            id: 430202,
            pid: 430200,
            type: 3,
            name: '荷塘区',
            zipCode: '412000',
            child: null
          },
          {
            id: 430203,
            pid: 430200,
            type: 3,
            name: '芦淞区',
            zipCode: '412000',
            child: null
          },
          {
            id: 430204,
            pid: 430200,
            type: 3,
            name: '石峰区',
            zipCode: '412005',
            child: null
          },
          {
            id: 430211,
            pid: 430200,
            type: 3,
            name: '天元区',
            zipCode: '412007',
            child: null
          },
          {
            id: 430221,
            pid: 430200,
            type: 3,
            name: '株洲县',
            zipCode: '412100',
            child: null
          },
          {
            id: 430223,
            pid: 430200,
            type: 3,
            name: '攸县',
            zipCode: '412300',
            child: null
          },
          {
            id: 430224,
            pid: 430200,
            type: 3,
            name: '茶陵县',
            zipCode: '412400',
            child: null
          },
          {
            id: 430225,
            pid: 430200,
            type: 3,
            name: '炎陵县',
            zipCode: '412500',
            child: null
          },
          {
            id: 430281,
            pid: 430200,
            type: 3,
            name: '醴陵市',
            zipCode: '412200',
            child: null
          }
        ]
      },
      {
        id: 430300,
        pid: 430000,
        type: 2,
        name: '湘潭市',
        zipCode: '411100',
        child: [
          {
            id: 430302,
            pid: 430300,
            type: 3,
            name: '雨湖区',
            zipCode: '411100',
            child: null
          },
          {
            id: 430304,
            pid: 430300,
            type: 3,
            name: '岳塘区',
            zipCode: '411101',
            child: null
          },
          {
            id: 430321,
            pid: 430300,
            type: 3,
            name: '湘潭县',
            zipCode: '411228',
            child: null
          },
          {
            id: 430381,
            pid: 430300,
            type: 3,
            name: '湘乡市',
            zipCode: '411400',
            child: null
          },
          {
            id: 430382,
            pid: 430300,
            type: 3,
            name: '韶山市',
            zipCode: '411300',
            child: null
          }
        ]
      },
      {
        id: 430400,
        pid: 430000,
        type: 2,
        name: '衡阳市',
        zipCode: '421001',
        child: [
          {
            id: 430405,
            pid: 430400,
            type: 3,
            name: '珠晖区',
            zipCode: '421002',
            child: null
          },
          {
            id: 430406,
            pid: 430400,
            type: 3,
            name: '雁峰区',
            zipCode: '421001',
            child: null
          },
          {
            id: 430407,
            pid: 430400,
            type: 3,
            name: '石鼓区',
            zipCode: '421005',
            child: null
          },
          {
            id: 430408,
            pid: 430400,
            type: 3,
            name: '蒸湘区',
            zipCode: '421001',
            child: null
          },
          {
            id: 430412,
            pid: 430400,
            type: 3,
            name: '南岳区',
            zipCode: '421900',
            child: null
          },
          {
            id: 430421,
            pid: 430400,
            type: 3,
            name: '衡阳县',
            zipCode: '421200',
            child: null
          },
          {
            id: 430422,
            pid: 430400,
            type: 3,
            name: '衡南县',
            zipCode: '421131',
            child: null
          },
          {
            id: 430423,
            pid: 430400,
            type: 3,
            name: '衡山县',
            zipCode: '421300',
            child: null
          },
          {
            id: 430424,
            pid: 430400,
            type: 3,
            name: '衡东县',
            zipCode: '421400',
            child: null
          },
          {
            id: 430426,
            pid: 430400,
            type: 3,
            name: '祁东县',
            zipCode: '421600',
            child: null
          },
          {
            id: 430481,
            pid: 430400,
            type: 3,
            name: '耒阳市',
            zipCode: '421800',
            child: null
          },
          {
            id: 430482,
            pid: 430400,
            type: 3,
            name: '常宁市',
            zipCode: '421500',
            child: null
          }
        ]
      },
      {
        id: 430500,
        pid: 430000,
        type: 2,
        name: '邵阳市',
        zipCode: '422000',
        child: [
          {
            id: 430502,
            pid: 430500,
            type: 3,
            name: '双清区',
            zipCode: '422001',
            child: null
          },
          {
            id: 430503,
            pid: 430500,
            type: 3,
            name: '大祥区',
            zipCode: '422000',
            child: null
          },
          {
            id: 430511,
            pid: 430500,
            type: 3,
            name: '北塔区',
            zipCode: '422007',
            child: null
          },
          {
            id: 430521,
            pid: 430500,
            type: 3,
            name: '邵东县',
            zipCode: '422800',
            child: null
          },
          {
            id: 430522,
            pid: 430500,
            type: 3,
            name: '新邵县',
            zipCode: '422900',
            child: null
          },
          {
            id: 430523,
            pid: 430500,
            type: 3,
            name: '邵阳县',
            zipCode: '422100',
            child: null
          },
          {
            id: 430524,
            pid: 430500,
            type: 3,
            name: '隆回县',
            zipCode: '422200',
            child: null
          },
          {
            id: 430525,
            pid: 430500,
            type: 3,
            name: '洞口县',
            zipCode: '422300',
            child: null
          },
          {
            id: 430527,
            pid: 430500,
            type: 3,
            name: '绥宁县',
            zipCode: '422600',
            child: null
          },
          {
            id: 430528,
            pid: 430500,
            type: 3,
            name: '新宁县',
            zipCode: '422700',
            child: null
          },
          {
            id: 430529,
            pid: 430500,
            type: 3,
            name: '城步苗族自治县',
            zipCode: '422500',
            child: null
          },
          {
            id: 430581,
            pid: 430500,
            type: 3,
            name: '武冈市',
            zipCode: '422400',
            child: null
          }
        ]
      },
      {
        id: 430600,
        pid: 430000,
        type: 2,
        name: '岳阳市',
        zipCode: '414000',
        child: [
          {
            id: 430602,
            pid: 430600,
            type: 3,
            name: '岳阳楼区',
            zipCode: '414000',
            child: null
          },
          {
            id: 430603,
            pid: 430600,
            type: 3,
            name: '云溪区',
            zipCode: '414009',
            child: null
          },
          {
            id: 430611,
            pid: 430600,
            type: 3,
            name: '君山区',
            zipCode: '414005',
            child: null
          },
          {
            id: 430621,
            pid: 430600,
            type: 3,
            name: '岳阳县',
            zipCode: '414100',
            child: null
          },
          {
            id: 430623,
            pid: 430600,
            type: 3,
            name: '华容县',
            zipCode: '414200',
            child: null
          },
          {
            id: 430624,
            pid: 430600,
            type: 3,
            name: '湘阴县',
            zipCode: '414600',
            child: null
          },
          {
            id: 430626,
            pid: 430600,
            type: 3,
            name: '平江县',
            zipCode: '414500',
            child: null
          },
          {
            id: 430681,
            pid: 430600,
            type: 3,
            name: '汨罗市',
            zipCode: '414400',
            child: null
          },
          {
            id: 430682,
            pid: 430600,
            type: 3,
            name: '临湘市',
            zipCode: '414300',
            child: null
          }
        ]
      },
      {
        id: 430700,
        pid: 430000,
        type: 2,
        name: '常德市',
        zipCode: '415000',
        child: [
          {
            id: 430702,
            pid: 430700,
            type: 3,
            name: '武陵区',
            zipCode: '415000',
            child: null
          },
          {
            id: 430703,
            pid: 430700,
            type: 3,
            name: '鼎城区',
            zipCode: '415101',
            child: null
          },
          {
            id: 430721,
            pid: 430700,
            type: 3,
            name: '安乡县',
            zipCode: '415600',
            child: null
          },
          {
            id: 430722,
            pid: 430700,
            type: 3,
            name: '汉寿县',
            zipCode: '415900',
            child: null
          },
          {
            id: 430723,
            pid: 430700,
            type: 3,
            name: '澧县',
            zipCode: '415500',
            child: null
          },
          {
            id: 430724,
            pid: 430700,
            type: 3,
            name: '临澧县',
            zipCode: '415200',
            child: null
          },
          {
            id: 430725,
            pid: 430700,
            type: 3,
            name: '桃源县',
            zipCode: '415700',
            child: null
          },
          {
            id: 430726,
            pid: 430700,
            type: 3,
            name: '石门县',
            zipCode: '415300',
            child: null
          },
          {
            id: 430781,
            pid: 430700,
            type: 3,
            name: '津市市',
            zipCode: '415400',
            child: null
          }
        ]
      },
      {
        id: 430800,
        pid: 430000,
        type: 2,
        name: '张家界市',
        zipCode: '427000',
        child: [
          {
            id: 430802,
            pid: 430800,
            type: 3,
            name: '永定区',
            zipCode: '427000',
            child: null
          },
          {
            id: 430811,
            pid: 430800,
            type: 3,
            name: '武陵源区',
            zipCode: '427400',
            child: null
          },
          {
            id: 430821,
            pid: 430800,
            type: 3,
            name: '慈利县',
            zipCode: '427200',
            child: null
          },
          {
            id: 430822,
            pid: 430800,
            type: 3,
            name: '桑植县',
            zipCode: '427100',
            child: null
          }
        ]
      },
      {
        id: 430900,
        pid: 430000,
        type: 2,
        name: '益阳市',
        zipCode: '413000',
        child: [
          {
            id: 430902,
            pid: 430900,
            type: 3,
            name: '资阳区',
            zipCode: '413001',
            child: null
          },
          {
            id: 430903,
            pid: 430900,
            type: 3,
            name: '赫山区',
            zipCode: '413002',
            child: null
          },
          {
            id: 430921,
            pid: 430900,
            type: 3,
            name: '南县',
            zipCode: '413200',
            child: null
          },
          {
            id: 430922,
            pid: 430900,
            type: 3,
            name: '桃江县',
            zipCode: '413400',
            child: null
          },
          {
            id: 430923,
            pid: 430900,
            type: 3,
            name: '安化县',
            zipCode: '413500',
            child: null
          },
          {
            id: 430981,
            pid: 430900,
            type: 3,
            name: '沅江市',
            zipCode: '413100',
            child: null
          }
        ]
      },
      {
        id: 431000,
        pid: 430000,
        type: 2,
        name: '郴州市',
        zipCode: '423000',
        child: [
          {
            id: 431002,
            pid: 431000,
            type: 3,
            name: '北湖区',
            zipCode: '423000',
            child: null
          },
          {
            id: 431003,
            pid: 431000,
            type: 3,
            name: '苏仙区',
            zipCode: '423000',
            child: null
          },
          {
            id: 431021,
            pid: 431000,
            type: 3,
            name: '桂阳县',
            zipCode: '424400',
            child: null
          },
          {
            id: 431022,
            pid: 431000,
            type: 3,
            name: '宜章县',
            zipCode: '424200',
            child: null
          },
          {
            id: 431023,
            pid: 431000,
            type: 3,
            name: '永兴县',
            zipCode: '423300',
            child: null
          },
          {
            id: 431024,
            pid: 431000,
            type: 3,
            name: '嘉禾县',
            zipCode: '424500',
            child: null
          },
          {
            id: 431025,
            pid: 431000,
            type: 3,
            name: '临武县',
            zipCode: '424300',
            child: null
          },
          {
            id: 431026,
            pid: 431000,
            type: 3,
            name: '汝城县',
            zipCode: '424100',
            child: null
          },
          {
            id: 431027,
            pid: 431000,
            type: 3,
            name: '桂东县',
            zipCode: '423500',
            child: null
          },
          {
            id: 431028,
            pid: 431000,
            type: 3,
            name: '安仁县',
            zipCode: '423600',
            child: null
          },
          {
            id: 431081,
            pid: 431000,
            type: 3,
            name: '资兴市',
            zipCode: '423400',
            child: null
          }
        ]
      },
      {
        id: 431100,
        pid: 430000,
        type: 2,
        name: '永州市',
        zipCode: '425000',
        child: [
          {
            id: 431102,
            pid: 431100,
            type: 3,
            name: '零陵区',
            zipCode: '425100',
            child: null
          },
          {
            id: 431103,
            pid: 431100,
            type: 3,
            name: '冷水滩区',
            zipCode: '425100',
            child: null
          },
          {
            id: 431121,
            pid: 431100,
            type: 3,
            name: '祁阳县',
            zipCode: '426100',
            child: null
          },
          {
            id: 431122,
            pid: 431100,
            type: 3,
            name: '东安县',
            zipCode: '425900',
            child: null
          },
          {
            id: 431123,
            pid: 431100,
            type: 3,
            name: '双牌县',
            zipCode: '425200',
            child: null
          },
          {
            id: 431124,
            pid: 431100,
            type: 3,
            name: '道县',
            zipCode: '425300',
            child: null
          },
          {
            id: 431125,
            pid: 431100,
            type: 3,
            name: '江永县',
            zipCode: '425400',
            child: null
          },
          {
            id: 431126,
            pid: 431100,
            type: 3,
            name: '宁远县',
            zipCode: '425600',
            child: null
          },
          {
            id: 431127,
            pid: 431100,
            type: 3,
            name: '蓝山县',
            zipCode: '425800',
            child: null
          },
          {
            id: 431128,
            pid: 431100,
            type: 3,
            name: '新田县',
            zipCode: '425700',
            child: null
          },
          {
            id: 431129,
            pid: 431100,
            type: 3,
            name: '江华瑶族自治县',
            zipCode: '425500',
            child: null
          }
        ]
      },
      {
        id: 431200,
        pid: 430000,
        type: 2,
        name: '怀化市',
        zipCode: '418000',
        child: [
          {
            id: 431202,
            pid: 431200,
            type: 3,
            name: '鹤城区',
            zipCode: '418000',
            child: null
          },
          {
            id: 431221,
            pid: 431200,
            type: 3,
            name: '中方县',
            zipCode: '418005',
            child: null
          },
          {
            id: 431222,
            pid: 431200,
            type: 3,
            name: '沅陵县',
            zipCode: '419600',
            child: null
          },
          {
            id: 431223,
            pid: 431200,
            type: 3,
            name: '辰溪县',
            zipCode: '419500',
            child: null
          },
          {
            id: 431224,
            pid: 431200,
            type: 3,
            name: '溆浦县',
            zipCode: '419300',
            child: null
          },
          {
            id: 431225,
            pid: 431200,
            type: 3,
            name: '会同县',
            zipCode: '418300',
            child: null
          },
          {
            id: 431226,
            pid: 431200,
            type: 3,
            name: '麻阳苗族自治县',
            zipCode: '419400',
            child: null
          },
          {
            id: 431227,
            pid: 431200,
            type: 3,
            name: '新晃侗族自治县',
            zipCode: '419200',
            child: null
          },
          {
            id: 431228,
            pid: 431200,
            type: 3,
            name: '芷江侗族自治县',
            zipCode: '419100',
            child: null
          },
          {
            id: 431229,
            pid: 431200,
            type: 3,
            name: '靖州苗族侗族自治县',
            zipCode: '418400',
            child: null
          },
          {
            id: 431230,
            pid: 431200,
            type: 3,
            name: '通道侗族自治县',
            zipCode: '418500',
            child: null
          },
          {
            id: 431281,
            pid: 431200,
            type: 3,
            name: '洪江市',
            zipCode: '418100',
            child: null
          }
        ]
      },
      {
        id: 431300,
        pid: 430000,
        type: 2,
        name: '娄底市',
        zipCode: '417000',
        child: [
          {
            id: 431302,
            pid: 431300,
            type: 3,
            name: '娄星区',
            zipCode: '417000',
            child: null
          },
          {
            id: 431321,
            pid: 431300,
            type: 3,
            name: '双峰县',
            zipCode: '417700',
            child: null
          },
          {
            id: 431322,
            pid: 431300,
            type: 3,
            name: '新化县',
            zipCode: '417600',
            child: null
          },
          {
            id: 431381,
            pid: 431300,
            type: 3,
            name: '冷水江市',
            zipCode: '417500',
            child: null
          },
          {
            id: 431382,
            pid: 431300,
            type: 3,
            name: '涟源市',
            zipCode: '417100',
            child: null
          }
        ]
      },
      {
        id: 433100,
        pid: 430000,
        type: 2,
        name: '湘西土家族苗族自治州',
        zipCode: '416000',
        child: [
          {
            id: 433101,
            pid: 433100,
            type: 3,
            name: '吉首市',
            zipCode: '416000',
            child: null
          },
          {
            id: 433122,
            pid: 433100,
            type: 3,
            name: '泸溪县',
            zipCode: '416100',
            child: null
          },
          {
            id: 433123,
            pid: 433100,
            type: 3,
            name: '凤凰县',
            zipCode: '416200',
            child: null
          },
          {
            id: 433124,
            pid: 433100,
            type: 3,
            name: '花垣县',
            zipCode: '416400',
            child: null
          },
          {
            id: 433125,
            pid: 433100,
            type: 3,
            name: '保靖县',
            zipCode: '416500',
            child: null
          },
          {
            id: 433126,
            pid: 433100,
            type: 3,
            name: '古丈县',
            zipCode: '416300',
            child: null
          },
          {
            id: 433127,
            pid: 433100,
            type: 3,
            name: '永顺县',
            zipCode: '416700',
            child: null
          },
          {
            id: 433130,
            pid: 433100,
            type: 3,
            name: '龙山县',
            zipCode: '416800',
            child: null
          }
        ]
      }
    ]
  },
  {
    id: 440000,
    pid: 100000,
    type: 1,
    name: '广东省',
    base: 'gd', //省份简称
    zipCode: '',
    child: [
      {
        id: 440100,
        pid: 440000,
        type: 2,
        name: '广州市',
        zipCode: '510032',
        child: [
          {
            id: 440103,
            pid: 440100,
            type: 3,
            name: '荔湾区',
            zipCode: '510170',
            child: null
          },
          {
            id: 440104,
            pid: 440100,
            type: 3,
            name: '越秀区',
            zipCode: '510030',
            child: null
          },
          {
            id: 440105,
            pid: 440100,
            type: 3,
            name: '海珠区',
            zipCode: '510300',
            child: null
          },
          {
            id: 440106,
            pid: 440100,
            type: 3,
            name: '天河区',
            zipCode: '510665',
            child: null
          },
          {
            id: 440111,
            pid: 440100,
            type: 3,
            name: '白云区',
            zipCode: '510405',
            child: null
          },
          {
            id: 440112,
            pid: 440100,
            type: 3,
            name: '黄埔区',
            zipCode: '510700',
            child: null
          },
          {
            id: 440113,
            pid: 440100,
            type: 3,
            name: '番禺区',
            zipCode: '511400',
            child: null
          },
          {
            id: 440114,
            pid: 440100,
            type: 3,
            name: '花都区',
            zipCode: '510800',
            child: null
          },
          {
            id: 440115,
            pid: 440100,
            type: 3,
            name: '南沙区',
            zipCode: '511458',
            child: null
          },
          {
            id: 440117,
            pid: 440100,
            type: 3,
            name: '从化区',
            zipCode: '510900',
            child: null
          },
          {
            id: 440118,
            pid: 440100,
            type: 3,
            name: '增城区',
            zipCode: '511300',
            child: null
          }
        ]
      },
      {
        id: 440200,
        pid: 440000,
        type: 2,
        name: '韶关市',
        zipCode: '512002',
        child: [
          {
            id: 440203,
            pid: 440200,
            type: 3,
            name: '武江区',
            zipCode: '512026',
            child: null
          },
          {
            id: 440204,
            pid: 440200,
            type: 3,
            name: '浈江区',
            zipCode: '512023',
            child: null
          },
          {
            id: 440205,
            pid: 440200,
            type: 3,
            name: '曲江区',
            zipCode: '512101',
            child: null
          },
          {
            id: 440222,
            pid: 440200,
            type: 3,
            name: '始兴县',
            zipCode: '512500',
            child: null
          },
          {
            id: 440224,
            pid: 440200,
            type: 3,
            name: '仁化县',
            zipCode: '512300',
            child: null
          },
          {
            id: 440229,
            pid: 440200,
            type: 3,
            name: '翁源县',
            zipCode: '512600',
            child: null
          },
          {
            id: 440232,
            pid: 440200,
            type: 3,
            name: '乳源瑶族自治县',
            zipCode: '512700',
            child: null
          },
          {
            id: 440233,
            pid: 440200,
            type: 3,
            name: '新丰县',
            zipCode: '511100',
            child: null
          },
          {
            id: 440281,
            pid: 440200,
            type: 3,
            name: '乐昌市',
            zipCode: '512200',
            child: null
          },
          {
            id: 440282,
            pid: 440200,
            type: 3,
            name: '南雄市',
            zipCode: '512400',
            child: null
          }
        ]
      },
      {
        id: 440300,
        pid: 440000,
        type: 2,
        name: '深圳市',
        zipCode: '518035',
        child: [
          {
            id: 440303,
            pid: 440300,
            type: 3,
            name: '罗湖区',
            zipCode: '518021',
            child: null
          },
          {
            id: 440304,
            pid: 440300,
            type: 3,
            name: '福田区',
            zipCode: '518048',
            child: null
          },
          {
            id: 440305,
            pid: 440300,
            type: 3,
            name: '南山区',
            zipCode: '518051',
            child: null
          },
          {
            id: 440306,
            pid: 440300,
            type: 3,
            name: '宝安区',
            zipCode: '518101',
            child: null
          },
          {
            id: 440307,
            pid: 440300,
            type: 3,
            name: '龙岗区',
            zipCode: '518172',
            child: null
          },
          {
            id: 440308,
            pid: 440300,
            type: 3,
            name: '盐田区',
            zipCode: '518081',
            child: null
          },
          {
            id: 440309,
            pid: 440300,
            type: 3,
            name: '光明新区',
            zipCode: '518100',
            child: null
          },
          {
            id: 440310,
            pid: 440300,
            type: 3,
            name: '坪山新区',
            zipCode: '518000',
            child: null
          },
          {
            id: 440311,
            pid: 440300,
            type: 3,
            name: '大鹏新区',
            zipCode: '518000',
            child: null
          },
          {
            id: 440312,
            pid: 440300,
            type: 3,
            name: '龙华新区',
            zipCode: '518100',
            child: null
          }
        ]
      },
      {
        id: 440400,
        pid: 440000,
        type: 2,
        name: '珠海市',
        zipCode: '519000',
        child: [
          {
            id: 440402,
            pid: 440400,
            type: 3,
            name: '香洲区',
            zipCode: '519000',
            child: null
          },
          {
            id: 440403,
            pid: 440400,
            type: 3,
            name: '斗门区',
            zipCode: '519110',
            child: null
          },
          {
            id: 440404,
            pid: 440400,
            type: 3,
            name: '金湾区',
            zipCode: '519040',
            child: null
          }
        ]
      },
      {
        id: 440500,
        pid: 440000,
        type: 2,
        name: '汕头市',
        zipCode: '515041',
        child: [
          {
            id: 440507,
            pid: 440500,
            type: 3,
            name: '龙湖区',
            zipCode: '515041',
            child: null
          },
          {
            id: 440511,
            pid: 440500,
            type: 3,
            name: '金平区',
            zipCode: '515041',
            child: null
          },
          {
            id: 440512,
            pid: 440500,
            type: 3,
            name: '濠江区',
            zipCode: '515071',
            child: null
          },
          {
            id: 440513,
            pid: 440500,
            type: 3,
            name: '潮阳区',
            zipCode: '515100',
            child: null
          },
          {
            id: 440514,
            pid: 440500,
            type: 3,
            name: '潮南区',
            zipCode: '515144',
            child: null
          },
          {
            id: 440515,
            pid: 440500,
            type: 3,
            name: '澄海区',
            zipCode: '515800',
            child: null
          },
          {
            id: 440523,
            pid: 440500,
            type: 3,
            name: '南澳县',
            zipCode: '515900',
            child: null
          }
        ]
      },
      {
        id: 440600,
        pid: 440000,
        type: 2,
        name: '佛山市',
        zipCode: '528000',
        child: [
          {
            id: 440604,
            pid: 440600,
            type: 3,
            name: '禅城区',
            zipCode: '528000',
            child: null
          },
          {
            id: 440605,
            pid: 440600,
            type: 3,
            name: '南海区',
            zipCode: '528251',
            child: null
          },
          {
            id: 440606,
            pid: 440600,
            type: 3,
            name: '顺德区',
            zipCode: '528300',
            child: null
          },
          {
            id: 440607,
            pid: 440600,
            type: 3,
            name: '三水区',
            zipCode: '528133',
            child: null
          },
          {
            id: 440608,
            pid: 440600,
            type: 3,
            name: '高明区',
            zipCode: '528500',
            child: null
          }
        ]
      },
      {
        id: 440700,
        pid: 440000,
        type: 2,
        name: '江门市',
        zipCode: '529000',
        child: [
          {
            id: 440703,
            pid: 440700,
            type: 3,
            name: '蓬江区',
            zipCode: '529000',
            child: null
          },
          {
            id: 440704,
            pid: 440700,
            type: 3,
            name: '江海区',
            zipCode: '529040',
            child: null
          },
          {
            id: 440705,
            pid: 440700,
            type: 3,
            name: '新会区',
            zipCode: '529100',
            child: null
          },
          {
            id: 440781,
            pid: 440700,
            type: 3,
            name: '台山市',
            zipCode: '529200',
            child: null
          },
          {
            id: 440783,
            pid: 440700,
            type: 3,
            name: '开平市',
            zipCode: '529337',
            child: null
          },
          {
            id: 440784,
            pid: 440700,
            type: 3,
            name: '鹤山市',
            zipCode: '529700',
            child: null
          },
          {
            id: 440785,
            pid: 440700,
            type: 3,
            name: '恩平市',
            zipCode: '529400',
            child: null
          }
        ]
      },
      {
        id: 440800,
        pid: 440000,
        type: 2,
        name: '湛江市',
        zipCode: '524047',
        child: [
          {
            id: 440802,
            pid: 440800,
            type: 3,
            name: '赤坎区',
            zipCode: '524033',
            child: null
          },
          {
            id: 440803,
            pid: 440800,
            type: 3,
            name: '霞山区',
            zipCode: '524011',
            child: null
          },
          {
            id: 440804,
            pid: 440800,
            type: 3,
            name: '坡头区',
            zipCode: '524057',
            child: null
          },
          {
            id: 440811,
            pid: 440800,
            type: 3,
            name: '麻章区',
            zipCode: '524094',
            child: null
          },
          {
            id: 440823,
            pid: 440800,
            type: 3,
            name: '遂溪县',
            zipCode: '524300',
            child: null
          },
          {
            id: 440825,
            pid: 440800,
            type: 3,
            name: '徐闻县',
            zipCode: '524100',
            child: null
          },
          {
            id: 440881,
            pid: 440800,
            type: 3,
            name: '廉江市',
            zipCode: '524400',
            child: null
          },
          {
            id: 440882,
            pid: 440800,
            type: 3,
            name: '雷州市',
            zipCode: '524200',
            child: null
          },
          {
            id: 440883,
            pid: 440800,
            type: 3,
            name: '吴川市',
            zipCode: '524500',
            child: null
          }
        ]
      },
      {
        id: 440900,
        pid: 440000,
        type: 2,
        name: '茂名市',
        zipCode: '525000',
        child: [
          {
            id: 440902,
            pid: 440900,
            type: 3,
            name: '茂南区',
            zipCode: '525000',
            child: null
          },
          {
            id: 440904,
            pid: 440900,
            type: 3,
            name: '电白区',
            zipCode: '525400',
            child: null
          },
          {
            id: 440981,
            pid: 440900,
            type: 3,
            name: '高州市',
            zipCode: '525200',
            child: null
          },
          {
            id: 440982,
            pid: 440900,
            type: 3,
            name: '化州市',
            zipCode: '525100',
            child: null
          },
          {
            id: 440983,
            pid: 440900,
            type: 3,
            name: '信宜市',
            zipCode: '525300',
            child: null
          }
        ]
      },
      {
        id: 441200,
        pid: 440000,
        type: 2,
        name: '肇庆市',
        zipCode: '526040',
        child: [
          {
            id: 441202,
            pid: 441200,
            type: 3,
            name: '端州区',
            zipCode: '526060',
            child: null
          },
          {
            id: 441203,
            pid: 441200,
            type: 3,
            name: '鼎湖区',
            zipCode: '526070',
            child: null
          },
          {
            id: 441223,
            pid: 441200,
            type: 3,
            name: '广宁县',
            zipCode: '526300',
            child: null
          },
          {
            id: 441224,
            pid: 441200,
            type: 3,
            name: '怀集县',
            zipCode: '526400',
            child: null
          },
          {
            id: 441225,
            pid: 441200,
            type: 3,
            name: '封开县',
            zipCode: '526500',
            child: null
          },
          {
            id: 441226,
            pid: 441200,
            type: 3,
            name: '德庆县',
            zipCode: '526600',
            child: null
          },
          {
            id: 441283,
            pid: 441200,
            type: 3,
            name: '高要市',
            zipCode: '526100',
            child: null
          },
          {
            id: 441284,
            pid: 441200,
            type: 3,
            name: '四会市',
            zipCode: '526200',
            child: null
          }
        ]
      },
      {
        id: 441300,
        pid: 440000,
        type: 2,
        name: '惠州市',
        zipCode: '516000',
        child: [
          {
            id: 441302,
            pid: 441300,
            type: 3,
            name: '惠城区',
            zipCode: '516008',
            child: null
          },
          {
            id: 441303,
            pid: 441300,
            type: 3,
            name: '惠阳区',
            zipCode: '516211',
            child: null
          },
          {
            id: 441322,
            pid: 441300,
            type: 3,
            name: '博罗县',
            zipCode: '516100',
            child: null
          },
          {
            id: 441323,
            pid: 441300,
            type: 3,
            name: '惠东县',
            zipCode: '516300',
            child: null
          },
          {
            id: 441324,
            pid: 441300,
            type: 3,
            name: '龙门县',
            zipCode: '516800',
            child: null
          }
        ]
      },
      {
        id: 441400,
        pid: 440000,
        type: 2,
        name: '梅州市',
        zipCode: '514021',
        child: [
          {
            id: 441402,
            pid: 441400,
            type: 3,
            name: '梅江区',
            zipCode: '514000',
            child: null
          },
          {
            id: 441403,
            pid: 441400,
            type: 3,
            name: '梅县区',
            zipCode: '514787',
            child: null
          },
          {
            id: 441422,
            pid: 441400,
            type: 3,
            name: '大埔县',
            zipCode: '514200',
            child: null
          },
          {
            id: 441423,
            pid: 441400,
            type: 3,
            name: '丰顺县',
            zipCode: '514300',
            child: null
          },
          {
            id: 441424,
            pid: 441400,
            type: 3,
            name: '五华县',
            zipCode: '514400',
            child: null
          },
          {
            id: 441426,
            pid: 441400,
            type: 3,
            name: '平远县',
            zipCode: '514600',
            child: null
          },
          {
            id: 441427,
            pid: 441400,
            type: 3,
            name: '蕉岭县',
            zipCode: '514100',
            child: null
          },
          {
            id: 441481,
            pid: 441400,
            type: 3,
            name: '兴宁市',
            zipCode: '514500',
            child: null
          }
        ]
      },
      {
        id: 441500,
        pid: 440000,
        type: 2,
        name: '汕尾市',
        zipCode: '516600',
        child: [
          {
            id: 441502,
            pid: 441500,
            type: 3,
            name: '城区',
            zipCode: '516600',
            child: null
          },
          {
            id: 441521,
            pid: 441500,
            type: 3,
            name: '海丰县',
            zipCode: '516400',
            child: null
          },
          {
            id: 441523,
            pid: 441500,
            type: 3,
            name: '陆河县',
            zipCode: '516700',
            child: null
          },
          {
            id: 441581,
            pid: 441500,
            type: 3,
            name: '陆丰市',
            zipCode: '516500',
            child: null
          }
        ]
      },
      {
        id: 441600,
        pid: 440000,
        type: 2,
        name: '河源市',
        zipCode: '517000',
        child: [
          {
            id: 441602,
            pid: 441600,
            type: 3,
            name: '源城区',
            zipCode: '517000',
            child: null
          },
          {
            id: 441621,
            pid: 441600,
            type: 3,
            name: '紫金县',
            zipCode: '517400',
            child: null
          },
          {
            id: 441622,
            pid: 441600,
            type: 3,
            name: '龙川县',
            zipCode: '517300',
            child: null
          },
          {
            id: 441623,
            pid: 441600,
            type: 3,
            name: '连平县',
            zipCode: '517100',
            child: null
          },
          {
            id: 441624,
            pid: 441600,
            type: 3,
            name: '和平县',
            zipCode: '517200',
            child: null
          },
          {
            id: 441625,
            pid: 441600,
            type: 3,
            name: '东源县',
            zipCode: '517583',
            child: null
          }
        ]
      },
      {
        id: 441700,
        pid: 440000,
        type: 2,
        name: '阳江市',
        zipCode: '529500',
        child: [
          {
            id: 441702,
            pid: 441700,
            type: 3,
            name: '江城区',
            zipCode: '529500',
            child: null
          },
          {
            id: 441704,
            pid: 441700,
            type: 3,
            name: '阳东区',
            zipCode: '529900',
            child: null
          },
          {
            id: 441721,
            pid: 441700,
            type: 3,
            name: '阳西县',
            zipCode: '529800',
            child: null
          },
          {
            id: 441781,
            pid: 441700,
            type: 3,
            name: '阳春市',
            zipCode: '529600',
            child: null
          }
        ]
      },
      {
        id: 441800,
        pid: 440000,
        type: 2,
        name: '清远市',
        zipCode: '511500',
        child: [
          {
            id: 441802,
            pid: 441800,
            type: 3,
            name: '清城区',
            zipCode: '511515',
            child: null
          },
          {
            id: 441803,
            pid: 441800,
            type: 3,
            name: '清新区',
            zipCode: '511810',
            child: null
          },
          {
            id: 441821,
            pid: 441800,
            type: 3,
            name: '佛冈县',
            zipCode: '511600',
            child: null
          },
          {
            id: 441823,
            pid: 441800,
            type: 3,
            name: '阳山县',
            zipCode: '513100',
            child: null
          },
          {
            id: 441825,
            pid: 441800,
            type: 3,
            name: '连山壮族瑶族自治县',
            zipCode: '513200',
            child: null
          },
          {
            id: 441826,
            pid: 441800,
            type: 3,
            name: '连南瑶族自治县',
            zipCode: '513300',
            child: null
          },
          {
            id: 441881,
            pid: 441800,
            type: 3,
            name: '英德市',
            zipCode: '513000',
            child: null
          },
          {
            id: 441882,
            pid: 441800,
            type: 3,
            name: '连州市',
            zipCode: '513400',
            child: null
          }
        ]
      },
      {
        id: 441900,
        pid: 440000,
        type: 2,
        name: '东莞市',
        zipCode: '523888',
        child: [
          {
            id: 441901,
            pid: 441900,
            type: 3,
            name: '莞城区',
            zipCode: '523128',
            child: null
          },
          {
            id: 441902,
            pid: 441900,
            type: 3,
            name: '南城区',
            zipCode: '523617',
            child: null
          },
          {
            id: 441904,
            pid: 441900,
            type: 3,
            name: '万江区',
            zipCode: '523039',
            child: null
          },
          {
            id: 441905,
            pid: 441900,
            type: 3,
            name: '石碣镇',
            zipCode: '523290',
            child: null
          },
          {
            id: 441906,
            pid: 441900,
            type: 3,
            name: '石龙镇',
            zipCode: '523326',
            child: null
          },
          {
            id: 441907,
            pid: 441900,
            type: 3,
            name: '茶山镇',
            zipCode: '523380',
            child: null
          },
          {
            id: 441908,
            pid: 441900,
            type: 3,
            name: '石排镇',
            zipCode: '523346',
            child: null
          },
          {
            id: 441909,
            pid: 441900,
            type: 3,
            name: '企石镇',
            zipCode: '523507',
            child: null
          },
          {
            id: 441910,
            pid: 441900,
            type: 3,
            name: '横沥镇',
            zipCode: '523471',
            child: null
          },
          {
            id: 441911,
            pid: 441900,
            type: 3,
            name: '桥头镇',
            zipCode: '523520',
            child: null
          },
          {
            id: 441912,
            pid: 441900,
            type: 3,
            name: '谢岗镇',
            zipCode: '523592',
            child: null
          },
          {
            id: 441913,
            pid: 441900,
            type: 3,
            name: '东坑镇',
            zipCode: '523451',
            child: null
          },
          {
            id: 441914,
            pid: 441900,
            type: 3,
            name: '常平镇',
            zipCode: '523560',
            child: null
          },
          {
            id: 441915,
            pid: 441900,
            type: 3,
            name: '寮步镇',
            zipCode: '523411',
            child: null
          },
          {
            id: 441916,
            pid: 441900,
            type: 3,
            name: '大朗镇',
            zipCode: '523770',
            child: null
          },
          {
            id: 441917,
            pid: 441900,
            type: 3,
            name: '麻涌镇',
            zipCode: '523143',
            child: null
          },
          {
            id: 441918,
            pid: 441900,
            type: 3,
            name: '中堂镇',
            zipCode: '523233',
            child: null
          },
          {
            id: 441919,
            pid: 441900,
            type: 3,
            name: '高埗镇',
            zipCode: '523282',
            child: null
          },
          {
            id: 441920,
            pid: 441900,
            type: 3,
            name: '樟木头镇',
            zipCode: '523619',
            child: null
          },
          {
            id: 441921,
            pid: 441900,
            type: 3,
            name: '大岭山镇',
            zipCode: '523835',
            child: null
          },
          {
            id: 441922,
            pid: 441900,
            type: 3,
            name: '望牛墩镇',
            zipCode: '523203',
            child: null
          },
          {
            id: 441923,
            pid: 441900,
            type: 3,
            name: '黄江镇',
            zipCode: '523755',
            child: null
          },
          {
            id: 441924,
            pid: 441900,
            type: 3,
            name: '洪梅镇',
            zipCode: '523163',
            child: null
          },
          {
            id: 441925,
            pid: 441900,
            type: 3,
            name: '清溪镇',
            zipCode: '523660',
            child: null
          },
          {
            id: 441926,
            pid: 441900,
            type: 3,
            name: '沙田镇',
            zipCode: '523988',
            child: null
          },
          {
            id: 441927,
            pid: 441900,
            type: 3,
            name: '道滘镇',
            zipCode: '523171',
            child: null
          },
          {
            id: 441928,
            pid: 441900,
            type: 3,
            name: '塘厦镇',
            zipCode: '523713',
            child: null
          },
          {
            id: 441929,
            pid: 441900,
            type: 3,
            name: '虎门镇',
            zipCode: '523932',
            child: null
          },
          {
            id: 441930,
            pid: 441900,
            type: 3,
            name: '厚街镇',
            zipCode: '523960',
            child: null
          },
          {
            id: 441931,
            pid: 441900,
            type: 3,
            name: '凤岗镇',
            zipCode: '523690',
            child: null
          },
          {
            id: 441932,
            pid: 441900,
            type: 3,
            name: '长安镇',
            zipCode: '523850',
            child: null
          }
        ]
      },
      {
        id: 442000,
        pid: 440000,
        type: 2,
        name: '中山市',
        zipCode: '528403',
        child: [
          {
            id: 442001,
            pid: 442000,
            type: 3,
            name: '石岐区',
            zipCode: '528400',
            child: null
          },
          {
            id: 442004,
            pid: 442000,
            type: 3,
            name: '南区',
            zipCode: '528400',
            child: null
          },
          {
            id: 442005,
            pid: 442000,
            type: 3,
            name: '五桂山区',
            zipCode: '528458',
            child: null
          },
          {
            id: 442006,
            pid: 442000,
            type: 3,
            name: '火炬开发区',
            zipCode: '528437',
            child: null
          },
          {
            id: 442007,
            pid: 442000,
            type: 3,
            name: '黄圃镇',
            zipCode: '528429',
            child: null
          },
          {
            id: 442008,
            pid: 442000,
            type: 3,
            name: '南头镇',
            zipCode: '528421',
            child: null
          },
          {
            id: 442009,
            pid: 442000,
            type: 3,
            name: '东凤镇',
            zipCode: '528425',
            child: null
          },
          {
            id: 442010,
            pid: 442000,
            type: 3,
            name: '阜沙镇',
            zipCode: '528434',
            child: null
          },
          {
            id: 442011,
            pid: 442000,
            type: 3,
            name: '小榄镇',
            zipCode: '528415',
            child: null
          },
          {
            id: 442012,
            pid: 442000,
            type: 3,
            name: '东升镇',
            zipCode: '528400',
            child: null
          },
          {
            id: 442013,
            pid: 442000,
            type: 3,
            name: '古镇镇',
            zipCode: '528422',
            child: null
          },
          {
            id: 442014,
            pid: 442000,
            type: 3,
            name: '横栏镇',
            zipCode: '528478',
            child: null
          },
          {
            id: 442015,
            pid: 442000,
            type: 3,
            name: '三角镇',
            zipCode: '528422',
            child: null
          },
          {
            id: 442016,
            pid: 442000,
            type: 3,
            name: '民众镇',
            zipCode: '528441',
            child: null
          },
          {
            id: 442017,
            pid: 442000,
            type: 3,
            name: '南朗镇',
            zipCode: '528454',
            child: null
          },
          {
            id: 442018,
            pid: 442000,
            type: 3,
            name: '港口镇',
            zipCode: '528447',
            child: null
          },
          {
            id: 442019,
            pid: 442000,
            type: 3,
            name: '大涌镇',
            zipCode: '528476',
            child: null
          },
          {
            id: 442020,
            pid: 442000,
            type: 3,
            name: '沙溪镇',
            zipCode: '528471',
            child: null
          },
          {
            id: 442021,
            pid: 442000,
            type: 3,
            name: '三乡镇',
            zipCode: '528463',
            child: null
          },
          {
            id: 442022,
            pid: 442000,
            type: 3,
            name: '板芙镇',
            zipCode: '528459',
            child: null
          },
          {
            id: 442023,
            pid: 442000,
            type: 3,
            name: '神湾镇',
            zipCode: '528462',
            child: null
          },
          {
            id: 442024,
            pid: 442000,
            type: 3,
            name: '坦洲镇',
            zipCode: '528467',
            child: null
          }
        ]
      },
      {
        id: 445100,
        pid: 440000,
        type: 2,
        name: '潮州市',
        zipCode: '521000',
        child: [
          {
            id: 445102,
            pid: 445100,
            type: 3,
            name: '湘桥区',
            zipCode: '521000',
            child: null
          },
          {
            id: 445103,
            pid: 445100,
            type: 3,
            name: '潮安区',
            zipCode: '515638',
            child: null
          },
          {
            id: 445122,
            pid: 445100,
            type: 3,
            name: '饶平县',
            zipCode: '515700',
            child: null
          }
        ]
      },
      {
        id: 445200,
        pid: 440000,
        type: 2,
        name: '揭阳市',
        zipCode: '522000',
        child: [
          {
            id: 445202,
            pid: 445200,
            type: 3,
            name: '榕城区',
            zipCode: '522000',
            child: null
          },
          {
            id: 445203,
            pid: 445200,
            type: 3,
            name: '揭东区',
            zipCode: '515500',
            child: null
          },
          {
            id: 445222,
            pid: 445200,
            type: 3,
            name: '揭西县',
            zipCode: '515400',
            child: null
          },
          {
            id: 445224,
            pid: 445200,
            type: 3,
            name: '惠来县',
            zipCode: '515200',
            child: null
          },
          {
            id: 445281,
            pid: 445200,
            type: 3,
            name: '普宁市',
            zipCode: '515300',
            child: null
          }
        ]
      },
      {
        id: 445300,
        pid: 440000,
        type: 2,
        name: '云浮市',
        zipCode: '527300',
        child: [
          {
            id: 445302,
            pid: 445300,
            type: 3,
            name: '云城区',
            zipCode: '527300',
            child: null
          },
          {
            id: 445303,
            pid: 445300,
            type: 3,
            name: '云安区',
            zipCode: '527500',
            child: null
          },
          {
            id: 445321,
            pid: 445300,
            type: 3,
            name: '新兴县',
            zipCode: '527400',
            child: null
          },
          {
            id: 445322,
            pid: 445300,
            type: 3,
            name: '郁南县',
            zipCode: '527100',
            child: null
          },
          {
            id: 445381,
            pid: 445300,
            type: 3,
            name: '罗定市',
            zipCode: '527200',
            child: null
          }
        ]
      }
    ]
  },
  {
    id: 450000,
    pid: 100000,
    type: 1,
    name: '广西壮族自治区',
    base: 'gx', //省份简称
    zipCode: '',
    child: [
      {
        id: 450100,
        pid: 450000,
        type: 2,
        name: '南宁市',
        zipCode: '530028',
        child: [
          {
            id: 450102,
            pid: 450100,
            type: 3,
            name: '兴宁区',
            zipCode: '530023',
            child: null
          },
          {
            id: 450103,
            pid: 450100,
            type: 3,
            name: '青秀区',
            zipCode: '530213',
            child: null
          },
          {
            id: 450105,
            pid: 450100,
            type: 3,
            name: '江南区',
            zipCode: '530031',
            child: null
          },
          {
            id: 450107,
            pid: 450100,
            type: 3,
            name: '西乡塘区',
            zipCode: '530001',
            child: null
          },
          {
            id: 450108,
            pid: 450100,
            type: 3,
            name: '良庆区',
            zipCode: '530219',
            child: null
          },
          {
            id: 450109,
            pid: 450100,
            type: 3,
            name: '邕宁区',
            zipCode: '530200',
            child: null
          },
          {
            id: 450122,
            pid: 450100,
            type: 3,
            name: '武鸣县',
            zipCode: '530100',
            child: null
          },
          {
            id: 450123,
            pid: 450100,
            type: 3,
            name: '隆安县',
            zipCode: '532700',
            child: null
          },
          {
            id: 450124,
            pid: 450100,
            type: 3,
            name: '马山县',
            zipCode: '530600',
            child: null
          },
          {
            id: 450125,
            pid: 450100,
            type: 3,
            name: '上林县',
            zipCode: '530500',
            child: null
          },
          {
            id: 450126,
            pid: 450100,
            type: 3,
            name: '宾阳县',
            zipCode: '530400',
            child: null
          },
          {
            id: 450127,
            pid: 450100,
            type: 3,
            name: '横县',
            zipCode: '530300',
            child: null
          },
          {
            id: 450128,
            pid: 450100,
            type: 3,
            name: '埌东新区',
            zipCode: '530000',
            child: null
          }
        ]
      },
      {
        id: 450200,
        pid: 450000,
        type: 2,
        name: '柳州市',
        zipCode: '545001',
        child: [
          {
            id: 450202,
            pid: 450200,
            type: 3,
            name: '城中区',
            zipCode: '545001',
            child: null
          },
          {
            id: 450203,
            pid: 450200,
            type: 3,
            name: '鱼峰区',
            zipCode: '545005',
            child: null
          },
          {
            id: 450204,
            pid: 450200,
            type: 3,
            name: '柳南区',
            zipCode: '545007',
            child: null
          },
          {
            id: 450205,
            pid: 450200,
            type: 3,
            name: '柳北区',
            zipCode: '545002',
            child: null
          },
          {
            id: 450221,
            pid: 450200,
            type: 3,
            name: '柳江县',
            zipCode: '545100',
            child: null
          },
          {
            id: 450222,
            pid: 450200,
            type: 3,
            name: '柳城县',
            zipCode: '545200',
            child: null
          },
          {
            id: 450223,
            pid: 450200,
            type: 3,
            name: '鹿寨县',
            zipCode: '545600',
            child: null
          },
          {
            id: 450224,
            pid: 450200,
            type: 3,
            name: '融安县',
            zipCode: '545400',
            child: null
          },
          {
            id: 450225,
            pid: 450200,
            type: 3,
            name: '融水苗族自治县',
            zipCode: '545300',
            child: null
          },
          {
            id: 450226,
            pid: 450200,
            type: 3,
            name: '三江侗族自治县',
            zipCode: '545500',
            child: null
          },
          {
            id: 450227,
            pid: 450200,
            type: 3,
            name: '柳东新区',
            zipCode: '545000',
            child: null
          }
        ]
      },
      {
        id: 450300,
        pid: 450000,
        type: 2,
        name: '桂林市',
        zipCode: '541100',
        child: [
          {
            id: 450302,
            pid: 450300,
            type: 3,
            name: '秀峰区',
            zipCode: '541001',
            child: null
          },
          {
            id: 450303,
            pid: 450300,
            type: 3,
            name: '叠彩区',
            zipCode: '541001',
            child: null
          },
          {
            id: 450304,
            pid: 450300,
            type: 3,
            name: '象山区',
            zipCode: '541002',
            child: null
          },
          {
            id: 450305,
            pid: 450300,
            type: 3,
            name: '七星区',
            zipCode: '541004',
            child: null
          },
          {
            id: 450311,
            pid: 450300,
            type: 3,
            name: '雁山区',
            zipCode: '541006',
            child: null
          },
          {
            id: 450312,
            pid: 450300,
            type: 3,
            name: '临桂区',
            zipCode: '541100',
            child: null
          },
          {
            id: 450321,
            pid: 450300,
            type: 3,
            name: '阳朔县',
            zipCode: '541900',
            child: null
          },
          {
            id: 450323,
            pid: 450300,
            type: 3,
            name: '灵川县',
            zipCode: '541200',
            child: null
          },
          {
            id: 450324,
            pid: 450300,
            type: 3,
            name: '全州县',
            zipCode: '541503',
            child: null
          },
          {
            id: 450325,
            pid: 450300,
            type: 3,
            name: '兴安县',
            zipCode: '541300',
            child: null
          },
          {
            id: 450326,
            pid: 450300,
            type: 3,
            name: '永福县',
            zipCode: '541800',
            child: null
          },
          {
            id: 450327,
            pid: 450300,
            type: 3,
            name: '灌阳县',
            zipCode: '541600',
            child: null
          },
          {
            id: 450328,
            pid: 450300,
            type: 3,
            name: '龙胜各族自治县',
            zipCode: '541700',
            child: null
          },
          {
            id: 450329,
            pid: 450300,
            type: 3,
            name: '资源县',
            zipCode: '541400',
            child: null
          },
          {
            id: 450330,
            pid: 450300,
            type: 3,
            name: '平乐县',
            zipCode: '542400',
            child: null
          },
          {
            id: 450331,
            pid: 450300,
            type: 3,
            name: '荔浦县',
            zipCode: '546600',
            child: null
          },
          {
            id: 450332,
            pid: 450300,
            type: 3,
            name: '恭城瑶族自治县',
            zipCode: '542500',
            child: null
          }
        ]
      },
      {
        id: 450400,
        pid: 450000,
        type: 2,
        name: '梧州市',
        zipCode: '543002',
        child: [
          {
            id: 450403,
            pid: 450400,
            type: 3,
            name: '万秀区',
            zipCode: '543000',
            child: null
          },
          {
            id: 450405,
            pid: 450400,
            type: 3,
            name: '长洲区',
            zipCode: '543003',
            child: null
          },
          {
            id: 450406,
            pid: 450400,
            type: 3,
            name: '龙圩区',
            zipCode: '543002',
            child: null
          },
          {
            id: 450421,
            pid: 450400,
            type: 3,
            name: '苍梧县',
            zipCode: '543100',
            child: null
          },
          {
            id: 450422,
            pid: 450400,
            type: 3,
            name: '藤县',
            zipCode: '543300',
            child: null
          },
          {
            id: 450423,
            pid: 450400,
            type: 3,
            name: '蒙山县',
            zipCode: '546700',
            child: null
          },
          {
            id: 450481,
            pid: 450400,
            type: 3,
            name: '岑溪市',
            zipCode: '543200',
            child: null
          }
        ]
      },
      {
        id: 450500,
        pid: 450000,
        type: 2,
        name: '北海市',
        zipCode: '536000',
        child: [
          {
            id: 450502,
            pid: 450500,
            type: 3,
            name: '海城区',
            zipCode: '536000',
            child: null
          },
          {
            id: 450503,
            pid: 450500,
            type: 3,
            name: '银海区',
            zipCode: '536000',
            child: null
          },
          {
            id: 450512,
            pid: 450500,
            type: 3,
            name: '铁山港区',
            zipCode: '536017',
            child: null
          },
          {
            id: 450521,
            pid: 450500,
            type: 3,
            name: '合浦县',
            zipCode: '536100',
            child: null
          }
        ]
      },
      {
        id: 450600,
        pid: 450000,
        type: 2,
        name: '防城港市',
        zipCode: '538001',
        child: [
          {
            id: 450602,
            pid: 450600,
            type: 3,
            name: '港口区',
            zipCode: '538001',
            child: null
          },
          {
            id: 450603,
            pid: 450600,
            type: 3,
            name: '防城区',
            zipCode: '538021',
            child: null
          },
          {
            id: 450621,
            pid: 450600,
            type: 3,
            name: '上思县',
            zipCode: '535500',
            child: null
          },
          {
            id: 450681,
            pid: 450600,
            type: 3,
            name: '东兴市',
            zipCode: '538100',
            child: null
          }
        ]
      },
      {
        id: 450700,
        pid: 450000,
        type: 2,
        name: '钦州市',
        zipCode: '535099',
        child: [
          {
            id: 450702,
            pid: 450700,
            type: 3,
            name: '钦南区',
            zipCode: '535099',
            child: null
          },
          {
            id: 450703,
            pid: 450700,
            type: 3,
            name: '钦北区',
            zipCode: '535099',
            child: null
          },
          {
            id: 450721,
            pid: 450700,
            type: 3,
            name: '灵山县',
            zipCode: '535099',
            child: null
          },
          {
            id: 450722,
            pid: 450700,
            type: 3,
            name: '浦北县',
            zipCode: '535099',
            child: null
          }
        ]
      },
      {
        id: 450800,
        pid: 450000,
        type: 2,
        name: '贵港市',
        zipCode: '537100',
        child: [
          {
            id: 450802,
            pid: 450800,
            type: 3,
            name: '港北区',
            zipCode: '537100',
            child: null
          },
          {
            id: 450803,
            pid: 450800,
            type: 3,
            name: '港南区',
            zipCode: '537100',
            child: null
          },
          {
            id: 450804,
            pid: 450800,
            type: 3,
            name: '覃塘区',
            zipCode: '537121',
            child: null
          },
          {
            id: 450821,
            pid: 450800,
            type: 3,
            name: '平南县',
            zipCode: '537300',
            child: null
          },
          {
            id: 450881,
            pid: 450800,
            type: 3,
            name: '桂平市',
            zipCode: '537200',
            child: null
          }
        ]
      },
      {
        id: 450900,
        pid: 450000,
        type: 2,
        name: '玉林市',
        zipCode: '537000',
        child: [
          {
            id: 450902,
            pid: 450900,
            type: 3,
            name: '玉州区',
            zipCode: '537000',
            child: null
          },
          {
            id: 450903,
            pid: 450900,
            type: 3,
            name: '福绵区',
            zipCode: '537023',
            child: null
          },
          {
            id: 450904,
            pid: 450900,
            type: 3,
            name: '玉东新区',
            zipCode: '537000',
            child: null
          },
          {
            id: 450921,
            pid: 450900,
            type: 3,
            name: '容县',
            zipCode: '537500',
            child: null
          },
          {
            id: 450922,
            pid: 450900,
            type: 3,
            name: '陆川县',
            zipCode: '537700',
            child: null
          },
          {
            id: 450923,
            pid: 450900,
            type: 3,
            name: '博白县',
            zipCode: '537600',
            child: null
          },
          {
            id: 450924,
            pid: 450900,
            type: 3,
            name: '兴业县',
            zipCode: '537800',
            child: null
          },
          {
            id: 450981,
            pid: 450900,
            type: 3,
            name: '北流市',
            zipCode: '537400',
            child: null
          }
        ]
      },
      {
        id: 451000,
        pid: 450000,
        type: 2,
        name: '百色市',
        zipCode: '533000',
        child: [
          {
            id: 451002,
            pid: 451000,
            type: 3,
            name: '右江区',
            zipCode: '533000',
            child: null
          },
          {
            id: 451021,
            pid: 451000,
            type: 3,
            name: '田阳县',
            zipCode: '533600',
            child: null
          },
          {
            id: 451022,
            pid: 451000,
            type: 3,
            name: '田东县',
            zipCode: '531500',
            child: null
          },
          {
            id: 451023,
            pid: 451000,
            type: 3,
            name: '平果县',
            zipCode: '531400',
            child: null
          },
          {
            id: 451024,
            pid: 451000,
            type: 3,
            name: '德保县',
            zipCode: '533700',
            child: null
          },
          {
            id: 451025,
            pid: 451000,
            type: 3,
            name: '靖西县',
            zipCode: '533800',
            child: null
          },
          {
            id: 451026,
            pid: 451000,
            type: 3,
            name: '那坡县',
            zipCode: '533900',
            child: null
          },
          {
            id: 451027,
            pid: 451000,
            type: 3,
            name: '凌云县',
            zipCode: '533100',
            child: null
          },
          {
            id: 451028,
            pid: 451000,
            type: 3,
            name: '乐业县',
            zipCode: '533200',
            child: null
          },
          {
            id: 451029,
            pid: 451000,
            type: 3,
            name: '田林县',
            zipCode: '533300',
            child: null
          },
          {
            id: 451030,
            pid: 451000,
            type: 3,
            name: '西林县',
            zipCode: '533500',
            child: null
          },
          {
            id: 451031,
            pid: 451000,
            type: 3,
            name: '隆林各族自治县',
            zipCode: '533400',
            child: null
          }
        ]
      },
      {
        id: 451100,
        pid: 450000,
        type: 2,
        name: '贺州市',
        zipCode: '542800',
        child: [
          {
            id: 451102,
            pid: 451100,
            type: 3,
            name: '八步区',
            zipCode: '542800',
            child: null
          },
          {
            id: 451121,
            pid: 451100,
            type: 3,
            name: '昭平县',
            zipCode: '546800',
            child: null
          },
          {
            id: 451122,
            pid: 451100,
            type: 3,
            name: '钟山县',
            zipCode: '542600',
            child: null
          },
          {
            id: 451123,
            pid: 451100,
            type: 3,
            name: '富川瑶族自治县',
            zipCode: '542700',
            child: null
          },
          {
            id: 451124,
            pid: 451100,
            type: 3,
            name: '平桂管理区',
            zipCode: '542800',
            child: null
          }
        ]
      },
      {
        id: 451200,
        pid: 450000,
        type: 2,
        name: '河池市',
        zipCode: '547000',
        child: [
          {
            id: 451202,
            pid: 451200,
            type: 3,
            name: '金城江区',
            zipCode: '547000',
            child: null
          },
          {
            id: 451221,
            pid: 451200,
            type: 3,
            name: '南丹县',
            zipCode: '547200',
            child: null
          },
          {
            id: 451222,
            pid: 451200,
            type: 3,
            name: '天峨县',
            zipCode: '547300',
            child: null
          },
          {
            id: 451223,
            pid: 451200,
            type: 3,
            name: '凤山县',
            zipCode: '547600',
            child: null
          },
          {
            id: 451224,
            pid: 451200,
            type: 3,
            name: '东兰县',
            zipCode: '547400',
            child: null
          },
          {
            id: 451225,
            pid: 451200,
            type: 3,
            name: '罗城仫佬族自治县',
            zipCode: '546400',
            child: null
          },
          {
            id: 451226,
            pid: 451200,
            type: 3,
            name: '环江毛南族自治县',
            zipCode: '547100',
            child: null
          },
          {
            id: 451227,
            pid: 451200,
            type: 3,
            name: '巴马瑶族自治县',
            zipCode: '547500',
            child: null
          },
          {
            id: 451228,
            pid: 451200,
            type: 3,
            name: '都安瑶族自治县',
            zipCode: '530700',
            child: null
          },
          {
            id: 451229,
            pid: 451200,
            type: 3,
            name: '大化瑶族自治县',
            zipCode: '530800',
            child: null
          },
          {
            id: 451281,
            pid: 451200,
            type: 3,
            name: '宜州市',
            zipCode: '546300',
            child: null
          }
        ]
      },
      {
        id: 451300,
        pid: 450000,
        type: 2,
        name: '来宾市',
        zipCode: '546100',
        child: [
          {
            id: 451302,
            pid: 451300,
            type: 3,
            name: '兴宾区',
            zipCode: '546100',
            child: null
          },
          {
            id: 451321,
            pid: 451300,
            type: 3,
            name: '忻城县',
            zipCode: '546200',
            child: null
          },
          {
            id: 451322,
            pid: 451300,
            type: 3,
            name: '象州县',
            zipCode: '545800',
            child: null
          },
          {
            id: 451323,
            pid: 451300,
            type: 3,
            name: '武宣县',
            zipCode: '545900',
            child: null
          },
          {
            id: 451324,
            pid: 451300,
            type: 3,
            name: '金秀瑶族自治县',
            zipCode: '545799',
            child: null
          },
          {
            id: 451381,
            pid: 451300,
            type: 3,
            name: '合山市',
            zipCode: '546500',
            child: null
          }
        ]
      },
      {
        id: 451400,
        pid: 450000,
        type: 2,
        name: '崇左市',
        zipCode: '532299',
        child: [
          {
            id: 451402,
            pid: 451400,
            type: 3,
            name: '江州区',
            zipCode: '532299',
            child: null
          },
          {
            id: 451421,
            pid: 451400,
            type: 3,
            name: '扶绥县',
            zipCode: '532199',
            child: null
          },
          {
            id: 451422,
            pid: 451400,
            type: 3,
            name: '宁明县',
            zipCode: '532599',
            child: null
          },
          {
            id: 451423,
            pid: 451400,
            type: 3,
            name: '龙州县',
            zipCode: '532499',
            child: null
          },
          {
            id: 451424,
            pid: 451400,
            type: 3,
            name: '大新县',
            zipCode: '532399',
            child: null
          },
          {
            id: 451425,
            pid: 451400,
            type: 3,
            name: '天等县',
            zipCode: '532899',
            child: null
          },
          {
            id: 451481,
            pid: 451400,
            type: 3,
            name: '凭祥市',
            zipCode: '532699',
            child: null
          }
        ]
      }
    ]
  },
  {
    id: 460000,
    pid: 100000,
    type: 1,
    name: '海南省',
    base: 'han', //省份简称
    zipCode: '',
    child: [
      {
        id: 460100,
        pid: 460000,
        type: 2,
        name: '海口市',
        zipCode: '570000',
        child: [
          {
            id: 460105,
            pid: 460100,
            type: 3,
            name: '秀英区',
            zipCode: '570311',
            child: null
          },
          {
            id: 460106,
            pid: 460100,
            type: 3,
            name: '龙华区',
            zipCode: '570145',
            child: null
          },
          {
            id: 460107,
            pid: 460100,
            type: 3,
            name: '琼山区',
            zipCode: '571100',
            child: null
          },
          {
            id: 460108,
            pid: 460100,
            type: 3,
            name: '美兰区',
            zipCode: '570203',
            child: null
          }
        ]
      },
      {
        id: 460200,
        pid: 460000,
        type: 2,
        name: '三亚市',
        zipCode: '572000',
        child: [
          {
            id: 460202,
            pid: 460200,
            type: 3,
            name: '海棠区',
            zipCode: '572000',
            child: null
          },
          {
            id: 460203,
            pid: 460200,
            type: 3,
            name: '吉阳区',
            zipCode: '572000',
            child: null
          },
          {
            id: 460204,
            pid: 460200,
            type: 3,
            name: '天涯区',
            zipCode: '572000',
            child: null
          },
          {
            id: 460205,
            pid: 460200,
            type: 3,
            name: '崖州区',
            zipCode: '572000',
            child: null
          }
        ]
      },
      {
        id: 460300,
        pid: 460000,
        type: 2,
        name: '三沙市',
        zipCode: '573199',
        child: [
          {
            id: 460321,
            pid: 460300,
            type: 3,
            name: '西沙群岛',
            zipCode: '572000',
            child: null
          },
          {
            id: 460322,
            pid: 460300,
            type: 3,
            name: '南沙群岛',
            zipCode: '573100',
            child: null
          },
          {
            id: 460323,
            pid: 460300,
            type: 3,
            name: '中沙群岛',
            zipCode: '573100',
            child: null
          }
        ]
      },
      {
        id: 469000,
        pid: 460000,
        type: 2,
        name: '直辖县级',
        zipCode: '',
        child: [
          {
            id: 469001,
            pid: 469000,
            type: 3,
            name: '五指山市',
            zipCode: '572200',
            child: null
          },
          {
            id: 469002,
            pid: 469000,
            type: 3,
            name: '琼海市',
            zipCode: '571400',
            child: null
          },
          {
            id: 469003,
            pid: 469000,
            type: 3,
            name: '儋州市',
            zipCode: '571700',
            child: null
          },
          {
            id: 469005,
            pid: 469000,
            type: 3,
            name: '文昌市',
            zipCode: '571339',
            child: null
          },
          {
            id: 469006,
            pid: 469000,
            type: 3,
            name: '万宁市',
            zipCode: '571500',
            child: null
          },
          {
            id: 469007,
            pid: 469000,
            type: 3,
            name: '东方市',
            zipCode: '572600',
            child: null
          },
          {
            id: 469021,
            pid: 469000,
            type: 3,
            name: '定安县',
            zipCode: '571200',
            child: null
          },
          {
            id: 469022,
            pid: 469000,
            type: 3,
            name: '屯昌县',
            zipCode: '571600',
            child: null
          },
          {
            id: 469023,
            pid: 469000,
            type: 3,
            name: '澄迈县',
            zipCode: '571900',
            child: null
          },
          {
            id: 469024,
            pid: 469000,
            type: 3,
            name: '临高县',
            zipCode: '571800',
            child: null
          },
          {
            id: 469025,
            pid: 469000,
            type: 3,
            name: '白沙黎族自治县',
            zipCode: '572800',
            child: null
          },
          {
            id: 469026,
            pid: 469000,
            type: 3,
            name: '昌江黎族自治县',
            zipCode: '572700',
            child: null
          },
          {
            id: 469027,
            pid: 469000,
            type: 3,
            name: '乐东黎族自治县',
            zipCode: '572500',
            child: null
          },
          {
            id: 469028,
            pid: 469000,
            type: 3,
            name: '陵水黎族自治县',
            zipCode: '572400',
            child: null
          },
          {
            id: 469029,
            pid: 469000,
            type: 3,
            name: '保亭黎族苗族自治县',
            zipCode: '572300',
            child: null
          },
          {
            id: 469030,
            pid: 469000,
            type: 3,
            name: '琼中黎族苗族自治县',
            zipCode: '572900',
            child: null
          }
        ]
      }
    ]
  },
  {
    id: 500000,
    pid: 100000,
    type: 1,
    name: '重庆市',
    base: 'cq', //省份简称
    zipCode: '',
    child: [
      {
        id: 500100,
        pid: 500000,
        type: 2,
        name: '重庆市',
        zipCode: '400000',
        child: [
          {
            id: 500101,
            pid: 500100,
            type: 3,
            name: '万州区',
            zipCode: '404000',
            child: null
          },
          {
            id: 500102,
            pid: 500100,
            type: 3,
            name: '涪陵区',
            zipCode: '408000',
            child: null
          },
          {
            id: 500103,
            pid: 500100,
            type: 3,
            name: '渝中区',
            zipCode: '400010',
            child: null
          },
          {
            id: 500104,
            pid: 500100,
            type: 3,
            name: '大渡口区',
            zipCode: '400080',
            child: null
          },
          {
            id: 500105,
            pid: 500100,
            type: 3,
            name: '江北区',
            zipCode: '400020',
            child: null
          },
          {
            id: 500106,
            pid: 500100,
            type: 3,
            name: '沙坪坝区',
            zipCode: '400030',
            child: null
          },
          {
            id: 500107,
            pid: 500100,
            type: 3,
            name: '九龙坡区',
            zipCode: '400050',
            child: null
          },
          {
            id: 500108,
            pid: 500100,
            type: 3,
            name: '南岸区',
            zipCode: '400064',
            child: null
          },
          {
            id: 500109,
            pid: 500100,
            type: 3,
            name: '北碚区',
            zipCode: '400700',
            child: null
          },
          {
            id: 500110,
            pid: 500100,
            type: 3,
            name: '綦江区',
            zipCode: '400800',
            child: null
          },
          {
            id: 500111,
            pid: 500100,
            type: 3,
            name: '大足区',
            zipCode: '400900',
            child: null
          },
          {
            id: 500112,
            pid: 500100,
            type: 3,
            name: '渝北区',
            zipCode: '401120',
            child: null
          },
          {
            id: 500113,
            pid: 500100,
            type: 3,
            name: '巴南区',
            zipCode: '401320',
            child: null
          },
          {
            id: 500114,
            pid: 500100,
            type: 3,
            name: '黔江区',
            zipCode: '409700',
            child: null
          },
          {
            id: 500115,
            pid: 500100,
            type: 3,
            name: '长寿区',
            zipCode: '401220',
            child: null
          },
          {
            id: 500116,
            pid: 500100,
            type: 3,
            name: '江津区',
            zipCode: '402260',
            child: null
          },
          {
            id: 500117,
            pid: 500100,
            type: 3,
            name: '合川区',
            zipCode: '401520',
            child: null
          },
          {
            id: 500118,
            pid: 500100,
            type: 3,
            name: '永川区',
            zipCode: '402160',
            child: null
          },
          {
            id: 500119,
            pid: 500100,
            type: 3,
            name: '南川区',
            zipCode: '408400',
            child: null
          },
          {
            id: 500120,
            pid: 500100,
            type: 3,
            name: '璧山区',
            zipCode: '402760',
            child: null
          },
          {
            id: 500151,
            pid: 500100,
            type: 3,
            name: '铜梁区',
            zipCode: '402560',
            child: null
          },
          {
            id: 500223,
            pid: 500100,
            type: 3,
            name: '潼南县',
            zipCode: '402660',
            child: null
          },
          {
            id: 500226,
            pid: 500100,
            type: 3,
            name: '荣昌县',
            zipCode: '402460',
            child: null
          },
          {
            id: 500228,
            pid: 500100,
            type: 3,
            name: '梁平县',
            zipCode: '405200',
            child: null
          },
          {
            id: 500229,
            pid: 500100,
            type: 3,
            name: '城口县',
            zipCode: '405900',
            child: null
          },
          {
            id: 500230,
            pid: 500100,
            type: 3,
            name: '丰都县',
            zipCode: '408200',
            child: null
          },
          {
            id: 500231,
            pid: 500100,
            type: 3,
            name: '垫江县',
            zipCode: '408300',
            child: null
          },
          {
            id: 500232,
            pid: 500100,
            type: 3,
            name: '武隆县',
            zipCode: '408500',
            child: null
          },
          {
            id: 500233,
            pid: 500100,
            type: 3,
            name: '忠县',
            zipCode: '404300',
            child: null
          },
          {
            id: 500234,
            pid: 500100,
            type: 3,
            name: '开县',
            zipCode: '405400',
            child: null
          },
          {
            id: 500235,
            pid: 500100,
            type: 3,
            name: '云阳县',
            zipCode: '404500',
            child: null
          },
          {
            id: 500236,
            pid: 500100,
            type: 3,
            name: '奉节县',
            zipCode: '404600',
            child: null
          },
          {
            id: 500237,
            pid: 500100,
            type: 3,
            name: '巫山县',
            zipCode: '404700',
            child: null
          },
          {
            id: 500238,
            pid: 500100,
            type: 3,
            name: '巫溪县',
            zipCode: '405800',
            child: null
          },
          {
            id: 500240,
            pid: 500100,
            type: 3,
            name: '石柱土家族自治县',
            zipCode: '409100',
            child: null
          },
          {
            id: 500241,
            pid: 500100,
            type: 3,
            name: '秀山土家族苗族自治县',
            zipCode: '409900',
            child: null
          },
          {
            id: 500242,
            pid: 500100,
            type: 3,
            name: '酉阳土家族苗族自治县',
            zipCode: '409800',
            child: null
          },
          {
            id: 500243,
            pid: 500100,
            type: 3,
            name: '彭水苗族土家族自治县',
            zipCode: '409600',
            child: null
          }
        ]
      },
      {
        id: 500300,
        pid: 500000,
        type: 2,
        name: '两江新区',
        zipCode: '400000',
        child: [
          {
            id: 500301,
            pid: 500300,
            type: 3,
            name: '北部新区',
            zipCode: '400000',
            child: null
          },
          {
            id: 500302,
            pid: 500300,
            type: 3,
            name: '保税港区',
            zipCode: '400000',
            child: null
          },
          {
            id: 500303,
            pid: 500300,
            type: 3,
            name: '工业园区',
            zipCode: '400000',
            child: null
          }
        ]
      }
    ]
  },
  {
    id: 510000,
    pid: 100000,
    type: 1,
    name: '四川省',
    base: 'sc', //省份简称
    zipCode: '',
    child: [
      {
        id: 510100,
        pid: 510000,
        type: 2,
        name: '成都市',
        zipCode: '610015',
        child: [
          {
            id: 510104,
            pid: 510100,
            type: 3,
            name: '锦江区',
            zipCode: '610021',
            child: null
          },
          {
            id: 510105,
            pid: 510100,
            type: 3,
            name: '青羊区',
            zipCode: '610031',
            child: null
          },
          {
            id: 510106,
            pid: 510100,
            type: 3,
            name: '金牛区',
            zipCode: '610036',
            child: null
          },
          {
            id: 510107,
            pid: 510100,
            type: 3,
            name: '武侯区',
            zipCode: '610041',
            child: null
          },
          {
            id: 510108,
            pid: 510100,
            type: 3,
            name: '成华区',
            zipCode: '610066',
            child: null
          },
          {
            id: 510112,
            pid: 510100,
            type: 3,
            name: '龙泉驿区',
            zipCode: '610100',
            child: null
          },
          {
            id: 510113,
            pid: 510100,
            type: 3,
            name: '青白江区',
            zipCode: '610300',
            child: null
          },
          {
            id: 510114,
            pid: 510100,
            type: 3,
            name: '新都区',
            zipCode: '610500',
            child: null
          },
          {
            id: 510115,
            pid: 510100,
            type: 3,
            name: '温江区',
            zipCode: '611130',
            child: null
          },
          {
            id: 510121,
            pid: 510100,
            type: 3,
            name: '金堂县',
            zipCode: '610400',
            child: null
          },
          {
            id: 510122,
            pid: 510100,
            type: 3,
            name: '双流县',
            zipCode: '610200',
            child: null
          },
          {
            id: 510124,
            pid: 510100,
            type: 3,
            name: '郫县',
            zipCode: '611730',
            child: null
          },
          {
            id: 510129,
            pid: 510100,
            type: 3,
            name: '大邑县',
            zipCode: '611330',
            child: null
          },
          {
            id: 510131,
            pid: 510100,
            type: 3,
            name: '蒲江县',
            zipCode: '611630',
            child: null
          },
          {
            id: 510132,
            pid: 510100,
            type: 3,
            name: '新津县',
            zipCode: '611430',
            child: null
          },
          {
            id: 510181,
            pid: 510100,
            type: 3,
            name: '都江堰市',
            zipCode: '611830',
            child: null
          },
          {
            id: 510182,
            pid: 510100,
            type: 3,
            name: '彭州市',
            zipCode: '611930',
            child: null
          },
          {
            id: 510183,
            pid: 510100,
            type: 3,
            name: '邛崃市',
            zipCode: '611530',
            child: null
          },
          {
            id: 510184,
            pid: 510100,
            type: 3,
            name: '崇州市',
            zipCode: '611230',
            child: null
          }
        ]
      },
      {
        id: 510300,
        pid: 510000,
        type: 2,
        name: '自贡市',
        zipCode: '643000',
        child: [
          {
            id: 510302,
            pid: 510300,
            type: 3,
            name: '自流井区',
            zipCode: '643000',
            child: null
          },
          {
            id: 510303,
            pid: 510300,
            type: 3,
            name: '贡井区',
            zipCode: '643020',
            child: null
          },
          {
            id: 510304,
            pid: 510300,
            type: 3,
            name: '大安区',
            zipCode: '643010',
            child: null
          },
          {
            id: 510311,
            pid: 510300,
            type: 3,
            name: '沿滩区',
            zipCode: '643030',
            child: null
          },
          {
            id: 510321,
            pid: 510300,
            type: 3,
            name: '荣县',
            zipCode: '643100',
            child: null
          },
          {
            id: 510322,
            pid: 510300,
            type: 3,
            name: '富顺县',
            zipCode: '643200',
            child: null
          }
        ]
      },
      {
        id: 510400,
        pid: 510000,
        type: 2,
        name: '攀枝花市',
        zipCode: '617000',
        child: [
          {
            id: 510402,
            pid: 510400,
            type: 3,
            name: '东区',
            zipCode: '617067',
            child: null
          },
          {
            id: 510403,
            pid: 510400,
            type: 3,
            name: '西区',
            zipCode: '617068',
            child: null
          },
          {
            id: 510411,
            pid: 510400,
            type: 3,
            name: '仁和区',
            zipCode: '617061',
            child: null
          },
          {
            id: 510421,
            pid: 510400,
            type: 3,
            name: '米易县',
            zipCode: '617200',
            child: null
          },
          {
            id: 510422,
            pid: 510400,
            type: 3,
            name: '盐边县',
            zipCode: '617100',
            child: null
          }
        ]
      },
      {
        id: 510500,
        pid: 510000,
        type: 2,
        name: '泸州市',
        zipCode: '646000',
        child: [
          {
            id: 510502,
            pid: 510500,
            type: 3,
            name: '江阳区',
            zipCode: '646000',
            child: null
          },
          {
            id: 510503,
            pid: 510500,
            type: 3,
            name: '纳溪区',
            zipCode: '646300',
            child: null
          },
          {
            id: 510504,
            pid: 510500,
            type: 3,
            name: '龙马潭区',
            zipCode: '646000',
            child: null
          },
          {
            id: 510521,
            pid: 510500,
            type: 3,
            name: '泸县',
            zipCode: '646106',
            child: null
          },
          {
            id: 510522,
            pid: 510500,
            type: 3,
            name: '合江县',
            zipCode: '646200',
            child: null
          },
          {
            id: 510524,
            pid: 510500,
            type: 3,
            name: '叙永县',
            zipCode: '646400',
            child: null
          },
          {
            id: 510525,
            pid: 510500,
            type: 3,
            name: '古蔺县',
            zipCode: '646500',
            child: null
          }
        ]
      },
      {
        id: 510600,
        pid: 510000,
        type: 2,
        name: '德阳市',
        zipCode: '618000',
        child: [
          {
            id: 510603,
            pid: 510600,
            type: 3,
            name: '旌阳区',
            zipCode: '618000',
            child: null
          },
          {
            id: 510623,
            pid: 510600,
            type: 3,
            name: '中江县',
            zipCode: '618100',
            child: null
          },
          {
            id: 510626,
            pid: 510600,
            type: 3,
            name: '罗江县',
            zipCode: '618500',
            child: null
          },
          {
            id: 510681,
            pid: 510600,
            type: 3,
            name: '广汉市',
            zipCode: '618300',
            child: null
          },
          {
            id: 510682,
            pid: 510600,
            type: 3,
            name: '什邡市',
            zipCode: '618400',
            child: null
          },
          {
            id: 510683,
            pid: 510600,
            type: 3,
            name: '绵竹市',
            zipCode: '618200',
            child: null
          }
        ]
      },
      {
        id: 510700,
        pid: 510000,
        type: 2,
        name: '绵阳市',
        zipCode: '621000',
        child: [
          {
            id: 510703,
            pid: 510700,
            type: 3,
            name: '涪城区',
            zipCode: '621000',
            child: null
          },
          {
            id: 510704,
            pid: 510700,
            type: 3,
            name: '游仙区',
            zipCode: '621022',
            child: null
          },
          {
            id: 510722,
            pid: 510700,
            type: 3,
            name: '三台县',
            zipCode: '621100',
            child: null
          },
          {
            id: 510723,
            pid: 510700,
            type: 3,
            name: '盐亭县',
            zipCode: '621600',
            child: null
          },
          {
            id: 510724,
            pid: 510700,
            type: 3,
            name: '安县',
            zipCode: '622650',
            child: null
          },
          {
            id: 510725,
            pid: 510700,
            type: 3,
            name: '梓潼县',
            zipCode: '622150',
            child: null
          },
          {
            id: 510726,
            pid: 510700,
            type: 3,
            name: '北川羌族自治县',
            zipCode: '622750',
            child: null
          },
          {
            id: 510727,
            pid: 510700,
            type: 3,
            name: '平武县',
            zipCode: '622550',
            child: null
          },
          {
            id: 510781,
            pid: 510700,
            type: 3,
            name: '江油市',
            zipCode: '621700',
            child: null
          }
        ]
      },
      {
        id: 510800,
        pid: 510000,
        type: 2,
        name: '广元市',
        zipCode: '628000',
        child: [
          {
            id: 510802,
            pid: 510800,
            type: 3,
            name: '利州区',
            zipCode: '628017',
            child: null
          },
          {
            id: 510811,
            pid: 510800,
            type: 3,
            name: '昭化区',
            zipCode: '628017',
            child: null
          },
          {
            id: 510812,
            pid: 510800,
            type: 3,
            name: '朝天区',
            zipCode: '628017',
            child: null
          },
          {
            id: 510821,
            pid: 510800,
            type: 3,
            name: '旺苍县',
            zipCode: '628200',
            child: null
          },
          {
            id: 510822,
            pid: 510800,
            type: 3,
            name: '青川县',
            zipCode: '628100',
            child: null
          },
          {
            id: 510823,
            pid: 510800,
            type: 3,
            name: '剑阁县',
            zipCode: '628300',
            child: null
          },
          {
            id: 510824,
            pid: 510800,
            type: 3,
            name: '苍溪县',
            zipCode: '628400',
            child: null
          }
        ]
      },
      {
        id: 510900,
        pid: 510000,
        type: 2,
        name: '遂宁市',
        zipCode: '629000',
        child: [
          {
            id: 510903,
            pid: 510900,
            type: 3,
            name: '船山区',
            zipCode: '629000',
            child: null
          },
          {
            id: 510904,
            pid: 510900,
            type: 3,
            name: '安居区',
            zipCode: '629000',
            child: null
          },
          {
            id: 510921,
            pid: 510900,
            type: 3,
            name: '蓬溪县',
            zipCode: '629100',
            child: null
          },
          {
            id: 510922,
            pid: 510900,
            type: 3,
            name: '射洪县',
            zipCode: '629200',
            child: null
          },
          {
            id: 510923,
            pid: 510900,
            type: 3,
            name: '大英县',
            zipCode: '629300',
            child: null
          }
        ]
      },
      {
        id: 511000,
        pid: 510000,
        type: 2,
        name: '内江市',
        zipCode: '641000',
        child: [
          {
            id: 511002,
            pid: 511000,
            type: 3,
            name: '市中区',
            zipCode: '641000',
            child: null
          },
          {
            id: 511011,
            pid: 511000,
            type: 3,
            name: '东兴区',
            zipCode: '641100',
            child: null
          },
          {
            id: 511024,
            pid: 511000,
            type: 3,
            name: '威远县',
            zipCode: '642450',
            child: null
          },
          {
            id: 511025,
            pid: 511000,
            type: 3,
            name: '资中县',
            zipCode: '641200',
            child: null
          },
          {
            id: 511028,
            pid: 511000,
            type: 3,
            name: '隆昌县',
            zipCode: '642150',
            child: null
          }
        ]
      },
      {
        id: 511100,
        pid: 510000,
        type: 2,
        name: '乐山市',
        zipCode: '614000',
        child: [
          {
            id: 511102,
            pid: 511100,
            type: 3,
            name: '市中区',
            zipCode: '614000',
            child: null
          },
          {
            id: 511111,
            pid: 511100,
            type: 3,
            name: '沙湾区',
            zipCode: '614900',
            child: null
          },
          {
            id: 511112,
            pid: 511100,
            type: 3,
            name: '五通桥区',
            zipCode: '614800',
            child: null
          },
          {
            id: 511113,
            pid: 511100,
            type: 3,
            name: '金口河区',
            zipCode: '614700',
            child: null
          },
          {
            id: 511123,
            pid: 511100,
            type: 3,
            name: '犍为县',
            zipCode: '614400',
            child: null
          },
          {
            id: 511124,
            pid: 511100,
            type: 3,
            name: '井研县',
            zipCode: '613100',
            child: null
          },
          {
            id: 511126,
            pid: 511100,
            type: 3,
            name: '夹江县',
            zipCode: '614100',
            child: null
          },
          {
            id: 511129,
            pid: 511100,
            type: 3,
            name: '沐川县',
            zipCode: '614500',
            child: null
          },
          {
            id: 511132,
            pid: 511100,
            type: 3,
            name: '峨边彝族自治县',
            zipCode: '614300',
            child: null
          },
          {
            id: 511133,
            pid: 511100,
            type: 3,
            name: '马边彝族自治县',
            zipCode: '614600',
            child: null
          },
          {
            id: 511181,
            pid: 511100,
            type: 3,
            name: '峨眉山市',
            zipCode: '614200',
            child: null
          }
        ]
      },
      {
        id: 511300,
        pid: 510000,
        type: 2,
        name: '南充市',
        zipCode: '637000',
        child: [
          {
            id: 511302,
            pid: 511300,
            type: 3,
            name: '顺庆区',
            zipCode: '637000',
            child: null
          },
          {
            id: 511303,
            pid: 511300,
            type: 3,
            name: '高坪区',
            zipCode: '637100',
            child: null
          },
          {
            id: 511304,
            pid: 511300,
            type: 3,
            name: '嘉陵区',
            zipCode: '637100',
            child: null
          },
          {
            id: 511321,
            pid: 511300,
            type: 3,
            name: '南部县',
            zipCode: '637300',
            child: null
          },
          {
            id: 511322,
            pid: 511300,
            type: 3,
            name: '营山县',
            zipCode: '637700',
            child: null
          },
          {
            id: 511323,
            pid: 511300,
            type: 3,
            name: '蓬安县',
            zipCode: '637800',
            child: null
          },
          {
            id: 511324,
            pid: 511300,
            type: 3,
            name: '仪陇县',
            zipCode: '637600',
            child: null
          },
          {
            id: 511325,
            pid: 511300,
            type: 3,
            name: '西充县',
            zipCode: '637200',
            child: null
          },
          {
            id: 511381,
            pid: 511300,
            type: 3,
            name: '阆中市',
            zipCode: '637400',
            child: null
          }
        ]
      },
      {
        id: 511400,
        pid: 510000,
        type: 2,
        name: '眉山市',
        zipCode: '620020',
        child: [
          {
            id: 511402,
            pid: 511400,
            type: 3,
            name: '东坡区',
            zipCode: '620010',
            child: null
          },
          {
            id: 511403,
            pid: 511400,
            type: 3,
            name: '彭山区',
            zipCode: '620860',
            child: null
          },
          {
            id: 511421,
            pid: 511400,
            type: 3,
            name: '仁寿县',
            zipCode: '620500',
            child: null
          },
          {
            id: 511423,
            pid: 511400,
            type: 3,
            name: '洪雅县',
            zipCode: '620360',
            child: null
          },
          {
            id: 511424,
            pid: 511400,
            type: 3,
            name: '丹棱县',
            zipCode: '620200',
            child: null
          },
          {
            id: 511425,
            pid: 511400,
            type: 3,
            name: '青神县',
            zipCode: '620460',
            child: null
          }
        ]
      },
      {
        id: 511500,
        pid: 510000,
        type: 2,
        name: '宜宾市',
        zipCode: '644000',
        child: [
          {
            id: 511502,
            pid: 511500,
            type: 3,
            name: '翠屏区',
            zipCode: '644000',
            child: null
          },
          {
            id: 511503,
            pid: 511500,
            type: 3,
            name: '南溪区',
            zipCode: '644100',
            child: null
          },
          {
            id: 511521,
            pid: 511500,
            type: 3,
            name: '宜宾县',
            zipCode: '644600',
            child: null
          },
          {
            id: 511523,
            pid: 511500,
            type: 3,
            name: '江安县',
            zipCode: '644200',
            child: null
          },
          {
            id: 511524,
            pid: 511500,
            type: 3,
            name: '长宁县',
            zipCode: '644300',
            child: null
          },
          {
            id: 511525,
            pid: 511500,
            type: 3,
            name: '高县',
            zipCode: '645150',
            child: null
          },
          {
            id: 511526,
            pid: 511500,
            type: 3,
            name: '珙县',
            zipCode: '644500',
            child: null
          },
          {
            id: 511527,
            pid: 511500,
            type: 3,
            name: '筠连县',
            zipCode: '645250',
            child: null
          },
          {
            id: 511528,
            pid: 511500,
            type: 3,
            name: '兴文县',
            zipCode: '644400',
            child: null
          },
          {
            id: 511529,
            pid: 511500,
            type: 3,
            name: '屏山县',
            zipCode: '645350',
            child: null
          }
        ]
      },
      {
        id: 511600,
        pid: 510000,
        type: 2,
        name: '广安市',
        zipCode: '638000',
        child: [
          {
            id: 511602,
            pid: 511600,
            type: 3,
            name: '广安区',
            zipCode: '638000',
            child: null
          },
          {
            id: 511603,
            pid: 511600,
            type: 3,
            name: '前锋区',
            zipCode: '638019',
            child: null
          },
          {
            id: 511621,
            pid: 511600,
            type: 3,
            name: '岳池县',
            zipCode: '638300',
            child: null
          },
          {
            id: 511622,
            pid: 511600,
            type: 3,
            name: '武胜县',
            zipCode: '638400',
            child: null
          },
          {
            id: 511623,
            pid: 511600,
            type: 3,
            name: '邻水县',
            zipCode: '638500',
            child: null
          },
          {
            id: 511681,
            pid: 511600,
            type: 3,
            name: '华蓥市',
            zipCode: '638600',
            child: null
          }
        ]
      },
      {
        id: 511700,
        pid: 510000,
        type: 2,
        name: '达州市',
        zipCode: '635000',
        child: [
          {
            id: 511702,
            pid: 511700,
            type: 3,
            name: '通川区',
            zipCode: '635000',
            child: null
          },
          {
            id: 511703,
            pid: 511700,
            type: 3,
            name: '达川区',
            zipCode: '635000',
            child: null
          },
          {
            id: 511722,
            pid: 511700,
            type: 3,
            name: '宣汉县',
            zipCode: '636150',
            child: null
          },
          {
            id: 511723,
            pid: 511700,
            type: 3,
            name: '开江县',
            zipCode: '636250',
            child: null
          },
          {
            id: 511724,
            pid: 511700,
            type: 3,
            name: '大竹县',
            zipCode: '635100',
            child: null
          },
          {
            id: 511725,
            pid: 511700,
            type: 3,
            name: '渠县',
            zipCode: '635200',
            child: null
          },
          {
            id: 511781,
            pid: 511700,
            type: 3,
            name: '万源市',
            zipCode: '636350',
            child: null
          }
        ]
      },
      {
        id: 511800,
        pid: 510000,
        type: 2,
        name: '雅安市',
        zipCode: '625000',
        child: [
          {
            id: 511802,
            pid: 511800,
            type: 3,
            name: '雨城区',
            zipCode: '625000',
            child: null
          },
          {
            id: 511803,
            pid: 511800,
            type: 3,
            name: '名山区',
            zipCode: '625100',
            child: null
          },
          {
            id: 511822,
            pid: 511800,
            type: 3,
            name: '荥经县',
            zipCode: '625200',
            child: null
          },
          {
            id: 511823,
            pid: 511800,
            type: 3,
            name: '汉源县',
            zipCode: '625300',
            child: null
          },
          {
            id: 511824,
            pid: 511800,
            type: 3,
            name: '石棉县',
            zipCode: '625400',
            child: null
          },
          {
            id: 511825,
            pid: 511800,
            type: 3,
            name: '天全县',
            zipCode: '625500',
            child: null
          },
          {
            id: 511826,
            pid: 511800,
            type: 3,
            name: '芦山县',
            zipCode: '625600',
            child: null
          },
          {
            id: 511827,
            pid: 511800,
            type: 3,
            name: '宝兴县',
            zipCode: '625700',
            child: null
          }
        ]
      },
      {
        id: 511900,
        pid: 510000,
        type: 2,
        name: '巴中市',
        zipCode: '636000',
        child: [
          {
            id: 511902,
            pid: 511900,
            type: 3,
            name: '巴州区',
            zipCode: '636001',
            child: null
          },
          {
            id: 511903,
            pid: 511900,
            type: 3,
            name: '恩阳区',
            zipCode: '636064',
            child: null
          },
          {
            id: 511921,
            pid: 511900,
            type: 3,
            name: '通江县',
            zipCode: '636700',
            child: null
          },
          {
            id: 511922,
            pid: 511900,
            type: 3,
            name: '南江县',
            zipCode: '636600',
            child: null
          },
          {
            id: 511923,
            pid: 511900,
            type: 3,
            name: '平昌县',
            zipCode: '636400',
            child: null
          }
        ]
      },
      {
        id: 512000,
        pid: 510000,
        type: 2,
        name: '资阳市',
        zipCode: '641300',
        child: [
          {
            id: 512002,
            pid: 512000,
            type: 3,
            name: '雁江区',
            zipCode: '641300',
            child: null
          },
          {
            id: 512021,
            pid: 512000,
            type: 3,
            name: '安岳县',
            zipCode: '642350',
            child: null
          },
          {
            id: 512022,
            pid: 512000,
            type: 3,
            name: '乐至县',
            zipCode: '641500',
            child: null
          },
          {
            id: 512081,
            pid: 512000,
            type: 3,
            name: '简阳市',
            zipCode: '641400',
            child: null
          }
        ]
      },
      {
        id: 513200,
        pid: 510000,
        type: 2,
        name: '阿坝藏族羌族自治州',
        zipCode: '624000',
        child: [
          {
            id: 513221,
            pid: 513200,
            type: 3,
            name: '汶川县',
            zipCode: '623000',
            child: null
          },
          {
            id: 513222,
            pid: 513200,
            type: 3,
            name: '理县',
            zipCode: '623100',
            child: null
          },
          {
            id: 513223,
            pid: 513200,
            type: 3,
            name: '茂县',
            zipCode: '623200',
            child: null
          },
          {
            id: 513224,
            pid: 513200,
            type: 3,
            name: '松潘县',
            zipCode: '623300',
            child: null
          },
          {
            id: 513225,
            pid: 513200,
            type: 3,
            name: '九寨沟县',
            zipCode: '623400',
            child: null
          },
          {
            id: 513226,
            pid: 513200,
            type: 3,
            name: '金川县',
            zipCode: '624100',
            child: null
          },
          {
            id: 513227,
            pid: 513200,
            type: 3,
            name: '小金县',
            zipCode: '624200',
            child: null
          },
          {
            id: 513228,
            pid: 513200,
            type: 3,
            name: '黑水县',
            zipCode: '623500',
            child: null
          },
          {
            id: 513229,
            pid: 513200,
            type: 3,
            name: '马尔康县',
            zipCode: '624000',
            child: null
          },
          {
            id: 513230,
            pid: 513200,
            type: 3,
            name: '壤塘县',
            zipCode: '624300',
            child: null
          },
          {
            id: 513231,
            pid: 513200,
            type: 3,
            name: '阿坝县',
            zipCode: '624600',
            child: null
          },
          {
            id: 513232,
            pid: 513200,
            type: 3,
            name: '若尔盖县',
            zipCode: '624500',
            child: null
          },
          {
            id: 513233,
            pid: 513200,
            type: 3,
            name: '红原县',
            zipCode: '624400',
            child: null
          }
        ]
      },
      {
        id: 513300,
        pid: 510000,
        type: 2,
        name: '甘孜藏族自治州',
        zipCode: '626000',
        child: [
          {
            id: 513321,
            pid: 513300,
            type: 3,
            name: '康定县',
            zipCode: '626000',
            child: null
          },
          {
            id: 513322,
            pid: 513300,
            type: 3,
            name: '泸定县',
            zipCode: '626100',
            child: null
          },
          {
            id: 513323,
            pid: 513300,
            type: 3,
            name: '丹巴县',
            zipCode: '626300',
            child: null
          },
          {
            id: 513324,
            pid: 513300,
            type: 3,
            name: '九龙县',
            zipCode: '626200',
            child: null
          },
          {
            id: 513325,
            pid: 513300,
            type: 3,
            name: '雅江县',
            zipCode: '627450',
            child: null
          },
          {
            id: 513326,
            pid: 513300,
            type: 3,
            name: '道孚县',
            zipCode: '626400',
            child: null
          },
          {
            id: 513327,
            pid: 513300,
            type: 3,
            name: '炉霍县',
            zipCode: '626500',
            child: null
          },
          {
            id: 513328,
            pid: 513300,
            type: 3,
            name: '甘孜县',
            zipCode: '626700',
            child: null
          },
          {
            id: 513329,
            pid: 513300,
            type: 3,
            name: '新龙县',
            zipCode: '626800',
            child: null
          },
          {
            id: 513330,
            pid: 513300,
            type: 3,
            name: '德格县',
            zipCode: '627250',
            child: null
          },
          {
            id: 513331,
            pid: 513300,
            type: 3,
            name: '白玉县',
            zipCode: '627150',
            child: null
          },
          {
            id: 513332,
            pid: 513300,
            type: 3,
            name: '石渠县',
            zipCode: '627350',
            child: null
          },
          {
            id: 513333,
            pid: 513300,
            type: 3,
            name: '色达县',
            zipCode: '626600',
            child: null
          },
          {
            id: 513334,
            pid: 513300,
            type: 3,
            name: '理塘县',
            zipCode: '627550',
            child: null
          },
          {
            id: 513335,
            pid: 513300,
            type: 3,
            name: '巴塘县',
            zipCode: '627650',
            child: null
          },
          {
            id: 513336,
            pid: 513300,
            type: 3,
            name: '乡城县',
            zipCode: '627850',
            child: null
          },
          {
            id: 513337,
            pid: 513300,
            type: 3,
            name: '稻城县',
            zipCode: '627750',
            child: null
          },
          {
            id: 513338,
            pid: 513300,
            type: 3,
            name: '得荣县',
            zipCode: '627950',
            child: null
          }
        ]
      },
      {
        id: 513400,
        pid: 510000,
        type: 2,
        name: '凉山彝族自治州',
        zipCode: '615000',
        child: [
          {
            id: 513401,
            pid: 513400,
            type: 3,
            name: '西昌市',
            zipCode: '615000',
            child: null
          },
          {
            id: 513422,
            pid: 513400,
            type: 3,
            name: '木里藏族自治县',
            zipCode: '615800',
            child: null
          },
          {
            id: 513423,
            pid: 513400,
            type: 3,
            name: '盐源县',
            zipCode: '615700',
            child: null
          },
          {
            id: 513424,
            pid: 513400,
            type: 3,
            name: '德昌县',
            zipCode: '615500',
            child: null
          },
          {
            id: 513425,
            pid: 513400,
            type: 3,
            name: '会理县',
            zipCode: '615100',
            child: null
          },
          {
            id: 513426,
            pid: 513400,
            type: 3,
            name: '会东县',
            zipCode: '615200',
            child: null
          },
          {
            id: 513427,
            pid: 513400,
            type: 3,
            name: '宁南县',
            zipCode: '615400',
            child: null
          },
          {
            id: 513428,
            pid: 513400,
            type: 3,
            name: '普格县',
            zipCode: '615300',
            child: null
          },
          {
            id: 513429,
            pid: 513400,
            type: 3,
            name: '布拖县',
            zipCode: '616350',
            child: null
          },
          {
            id: 513430,
            pid: 513400,
            type: 3,
            name: '金阳县',
            zipCode: '616250',
            child: null
          },
          {
            id: 513431,
            pid: 513400,
            type: 3,
            name: '昭觉县',
            zipCode: '616150',
            child: null
          },
          {
            id: 513432,
            pid: 513400,
            type: 3,
            name: '喜德县',
            zipCode: '616750',
            child: null
          },
          {
            id: 513433,
            pid: 513400,
            type: 3,
            name: '冕宁县',
            zipCode: '615600',
            child: null
          },
          {
            id: 513434,
            pid: 513400,
            type: 3,
            name: '越西县',
            zipCode: '616650',
            child: null
          },
          {
            id: 513435,
            pid: 513400,
            type: 3,
            name: '甘洛县',
            zipCode: '616850',
            child: null
          },
          {
            id: 513436,
            pid: 513400,
            type: 3,
            name: '美姑县',
            zipCode: '616450',
            child: null
          },
          {
            id: 513437,
            pid: 513400,
            type: 3,
            name: '雷波县',
            zipCode: '616550',
            child: null
          }
        ]
      }
    ]
  },
  {
    id: 520000,
    pid: 100000,
    type: 1,
    name: '贵州省',
    base: 'gz', //省份简称
    zipCode: '',
    child: [
      {
        id: 520100,
        pid: 520000,
        type: 2,
        name: '贵阳市',
        zipCode: '550001',
        child: [
          {
            id: 520102,
            pid: 520100,
            type: 3,
            name: '南明区',
            zipCode: '550001',
            child: null
          },
          {
            id: 520103,
            pid: 520100,
            type: 3,
            name: '云岩区',
            zipCode: '550001',
            child: null
          },
          {
            id: 520111,
            pid: 520100,
            type: 3,
            name: '花溪区',
            zipCode: '550025',
            child: null
          },
          {
            id: 520112,
            pid: 520100,
            type: 3,
            name: '乌当区',
            zipCode: '550018',
            child: null
          },
          {
            id: 520113,
            pid: 520100,
            type: 3,
            name: '白云区',
            zipCode: '550014',
            child: null
          },
          {
            id: 520115,
            pid: 520100,
            type: 3,
            name: '观山湖区',
            zipCode: '550009',
            child: null
          },
          {
            id: 520121,
            pid: 520100,
            type: 3,
            name: '开阳县',
            zipCode: '550300',
            child: null
          },
          {
            id: 520122,
            pid: 520100,
            type: 3,
            name: '息烽县',
            zipCode: '551100',
            child: null
          },
          {
            id: 520123,
            pid: 520100,
            type: 3,
            name: '修文县',
            zipCode: '550200',
            child: null
          },
          {
            id: 520181,
            pid: 520100,
            type: 3,
            name: '清镇市',
            zipCode: '551400',
            child: null
          }
        ]
      },
      {
        id: 520200,
        pid: 520000,
        type: 2,
        name: '六盘水市',
        zipCode: '553400',
        child: [
          {
            id: 520201,
            pid: 520200,
            type: 3,
            name: '钟山区',
            zipCode: '553000',
            child: null
          },
          {
            id: 520203,
            pid: 520200,
            type: 3,
            name: '六枝特区',
            zipCode: '553400',
            child: null
          },
          {
            id: 520221,
            pid: 520200,
            type: 3,
            name: '水城县',
            zipCode: '553000',
            child: null
          },
          {
            id: 520222,
            pid: 520200,
            type: 3,
            name: '盘县',
            zipCode: '561601',
            child: null
          }
        ]
      },
      {
        id: 520300,
        pid: 520000,
        type: 2,
        name: '遵义市',
        zipCode: '563000',
        child: [
          {
            id: 520302,
            pid: 520300,
            type: 3,
            name: '红花岗区',
            zipCode: '563000',
            child: null
          },
          {
            id: 520303,
            pid: 520300,
            type: 3,
            name: '汇川区',
            zipCode: '563000',
            child: null
          },
          {
            id: 520321,
            pid: 520300,
            type: 3,
            name: '遵义县',
            zipCode: '563100',
            child: null
          },
          {
            id: 520322,
            pid: 520300,
            type: 3,
            name: '桐梓县',
            zipCode: '563200',
            child: null
          },
          {
            id: 520323,
            pid: 520300,
            type: 3,
            name: '绥阳县',
            zipCode: '563300',
            child: null
          },
          {
            id: 520324,
            pid: 520300,
            type: 3,
            name: '正安县',
            zipCode: '563400',
            child: null
          },
          {
            id: 520325,
            pid: 520300,
            type: 3,
            name: '道真仡佬族苗族自治县',
            zipCode: '563500',
            child: null
          },
          {
            id: 520326,
            pid: 520300,
            type: 3,
            name: '务川仡佬族苗族自治县',
            zipCode: '564300',
            child: null
          },
          {
            id: 520327,
            pid: 520300,
            type: 3,
            name: '凤冈县',
            zipCode: '564200',
            child: null
          },
          {
            id: 520328,
            pid: 520300,
            type: 3,
            name: '湄潭县',
            zipCode: '564100',
            child: null
          },
          {
            id: 520329,
            pid: 520300,
            type: 3,
            name: '余庆县',
            zipCode: '564400',
            child: null
          },
          {
            id: 520330,
            pid: 520300,
            type: 3,
            name: '习水县',
            zipCode: '564600',
            child: null
          },
          {
            id: 520381,
            pid: 520300,
            type: 3,
            name: '赤水市',
            zipCode: '564700',
            child: null
          },
          {
            id: 520382,
            pid: 520300,
            type: 3,
            name: '仁怀市',
            zipCode: '564500',
            child: null
          }
        ]
      },
      {
        id: 520400,
        pid: 520000,
        type: 2,
        name: '安顺市',
        zipCode: '561000',
        child: [
          {
            id: 520402,
            pid: 520400,
            type: 3,
            name: '西秀区',
            zipCode: '561000',
            child: null
          },
          {
            id: 520421,
            pid: 520400,
            type: 3,
            name: '平坝区',
            zipCode: '561100',
            child: null
          },
          {
            id: 520422,
            pid: 520400,
            type: 3,
            name: '普定县',
            zipCode: '562100',
            child: null
          },
          {
            id: 520423,
            pid: 520400,
            type: 3,
            name: '镇宁布依族苗族自治县',
            zipCode: '561200',
            child: null
          },
          {
            id: 520424,
            pid: 520400,
            type: 3,
            name: '关岭布依族苗族自治县',
            zipCode: '561300',
            child: null
          },
          {
            id: 520425,
            pid: 520400,
            type: 3,
            name: '紫云苗族布依族自治县',
            zipCode: '550800',
            child: null
          }
        ]
      },
      {
        id: 520500,
        pid: 520000,
        type: 2,
        name: '毕节市',
        zipCode: '551700',
        child: [
          {
            id: 520502,
            pid: 520500,
            type: 3,
            name: '七星关区',
            zipCode: '551700',
            child: null
          },
          {
            id: 520521,
            pid: 520500,
            type: 3,
            name: '大方县',
            zipCode: '551600',
            child: null
          },
          {
            id: 520522,
            pid: 520500,
            type: 3,
            name: '黔西县',
            zipCode: '551500',
            child: null
          },
          {
            id: 520523,
            pid: 520500,
            type: 3,
            name: '金沙县',
            zipCode: '551800',
            child: null
          },
          {
            id: 520524,
            pid: 520500,
            type: 3,
            name: '织金县',
            zipCode: '552100',
            child: null
          },
          {
            id: 520525,
            pid: 520500,
            type: 3,
            name: '纳雍县',
            zipCode: '553300',
            child: null
          },
          {
            id: 520526,
            pid: 520500,
            type: 3,
            name: '威宁彝族回族苗族自治县',
            zipCode: '553100',
            child: null
          },
          {
            id: 520527,
            pid: 520500,
            type: 3,
            name: '赫章县',
            zipCode: '553200',
            child: null
          }
        ]
      },
      {
        id: 520600,
        pid: 520000,
        type: 2,
        name: '铜仁市',
        zipCode: '554300',
        child: [
          {
            id: 520602,
            pid: 520600,
            type: 3,
            name: '碧江区',
            zipCode: '554300',
            child: null
          },
          {
            id: 520603,
            pid: 520600,
            type: 3,
            name: '万山区',
            zipCode: '554200',
            child: null
          },
          {
            id: 520621,
            pid: 520600,
            type: 3,
            name: '江口县',
            zipCode: '554400',
            child: null
          },
          {
            id: 520622,
            pid: 520600,
            type: 3,
            name: '玉屏侗族自治县',
            zipCode: '554004',
            child: null
          },
          {
            id: 520623,
            pid: 520600,
            type: 3,
            name: '石阡县',
            zipCode: '555100',
            child: null
          },
          {
            id: 520624,
            pid: 520600,
            type: 3,
            name: '思南县',
            zipCode: '565100',
            child: null
          },
          {
            id: 520625,
            pid: 520600,
            type: 3,
            name: '印江土家族苗族自治县',
            zipCode: '555200',
            child: null
          },
          {
            id: 520626,
            pid: 520600,
            type: 3,
            name: '德江县',
            zipCode: '565200',
            child: null
          },
          {
            id: 520627,
            pid: 520600,
            type: 3,
            name: '沿河土家族自治县',
            zipCode: '565300',
            child: null
          },
          {
            id: 520628,
            pid: 520600,
            type: 3,
            name: '松桃苗族自治县',
            zipCode: '554100',
            child: null
          }
        ]
      },
      {
        id: 522300,
        pid: 520000,
        type: 2,
        name: '黔西南布依族苗族自治州',
        zipCode: '562400',
        child: [
          {
            id: 522301,
            pid: 522300,
            type: 3,
            name: '兴义市 ',
            zipCode: '562400',
            child: null
          },
          {
            id: 522322,
            pid: 522300,
            type: 3,
            name: '兴仁县',
            zipCode: '562300',
            child: null
          },
          {
            id: 522323,
            pid: 522300,
            type: 3,
            name: '普安县',
            zipCode: '561500',
            child: null
          },
          {
            id: 522324,
            pid: 522300,
            type: 3,
            name: '晴隆县',
            zipCode: '561400',
            child: null
          },
          {
            id: 522325,
            pid: 522300,
            type: 3,
            name: '贞丰县',
            zipCode: '562200',
            child: null
          },
          {
            id: 522326,
            pid: 522300,
            type: 3,
            name: '望谟县',
            zipCode: '552300',
            child: null
          },
          {
            id: 522327,
            pid: 522300,
            type: 3,
            name: '册亨县',
            zipCode: '552200',
            child: null
          },
          {
            id: 522328,
            pid: 522300,
            type: 3,
            name: '安龙县',
            zipCode: '552400',
            child: null
          }
        ]
      },
      {
        id: 522600,
        pid: 520000,
        type: 2,
        name: '黔东南苗族侗族自治州',
        zipCode: '556000',
        child: [
          {
            id: 522601,
            pid: 522600,
            type: 3,
            name: '凯里市',
            zipCode: '556000',
            child: null
          },
          {
            id: 522622,
            pid: 522600,
            type: 3,
            name: '黄平县',
            zipCode: '556100',
            child: null
          },
          {
            id: 522623,
            pid: 522600,
            type: 3,
            name: '施秉县',
            zipCode: '556200',
            child: null
          },
          {
            id: 522624,
            pid: 522600,
            type: 3,
            name: '三穗县',
            zipCode: '556500',
            child: null
          },
          {
            id: 522625,
            pid: 522600,
            type: 3,
            name: '镇远县',
            zipCode: '557700',
            child: null
          },
          {
            id: 522626,
            pid: 522600,
            type: 3,
            name: '岑巩县',
            zipCode: '557800',
            child: null
          },
          {
            id: 522627,
            pid: 522600,
            type: 3,
            name: '天柱县',
            zipCode: '556600',
            child: null
          },
          {
            id: 522628,
            pid: 522600,
            type: 3,
            name: '锦屏县',
            zipCode: '556700',
            child: null
          },
          {
            id: 522629,
            pid: 522600,
            type: 3,
            name: '剑河县',
            zipCode: '556400',
            child: null
          },
          {
            id: 522630,
            pid: 522600,
            type: 3,
            name: '台江县',
            zipCode: '556300',
            child: null
          },
          {
            id: 522631,
            pid: 522600,
            type: 3,
            name: '黎平县',
            zipCode: '557300',
            child: null
          },
          {
            id: 522632,
            pid: 522600,
            type: 3,
            name: '榕江县',
            zipCode: '557200',
            child: null
          },
          {
            id: 522633,
            pid: 522600,
            type: 3,
            name: '从江县',
            zipCode: '557400',
            child: null
          },
          {
            id: 522634,
            pid: 522600,
            type: 3,
            name: '雷山县',
            zipCode: '557100',
            child: null
          },
          {
            id: 522635,
            pid: 522600,
            type: 3,
            name: '麻江县',
            zipCode: '557600',
            child: null
          },
          {
            id: 522636,
            pid: 522600,
            type: 3,
            name: '丹寨县',
            zipCode: '557500',
            child: null
          }
        ]
      },
      {
        id: 522700,
        pid: 520000,
        type: 2,
        name: '黔南布依族苗族自治州',
        zipCode: '558000',
        child: [
          {
            id: 522701,
            pid: 522700,
            type: 3,
            name: '都匀市',
            zipCode: '558000',
            child: null
          },
          {
            id: 522702,
            pid: 522700,
            type: 3,
            name: '福泉市',
            zipCode: '550500',
            child: null
          },
          {
            id: 522722,
            pid: 522700,
            type: 3,
            name: '荔波县',
            zipCode: '558400',
            child: null
          },
          {
            id: 522723,
            pid: 522700,
            type: 3,
            name: '贵定县',
            zipCode: '551300',
            child: null
          },
          {
            id: 522725,
            pid: 522700,
            type: 3,
            name: '瓮安县',
            zipCode: '550400',
            child: null
          },
          {
            id: 522726,
            pid: 522700,
            type: 3,
            name: '独山县',
            zipCode: '558200',
            child: null
          },
          {
            id: 522727,
            pid: 522700,
            type: 3,
            name: '平塘县',
            zipCode: '558300',
            child: null
          },
          {
            id: 522728,
            pid: 522700,
            type: 3,
            name: '罗甸县',
            zipCode: '550100',
            child: null
          },
          {
            id: 522729,
            pid: 522700,
            type: 3,
            name: '长顺县',
            zipCode: '550700',
            child: null
          },
          {
            id: 522730,
            pid: 522700,
            type: 3,
            name: '龙里县',
            zipCode: '551200',
            child: null
          },
          {
            id: 522731,
            pid: 522700,
            type: 3,
            name: '惠水县',
            zipCode: '550600',
            child: null
          },
          {
            id: 522732,
            pid: 522700,
            type: 3,
            name: '三都水族自治县',
            zipCode: '558100',
            child: null
          }
        ]
      }
    ]
  },
  {
    id: 530000,
    pid: 100000,
    type: 1,
    name: '云南省',
    base: 'yn', //省份简称
    zipCode: '',
    child: [
      {
        id: 530100,
        pid: 530000,
        type: 2,
        name: '昆明市',
        zipCode: '650500',
        child: [
          {
            id: 530102,
            pid: 530100,
            type: 3,
            name: '五华区',
            zipCode: '650021',
            child: null
          },
          {
            id: 530103,
            pid: 530100,
            type: 3,
            name: '盘龙区',
            zipCode: '650051',
            child: null
          },
          {
            id: 530111,
            pid: 530100,
            type: 3,
            name: '官渡区',
            zipCode: '650200',
            child: null
          },
          {
            id: 530112,
            pid: 530100,
            type: 3,
            name: '西山区',
            zipCode: '650118',
            child: null
          },
          {
            id: 530113,
            pid: 530100,
            type: 3,
            name: '东川区',
            zipCode: '654100',
            child: null
          },
          {
            id: 530114,
            pid: 530100,
            type: 3,
            name: '呈贡区',
            zipCode: '650500',
            child: null
          },
          {
            id: 530122,
            pid: 530100,
            type: 3,
            name: '晋宁县',
            zipCode: '650600',
            child: null
          },
          {
            id: 530124,
            pid: 530100,
            type: 3,
            name: '富民县',
            zipCode: '650400',
            child: null
          },
          {
            id: 530125,
            pid: 530100,
            type: 3,
            name: '宜良县',
            zipCode: '652100',
            child: null
          },
          {
            id: 530126,
            pid: 530100,
            type: 3,
            name: '石林彝族自治县',
            zipCode: '652200',
            child: null
          },
          {
            id: 530127,
            pid: 530100,
            type: 3,
            name: '嵩明县',
            zipCode: '651700',
            child: null
          },
          {
            id: 530128,
            pid: 530100,
            type: 3,
            name: '禄劝彝族苗族自治县',
            zipCode: '651500',
            child: null
          },
          {
            id: 530129,
            pid: 530100,
            type: 3,
            name: '寻甸回族彝族自治县 ',
            zipCode: '655200',
            child: null
          },
          {
            id: 530181,
            pid: 530100,
            type: 3,
            name: '安宁市',
            zipCode: '650300',
            child: null
          }
        ]
      },
      {
        id: 530300,
        pid: 530000,
        type: 2,
        name: '曲靖市',
        zipCode: '655000',
        child: [
          {
            id: 530302,
            pid: 530300,
            type: 3,
            name: '麒麟区',
            zipCode: '655000',
            child: null
          },
          {
            id: 530321,
            pid: 530300,
            type: 3,
            name: '马龙县',
            zipCode: '655100',
            child: null
          },
          {
            id: 530322,
            pid: 530300,
            type: 3,
            name: '陆良县',
            zipCode: '655600',
            child: null
          },
          {
            id: 530323,
            pid: 530300,
            type: 3,
            name: '师宗县',
            zipCode: '655700',
            child: null
          },
          {
            id: 530324,
            pid: 530300,
            type: 3,
            name: '罗平县',
            zipCode: '655800',
            child: null
          },
          {
            id: 530325,
            pid: 530300,
            type: 3,
            name: '富源县',
            zipCode: '655500',
            child: null
          },
          {
            id: 530326,
            pid: 530300,
            type: 3,
            name: '会泽县',
            zipCode: '654200',
            child: null
          },
          {
            id: 530328,
            pid: 530300,
            type: 3,
            name: '沾益县',
            zipCode: '655331',
            child: null
          },
          {
            id: 530381,
            pid: 530300,
            type: 3,
            name: '宣威市',
            zipCode: '655400',
            child: null
          }
        ]
      },
      {
        id: 530400,
        pid: 530000,
        type: 2,
        name: '玉溪市',
        zipCode: '653100',
        child: [
          {
            id: 530402,
            pid: 530400,
            type: 3,
            name: '红塔区',
            zipCode: '653100',
            child: null
          },
          {
            id: 530421,
            pid: 530400,
            type: 3,
            name: '江川县',
            zipCode: '652600',
            child: null
          },
          {
            id: 530422,
            pid: 530400,
            type: 3,
            name: '澄江县',
            zipCode: '652500',
            child: null
          },
          {
            id: 530423,
            pid: 530400,
            type: 3,
            name: '通海县',
            zipCode: '652700',
            child: null
          },
          {
            id: 530424,
            pid: 530400,
            type: 3,
            name: '华宁县',
            zipCode: '652800',
            child: null
          },
          {
            id: 530425,
            pid: 530400,
            type: 3,
            name: '易门县',
            zipCode: '651100',
            child: null
          },
          {
            id: 530426,
            pid: 530400,
            type: 3,
            name: '峨山彝族自治县',
            zipCode: '653200',
            child: null
          },
          {
            id: 530427,
            pid: 530400,
            type: 3,
            name: '新平彝族傣族自治县',
            zipCode: '653400',
            child: null
          },
          {
            id: 530428,
            pid: 530400,
            type: 3,
            name: '元江哈尼族彝族傣族自治县',
            zipCode: '653300',
            child: null
          }
        ]
      },
      {
        id: 530500,
        pid: 530000,
        type: 2,
        name: '保山市',
        zipCode: '678000',
        child: [
          {
            id: 530502,
            pid: 530500,
            type: 3,
            name: '隆阳区',
            zipCode: '678000',
            child: null
          },
          {
            id: 530521,
            pid: 530500,
            type: 3,
            name: '施甸县',
            zipCode: '678200',
            child: null
          },
          {
            id: 530522,
            pid: 530500,
            type: 3,
            name: '腾冲县',
            zipCode: '679100',
            child: null
          },
          {
            id: 530523,
            pid: 530500,
            type: 3,
            name: '龙陵县',
            zipCode: '678300',
            child: null
          },
          {
            id: 530524,
            pid: 530500,
            type: 3,
            name: '昌宁县',
            zipCode: '678100',
            child: null
          }
        ]
      },
      {
        id: 530600,
        pid: 530000,
        type: 2,
        name: '昭通市',
        zipCode: '657000',
        child: [
          {
            id: 530602,
            pid: 530600,
            type: 3,
            name: '昭阳区',
            zipCode: '657000',
            child: null
          },
          {
            id: 530621,
            pid: 530600,
            type: 3,
            name: '鲁甸县',
            zipCode: '657100',
            child: null
          },
          {
            id: 530622,
            pid: 530600,
            type: 3,
            name: '巧家县',
            zipCode: '654600',
            child: null
          },
          {
            id: 530623,
            pid: 530600,
            type: 3,
            name: '盐津县',
            zipCode: '657500',
            child: null
          },
          {
            id: 530624,
            pid: 530600,
            type: 3,
            name: '大关县',
            zipCode: '657400',
            child: null
          },
          {
            id: 530625,
            pid: 530600,
            type: 3,
            name: '永善县',
            zipCode: '657300',
            child: null
          },
          {
            id: 530626,
            pid: 530600,
            type: 3,
            name: '绥江县',
            zipCode: '657700',
            child: null
          },
          {
            id: 530627,
            pid: 530600,
            type: 3,
            name: '镇雄县',
            zipCode: '657200',
            child: null
          },
          {
            id: 530628,
            pid: 530600,
            type: 3,
            name: '彝良县',
            zipCode: '657600',
            child: null
          },
          {
            id: 530629,
            pid: 530600,
            type: 3,
            name: '威信县',
            zipCode: '657900',
            child: null
          },
          {
            id: 530630,
            pid: 530600,
            type: 3,
            name: '水富县',
            zipCode: '657800',
            child: null
          }
        ]
      },
      {
        id: 530700,
        pid: 530000,
        type: 2,
        name: '丽江市',
        zipCode: '674100',
        child: [
          {
            id: 530702,
            pid: 530700,
            type: 3,
            name: '古城区',
            zipCode: '674100',
            child: null
          },
          {
            id: 530721,
            pid: 530700,
            type: 3,
            name: '玉龙纳西族自治县',
            zipCode: '674100',
            child: null
          },
          {
            id: 530722,
            pid: 530700,
            type: 3,
            name: '永胜县',
            zipCode: '674200',
            child: null
          },
          {
            id: 530723,
            pid: 530700,
            type: 3,
            name: '华坪县',
            zipCode: '674800',
            child: null
          },
          {
            id: 530724,
            pid: 530700,
            type: 3,
            name: '宁蒗彝族自治县',
            zipCode: '674300',
            child: null
          }
        ]
      },
      {
        id: 530800,
        pid: 530000,
        type: 2,
        name: '普洱市',
        zipCode: '665000',
        child: [
          {
            id: 530802,
            pid: 530800,
            type: 3,
            name: '思茅区',
            zipCode: '665000',
            child: null
          },
          {
            id: 530821,
            pid: 530800,
            type: 3,
            name: '宁洱哈尼族彝族自治县',
            zipCode: '665100',
            child: null
          },
          {
            id: 530822,
            pid: 530800,
            type: 3,
            name: '墨江哈尼族自治县',
            zipCode: '654800',
            child: null
          },
          {
            id: 530823,
            pid: 530800,
            type: 3,
            name: '景东彝族自治县',
            zipCode: '676200',
            child: null
          },
          {
            id: 530824,
            pid: 530800,
            type: 3,
            name: '景谷傣族彝族自治县',
            zipCode: '666400',
            child: null
          },
          {
            id: 530825,
            pid: 530800,
            type: 3,
            name: '镇沅彝族哈尼族拉祜族自治县',
            zipCode: '666500',
            child: null
          },
          {
            id: 530826,
            pid: 530800,
            type: 3,
            name: '江城哈尼族彝族自治县',
            zipCode: '665900',
            child: null
          },
          {
            id: 530827,
            pid: 530800,
            type: 3,
            name: '孟连傣族拉祜族佤族自治县',
            zipCode: '665800',
            child: null
          },
          {
            id: 530828,
            pid: 530800,
            type: 3,
            name: '澜沧拉祜族自治县',
            zipCode: '665600',
            child: null
          },
          {
            id: 530829,
            pid: 530800,
            type: 3,
            name: '西盟佤族自治县',
            zipCode: '665700',
            child: null
          }
        ]
      },
      {
        id: 530900,
        pid: 530000,
        type: 2,
        name: '临沧市',
        zipCode: '677000',
        child: [
          {
            id: 530902,
            pid: 530900,
            type: 3,
            name: '临翔区',
            zipCode: '677000',
            child: null
          },
          {
            id: 530921,
            pid: 530900,
            type: 3,
            name: '凤庆县',
            zipCode: '675900',
            child: null
          },
          {
            id: 530922,
            pid: 530900,
            type: 3,
            name: '云县',
            zipCode: '675800',
            child: null
          },
          {
            id: 530923,
            pid: 530900,
            type: 3,
            name: '永德县',
            zipCode: '677600',
            child: null
          },
          {
            id: 530924,
            pid: 530900,
            type: 3,
            name: '镇康县',
            zipCode: '677704',
            child: null
          },
          {
            id: 530925,
            pid: 530900,
            type: 3,
            name: '双江拉祜族佤族布朗族傣族自治县',
            zipCode: '677300',
            child: null
          },
          {
            id: 530926,
            pid: 530900,
            type: 3,
            name: '耿马傣族佤族自治县',
            zipCode: '677500',
            child: null
          },
          {
            id: 530927,
            pid: 530900,
            type: 3,
            name: '沧源佤族自治县',
            zipCode: '677400',
            child: null
          }
        ]
      },
      {
        id: 532300,
        pid: 530000,
        type: 2,
        name: '楚雄彝族自治州',
        zipCode: '675000',
        child: [
          {
            id: 532301,
            pid: 532300,
            type: 3,
            name: '楚雄市',
            zipCode: '675000',
            child: null
          },
          {
            id: 532322,
            pid: 532300,
            type: 3,
            name: '双柏县',
            zipCode: '675100',
            child: null
          },
          {
            id: 532323,
            pid: 532300,
            type: 3,
            name: '牟定县',
            zipCode: '675500',
            child: null
          },
          {
            id: 532324,
            pid: 532300,
            type: 3,
            name: '南华县',
            zipCode: '675200',
            child: null
          },
          {
            id: 532325,
            pid: 532300,
            type: 3,
            name: '姚安县',
            zipCode: '675300',
            child: null
          },
          {
            id: 532326,
            pid: 532300,
            type: 3,
            name: '大姚县',
            zipCode: '675400',
            child: null
          },
          {
            id: 532327,
            pid: 532300,
            type: 3,
            name: '永仁县',
            zipCode: '651400',
            child: null
          },
          {
            id: 532328,
            pid: 532300,
            type: 3,
            name: '元谋县',
            zipCode: '651300',
            child: null
          },
          {
            id: 532329,
            pid: 532300,
            type: 3,
            name: '武定县',
            zipCode: '651600',
            child: null
          },
          {
            id: 532331,
            pid: 532300,
            type: 3,
            name: '禄丰县',
            zipCode: '651200',
            child: null
          }
        ]
      },
      {
        id: 532500,
        pid: 530000,
        type: 2,
        name: '红河哈尼族彝族自治州',
        zipCode: '661400',
        child: [
          {
            id: 532501,
            pid: 532500,
            type: 3,
            name: '个旧市',
            zipCode: '661000',
            child: null
          },
          {
            id: 532502,
            pid: 532500,
            type: 3,
            name: '开远市',
            zipCode: '661600',
            child: null
          },
          {
            id: 532503,
            pid: 532500,
            type: 3,
            name: '蒙自市',
            zipCode: '661101',
            child: null
          },
          {
            id: 532504,
            pid: 532500,
            type: 3,
            name: '弥勒市',
            zipCode: '652300',
            child: null
          },
          {
            id: 532523,
            pid: 532500,
            type: 3,
            name: '屏边苗族自治县',
            zipCode: '661200',
            child: null
          },
          {
            id: 532524,
            pid: 532500,
            type: 3,
            name: '建水县',
            zipCode: '654300',
            child: null
          },
          {
            id: 532525,
            pid: 532500,
            type: 3,
            name: '石屏县',
            zipCode: '662200',
            child: null
          },
          {
            id: 532527,
            pid: 532500,
            type: 3,
            name: '泸西县',
            zipCode: '652400',
            child: null
          },
          {
            id: 532528,
            pid: 532500,
            type: 3,
            name: '元阳县',
            zipCode: '662400',
            child: null
          },
          {
            id: 532529,
            pid: 532500,
            type: 3,
            name: '红河县',
            zipCode: '654400',
            child: null
          },
          {
            id: 532530,
            pid: 532500,
            type: 3,
            name: '金平苗族瑶族傣族自治县',
            zipCode: '661500',
            child: null
          },
          {
            id: 532531,
            pid: 532500,
            type: 3,
            name: '绿春县',
            zipCode: '662500',
            child: null
          },
          {
            id: 532532,
            pid: 532500,
            type: 3,
            name: '河口瑶族自治县',
            zipCode: '661300',
            child: null
          }
        ]
      },
      {
        id: 532600,
        pid: 530000,
        type: 2,
        name: '文山壮族苗族自治州',
        zipCode: '663000',
        child: [
          {
            id: 532601,
            pid: 532600,
            type: 3,
            name: '文山市',
            zipCode: '663000',
            child: null
          },
          {
            id: 532622,
            pid: 532600,
            type: 3,
            name: '砚山县',
            zipCode: '663100',
            child: null
          },
          {
            id: 532623,
            pid: 532600,
            type: 3,
            name: '西畴县',
            zipCode: '663500',
            child: null
          },
          {
            id: 532624,
            pid: 532600,
            type: 3,
            name: '麻栗坡县',
            zipCode: '663600',
            child: null
          },
          {
            id: 532625,
            pid: 532600,
            type: 3,
            name: '马关县',
            zipCode: '663700',
            child: null
          },
          {
            id: 532626,
            pid: 532600,
            type: 3,
            name: '丘北县',
            zipCode: '663200',
            child: null
          },
          {
            id: 532627,
            pid: 532600,
            type: 3,
            name: '广南县',
            zipCode: '663300',
            child: null
          },
          {
            id: 532628,
            pid: 532600,
            type: 3,
            name: '富宁县',
            zipCode: '663400',
            child: null
          }
        ]
      },
      {
        id: 532800,
        pid: 530000,
        type: 2,
        name: '西双版纳傣族自治州',
        zipCode: '666100',
        child: [
          {
            id: 532801,
            pid: 532800,
            type: 3,
            name: '景洪市',
            zipCode: '666100',
            child: null
          },
          {
            id: 532822,
            pid: 532800,
            type: 3,
            name: '勐海县',
            zipCode: '666200',
            child: null
          },
          {
            id: 532823,
            pid: 532800,
            type: 3,
            name: '勐腊县',
            zipCode: '666300',
            child: null
          }
        ]
      },
      {
        id: 532900,
        pid: 530000,
        type: 2,
        name: '大理白族自治州',
        zipCode: '671000',
        child: [
          {
            id: 532901,
            pid: 532900,
            type: 3,
            name: '大理市',
            zipCode: '671000',
            child: null
          },
          {
            id: 532922,
            pid: 532900,
            type: 3,
            name: '漾濞彝族自治县',
            zipCode: '672500',
            child: null
          },
          {
            id: 532923,
            pid: 532900,
            type: 3,
            name: '祥云县',
            zipCode: '672100',
            child: null
          },
          {
            id: 532924,
            pid: 532900,
            type: 3,
            name: '宾川县',
            zipCode: '671600',
            child: null
          },
          {
            id: 532925,
            pid: 532900,
            type: 3,
            name: '弥渡县',
            zipCode: '675600',
            child: null
          },
          {
            id: 532926,
            pid: 532900,
            type: 3,
            name: '南涧彝族自治县',
            zipCode: '675700',
            child: null
          },
          {
            id: 532927,
            pid: 532900,
            type: 3,
            name: '巍山彝族回族自治县',
            zipCode: '672400',
            child: null
          },
          {
            id: 532928,
            pid: 532900,
            type: 3,
            name: '永平县',
            zipCode: '672600',
            child: null
          },
          {
            id: 532929,
            pid: 532900,
            type: 3,
            name: '云龙县',
            zipCode: '672700',
            child: null
          },
          {
            id: 532930,
            pid: 532900,
            type: 3,
            name: '洱源县',
            zipCode: '671200',
            child: null
          },
          {
            id: 532931,
            pid: 532900,
            type: 3,
            name: '剑川县',
            zipCode: '671300',
            child: null
          },
          {
            id: 532932,
            pid: 532900,
            type: 3,
            name: '鹤庆县',
            zipCode: '671500',
            child: null
          }
        ]
      },
      {
        id: 533100,
        pid: 530000,
        type: 2,
        name: '德宏傣族景颇族自治州',
        zipCode: '678400',
        child: [
          {
            id: 533102,
            pid: 533100,
            type: 3,
            name: '瑞丽市',
            zipCode: '678600',
            child: null
          },
          {
            id: 533103,
            pid: 533100,
            type: 3,
            name: '芒市',
            zipCode: '678400',
            child: null
          },
          {
            id: 533122,
            pid: 533100,
            type: 3,
            name: '梁河县',
            zipCode: '679200',
            child: null
          },
          {
            id: 533123,
            pid: 533100,
            type: 3,
            name: '盈江县',
            zipCode: '679300',
            child: null
          },
          {
            id: 533124,
            pid: 533100,
            type: 3,
            name: '陇川县',
            zipCode: '678700',
            child: null
          }
        ]
      },
      {
        id: 533300,
        pid: 530000,
        type: 2,
        name: '怒江傈僳族自治州',
        zipCode: '673100',
        child: [
          {
            id: 533321,
            pid: 533300,
            type: 3,
            name: '泸水县',
            zipCode: '673100',
            child: null
          },
          {
            id: 533323,
            pid: 533300,
            type: 3,
            name: '福贡县',
            zipCode: '673400',
            child: null
          },
          {
            id: 533324,
            pid: 533300,
            type: 3,
            name: '贡山独龙族怒族自治县',
            zipCode: '673500',
            child: null
          },
          {
            id: 533325,
            pid: 533300,
            type: 3,
            name: '兰坪白族普米族自治县',
            zipCode: '671400',
            child: null
          }
        ]
      },
      {
        id: 533400,
        pid: 530000,
        type: 2,
        name: '迪庆藏族自治州',
        zipCode: '674400',
        child: [
          {
            id: 533421,
            pid: 533400,
            type: 3,
            name: '香格里拉市',
            zipCode: '674400',
            child: null
          },
          {
            id: 533422,
            pid: 533400,
            type: 3,
            name: '德钦县',
            zipCode: '674500',
            child: null
          },
          {
            id: 533423,
            pid: 533400,
            type: 3,
            name: '维西傈僳族自治县',
            zipCode: '674600',
            child: null
          }
        ]
      }
    ]
  },
  {
    id: 540000,
    pid: 100000,
    type: 1,
    name: '西藏自治区',
    base: 'xz', //省份简称
    zipCode: '',
    child: [
      {
        id: 540100,
        pid: 540000,
        type: 2,
        name: '拉萨市',
        zipCode: '850000',
        child: [
          {
            id: 540102,
            pid: 540100,
            type: 3,
            name: '城关区',
            zipCode: '850000',
            child: null
          },
          {
            id: 540121,
            pid: 540100,
            type: 3,
            name: '林周县',
            zipCode: '851600',
            child: null
          },
          {
            id: 540122,
            pid: 540100,
            type: 3,
            name: '当雄县',
            zipCode: '851500',
            child: null
          },
          {
            id: 540123,
            pid: 540100,
            type: 3,
            name: '尼木县',
            zipCode: '851300',
            child: null
          },
          {
            id: 540124,
            pid: 540100,
            type: 3,
            name: '曲水县',
            zipCode: '850600',
            child: null
          },
          {
            id: 540125,
            pid: 540100,
            type: 3,
            name: '堆龙德庆县',
            zipCode: '851400',
            child: null
          },
          {
            id: 540126,
            pid: 540100,
            type: 3,
            name: '达孜县',
            zipCode: '850100',
            child: null
          },
          {
            id: 540127,
            pid: 540100,
            type: 3,
            name: '墨竹工卡县',
            zipCode: '850200',
            child: null
          }
        ]
      },
      {
        id: 540200,
        pid: 540000,
        type: 2,
        name: '日喀则市',
        zipCode: '857000',
        child: [
          {
            id: 540202,
            pid: 540200,
            type: 3,
            name: '桑珠孜区',
            zipCode: '857000',
            child: null
          },
          {
            id: 540221,
            pid: 540200,
            type: 3,
            name: '南木林县',
            zipCode: '857100',
            child: null
          },
          {
            id: 540222,
            pid: 540200,
            type: 3,
            name: '江孜县',
            zipCode: '857400',
            child: null
          },
          {
            id: 540223,
            pid: 540200,
            type: 3,
            name: '定日县',
            zipCode: '858200',
            child: null
          },
          {
            id: 540224,
            pid: 540200,
            type: 3,
            name: '萨迦县',
            zipCode: '857800',
            child: null
          },
          {
            id: 540225,
            pid: 540200,
            type: 3,
            name: '拉孜县',
            zipCode: '858100',
            child: null
          },
          {
            id: 540226,
            pid: 540200,
            type: 3,
            name: '昂仁县',
            zipCode: '858500',
            child: null
          },
          {
            id: 540227,
            pid: 540200,
            type: 3,
            name: '谢通门县',
            zipCode: '858900',
            child: null
          },
          {
            id: 540228,
            pid: 540200,
            type: 3,
            name: '白朗县',
            zipCode: '857300',
            child: null
          },
          {
            id: 540229,
            pid: 540200,
            type: 3,
            name: '仁布县',
            zipCode: '857200',
            child: null
          },
          {
            id: 540230,
            pid: 540200,
            type: 3,
            name: '康马县',
            zipCode: '857500',
            child: null
          },
          {
            id: 540231,
            pid: 540200,
            type: 3,
            name: '定结县',
            zipCode: '857900',
            child: null
          },
          {
            id: 540232,
            pid: 540200,
            type: 3,
            name: '仲巴县',
            zipCode: '858800',
            child: null
          },
          {
            id: 540233,
            pid: 540200,
            type: 3,
            name: '亚东县',
            zipCode: '857600',
            child: null
          },
          {
            id: 540234,
            pid: 540200,
            type: 3,
            name: '吉隆县',
            zipCode: '858700',
            child: null
          },
          {
            id: 540235,
            pid: 540200,
            type: 3,
            name: '聂拉木县',
            zipCode: '858300',
            child: null
          },
          {
            id: 540236,
            pid: 540200,
            type: 3,
            name: '萨嘎县',
            zipCode: '857800',
            child: null
          },
          {
            id: 540237,
            pid: 540200,
            type: 3,
            name: '岗巴县',
            zipCode: '857700',
            child: null
          }
        ]
      },
      {
        id: 540300,
        pid: 540000,
        type: 2,
        name: '昌都市',
        zipCode: '854000',
        child: [
          {
            id: 540302,
            pid: 540300,
            type: 3,
            name: '卡若区',
            zipCode: '854000',
            child: null
          },
          {
            id: 540321,
            pid: 540300,
            type: 3,
            name: '江达县',
            zipCode: '854100',
            child: null
          },
          {
            id: 540322,
            pid: 540300,
            type: 3,
            name: '贡觉县',
            zipCode: '854200',
            child: null
          },
          {
            id: 540323,
            pid: 540300,
            type: 3,
            name: '类乌齐县',
            zipCode: '855600',
            child: null
          },
          {
            id: 540324,
            pid: 540300,
            type: 3,
            name: '丁青县',
            zipCode: '855700',
            child: null
          },
          {
            id: 540325,
            pid: 540300,
            type: 3,
            name: '察雅县',
            zipCode: '854300',
            child: null
          },
          {
            id: 540326,
            pid: 540300,
            type: 3,
            name: '八宿县',
            zipCode: '854600',
            child: null
          },
          {
            id: 540327,
            pid: 540300,
            type: 3,
            name: '左贡县',
            zipCode: '854400',
            child: null
          },
          {
            id: 540328,
            pid: 540300,
            type: 3,
            name: '芒康县',
            zipCode: '854500',
            child: null
          },
          {
            id: 540329,
            pid: 540300,
            type: 3,
            name: '洛隆县',
            zipCode: '855400',
            child: null
          },
          {
            id: 540330,
            pid: 540300,
            type: 3,
            name: '边坝县',
            zipCode: '855500',
            child: null
          }
        ]
      },
      {
        id: 542200,
        pid: 540000,
        type: 2,
        name: '山南地区',
        zipCode: '856000',
        child: [
          {
            id: 542221,
            pid: 542200,
            type: 3,
            name: '乃东县',
            zipCode: '856100',
            child: null
          },
          {
            id: 542222,
            pid: 542200,
            type: 3,
            name: '扎囊县',
            zipCode: '850800',
            child: null
          },
          {
            id: 542223,
            pid: 542200,
            type: 3,
            name: '贡嘎县',
            zipCode: '850700',
            child: null
          },
          {
            id: 542224,
            pid: 542200,
            type: 3,
            name: '桑日县',
            zipCode: '856200',
            child: null
          },
          {
            id: 542225,
            pid: 542200,
            type: 3,
            name: '琼结县',
            zipCode: '856800',
            child: null
          },
          {
            id: 542226,
            pid: 542200,
            type: 3,
            name: '曲松县',
            zipCode: '856300',
            child: null
          },
          {
            id: 542227,
            pid: 542200,
            type: 3,
            name: '措美县',
            zipCode: '856900',
            child: null
          },
          {
            id: 542228,
            pid: 542200,
            type: 3,
            name: '洛扎县',
            zipCode: '856600',
            child: null
          },
          {
            id: 542229,
            pid: 542200,
            type: 3,
            name: '加查县',
            zipCode: '856400',
            child: null
          },
          {
            id: 542231,
            pid: 542200,
            type: 3,
            name: '隆子县',
            zipCode: '856600',
            child: null
          },
          {
            id: 542232,
            pid: 542200,
            type: 3,
            name: '错那县',
            zipCode: '856700',
            child: null
          },
          {
            id: 542233,
            pid: 542200,
            type: 3,
            name: '浪卡子县',
            zipCode: '851100',
            child: null
          }
        ]
      },
      {
        id: 542400,
        pid: 540000,
        type: 2,
        name: '那曲地区',
        zipCode: '852000',
        child: [
          {
            id: 542421,
            pid: 542400,
            type: 3,
            name: '那曲县',
            zipCode: '852000',
            child: null
          },
          {
            id: 542422,
            pid: 542400,
            type: 3,
            name: '嘉黎县',
            zipCode: '852400',
            child: null
          },
          {
            id: 542423,
            pid: 542400,
            type: 3,
            name: '比如县',
            zipCode: '852300',
            child: null
          },
          {
            id: 542424,
            pid: 542400,
            type: 3,
            name: '聂荣县',
            zipCode: '853500',
            child: null
          },
          {
            id: 542425,
            pid: 542400,
            type: 3,
            name: '安多县',
            zipCode: '853400',
            child: null
          },
          {
            id: 542426,
            pid: 542400,
            type: 3,
            name: '申扎县',
            zipCode: '853100',
            child: null
          },
          {
            id: 542427,
            pid: 542400,
            type: 3,
            name: '索县',
            zipCode: '852200',
            child: null
          },
          {
            id: 542428,
            pid: 542400,
            type: 3,
            name: '班戈县',
            zipCode: '852500',
            child: null
          },
          {
            id: 542429,
            pid: 542400,
            type: 3,
            name: '巴青县',
            zipCode: '852100',
            child: null
          },
          {
            id: 542430,
            pid: 542400,
            type: 3,
            name: '尼玛县',
            zipCode: '852600',
            child: null
          },
          {
            id: 542431,
            pid: 542400,
            type: 3,
            name: '双湖县',
            zipCode: '852600',
            child: null
          }
        ]
      },
      {
        id: 542500,
        pid: 540000,
        type: 2,
        name: '阿里地区',
        zipCode: '859000',
        child: [
          {
            id: 542521,
            pid: 542500,
            type: 3,
            name: '普兰县',
            zipCode: '859500',
            child: null
          },
          {
            id: 542522,
            pid: 542500,
            type: 3,
            name: '札达县',
            zipCode: '859600',
            child: null
          },
          {
            id: 542523,
            pid: 542500,
            type: 3,
            name: '噶尔县',
            zipCode: '859400',
            child: null
          },
          {
            id: 542524,
            pid: 542500,
            type: 3,
            name: '日土县',
            zipCode: '859700',
            child: null
          },
          {
            id: 542525,
            pid: 542500,
            type: 3,
            name: '革吉县',
            zipCode: '859100',
            child: null
          },
          {
            id: 542526,
            pid: 542500,
            type: 3,
            name: '改则县',
            zipCode: '859200',
            child: null
          },
          {
            id: 542527,
            pid: 542500,
            type: 3,
            name: '措勤县',
            zipCode: '859300',
            child: null
          }
        ]
      },
      {
        id: 542600,
        pid: 540000,
        type: 2,
        name: '林芝地区',
        zipCode: '850400',
        child: [
          {
            id: 542621,
            pid: 542600,
            type: 3,
            name: '林芝县',
            zipCode: '850400',
            child: null
          },
          {
            id: 542622,
            pid: 542600,
            type: 3,
            name: '工布江达县',
            zipCode: '850300',
            child: null
          },
          {
            id: 542623,
            pid: 542600,
            type: 3,
            name: '米林县',
            zipCode: '850500',
            child: null
          },
          {
            id: 542624,
            pid: 542600,
            type: 3,
            name: '墨脱县',
            zipCode: '855300',
            child: null
          },
          {
            id: 542625,
            pid: 542600,
            type: 3,
            name: '波密县',
            zipCode: '855200',
            child: null
          },
          {
            id: 542626,
            pid: 542600,
            type: 3,
            name: '察隅县',
            zipCode: '855100',
            child: null
          },
          {
            id: 542627,
            pid: 542600,
            type: 3,
            name: '朗县',
            zipCode: '856500',
            child: null
          }
        ]
      }
    ]
  },
  {
    id: 610000,
    pid: 100000,
    type: 1,
    name: '陕西省',
    base: 'snx', //省份简称
    zipCode: '',
    child: [
      {
        id: 610100,
        pid: 610000,
        type: 2,
        name: '西安市',
        zipCode: '710003',
        child: [
          {
            id: 610102,
            pid: 610100,
            type: 3,
            name: '新城区',
            zipCode: '710004',
            child: null
          },
          {
            id: 610103,
            pid: 610100,
            type: 3,
            name: '碑林区',
            zipCode: '710001',
            child: null
          },
          {
            id: 610104,
            pid: 610100,
            type: 3,
            name: '莲湖区',
            zipCode: '710003',
            child: null
          },
          {
            id: 610111,
            pid: 610100,
            type: 3,
            name: '灞桥区',
            zipCode: '710038',
            child: null
          },
          {
            id: 610112,
            pid: 610100,
            type: 3,
            name: '未央区',
            zipCode: '710014',
            child: null
          },
          {
            id: 610113,
            pid: 610100,
            type: 3,
            name: '雁塔区',
            zipCode: '710061',
            child: null
          },
          {
            id: 610114,
            pid: 610100,
            type: 3,
            name: '阎良区',
            zipCode: '710087',
            child: null
          },
          {
            id: 610115,
            pid: 610100,
            type: 3,
            name: '临潼区',
            zipCode: '710600',
            child: null
          },
          {
            id: 610116,
            pid: 610100,
            type: 3,
            name: '长安区',
            zipCode: '710100',
            child: null
          },
          {
            id: 610122,
            pid: 610100,
            type: 3,
            name: '蓝田县',
            zipCode: '710500',
            child: null
          },
          {
            id: 610124,
            pid: 610100,
            type: 3,
            name: '周至县',
            zipCode: '710400',
            child: null
          },
          {
            id: 610125,
            pid: 610100,
            type: 3,
            name: '户县',
            zipCode: '710300',
            child: null
          },
          {
            id: 610126,
            pid: 610100,
            type: 3,
            name: '高陵区',
            zipCode: '710200',
            child: null
          }
        ]
      },
      {
        id: 610200,
        pid: 610000,
        type: 2,
        name: '铜川市',
        zipCode: '727100',
        child: [
          {
            id: 610202,
            pid: 610200,
            type: 3,
            name: '王益区',
            zipCode: '727000',
            child: null
          },
          {
            id: 610203,
            pid: 610200,
            type: 3,
            name: '印台区',
            zipCode: '727007',
            child: null
          },
          {
            id: 610204,
            pid: 610200,
            type: 3,
            name: '耀州区',
            zipCode: '727100',
            child: null
          },
          {
            id: 610222,
            pid: 610200,
            type: 3,
            name: '宜君县',
            zipCode: '727200',
            child: null
          }
        ]
      },
      {
        id: 610300,
        pid: 610000,
        type: 2,
        name: '宝鸡市',
        zipCode: '721000',
        child: [
          {
            id: 610302,
            pid: 610300,
            type: 3,
            name: '渭滨区',
            zipCode: '721000',
            child: null
          },
          {
            id: 610303,
            pid: 610300,
            type: 3,
            name: '金台区',
            zipCode: '721000',
            child: null
          },
          {
            id: 610304,
            pid: 610300,
            type: 3,
            name: '陈仓区',
            zipCode: '721300',
            child: null
          },
          {
            id: 610322,
            pid: 610300,
            type: 3,
            name: '凤翔县',
            zipCode: '721400',
            child: null
          },
          {
            id: 610323,
            pid: 610300,
            type: 3,
            name: '岐山县',
            zipCode: '722400',
            child: null
          },
          {
            id: 610324,
            pid: 610300,
            type: 3,
            name: '扶风县',
            zipCode: '722200',
            child: null
          },
          {
            id: 610326,
            pid: 610300,
            type: 3,
            name: '眉县',
            zipCode: '722300',
            child: null
          },
          {
            id: 610327,
            pid: 610300,
            type: 3,
            name: '陇县',
            zipCode: '721200',
            child: null
          },
          {
            id: 610328,
            pid: 610300,
            type: 3,
            name: '千阳县',
            zipCode: '721100',
            child: null
          },
          {
            id: 610329,
            pid: 610300,
            type: 3,
            name: '麟游县',
            zipCode: '721500',
            child: null
          },
          {
            id: 610330,
            pid: 610300,
            type: 3,
            name: '凤县',
            zipCode: '721700',
            child: null
          },
          {
            id: 610331,
            pid: 610300,
            type: 3,
            name: '太白县',
            zipCode: '721600',
            child: null
          }
        ]
      },
      {
        id: 610400,
        pid: 610000,
        type: 2,
        name: '咸阳市',
        zipCode: '712000',
        child: [
          {
            id: 610402,
            pid: 610400,
            type: 3,
            name: '秦都区',
            zipCode: '712000',
            child: null
          },
          {
            id: 610403,
            pid: 610400,
            type: 3,
            name: '杨陵区',
            zipCode: '712100',
            child: null
          },
          {
            id: 610404,
            pid: 610400,
            type: 3,
            name: '渭城区',
            zipCode: '712000',
            child: null
          },
          {
            id: 610422,
            pid: 610400,
            type: 3,
            name: '三原县',
            zipCode: '713800',
            child: null
          },
          {
            id: 610423,
            pid: 610400,
            type: 3,
            name: '泾阳县',
            zipCode: '713700',
            child: null
          },
          {
            id: 610424,
            pid: 610400,
            type: 3,
            name: '乾县',
            zipCode: '713300',
            child: null
          },
          {
            id: 610425,
            pid: 610400,
            type: 3,
            name: '礼泉县',
            zipCode: '713200',
            child: null
          },
          {
            id: 610426,
            pid: 610400,
            type: 3,
            name: '永寿县',
            zipCode: '713400',
            child: null
          },
          {
            id: 610427,
            pid: 610400,
            type: 3,
            name: '彬县',
            zipCode: '713500',
            child: null
          },
          {
            id: 610428,
            pid: 610400,
            type: 3,
            name: '长武县',
            zipCode: '713600',
            child: null
          },
          {
            id: 610429,
            pid: 610400,
            type: 3,
            name: '旬邑县',
            zipCode: '711300',
            child: null
          },
          {
            id: 610430,
            pid: 610400,
            type: 3,
            name: '淳化县',
            zipCode: '711200',
            child: null
          },
          {
            id: 610431,
            pid: 610400,
            type: 3,
            name: '武功县',
            zipCode: '712200',
            child: null
          },
          {
            id: 610481,
            pid: 610400,
            type: 3,
            name: '兴平市',
            zipCode: '713100',
            child: null
          }
        ]
      },
      {
        id: 610500,
        pid: 610000,
        type: 2,
        name: '渭南市',
        zipCode: '714000',
        child: [
          {
            id: 610502,
            pid: 610500,
            type: 3,
            name: '临渭区',
            zipCode: '714000',
            child: null
          },
          {
            id: 610521,
            pid: 610500,
            type: 3,
            name: '华县',
            zipCode: '714100',
            child: null
          },
          {
            id: 610522,
            pid: 610500,
            type: 3,
            name: '潼关县',
            zipCode: '714300',
            child: null
          },
          {
            id: 610523,
            pid: 610500,
            type: 3,
            name: '大荔县',
            zipCode: '715100',
            child: null
          },
          {
            id: 610524,
            pid: 610500,
            type: 3,
            name: '合阳县',
            zipCode: '715300',
            child: null
          },
          {
            id: 610525,
            pid: 610500,
            type: 3,
            name: '澄城县',
            zipCode: '715200',
            child: null
          },
          {
            id: 610526,
            pid: 610500,
            type: 3,
            name: '蒲城县',
            zipCode: '715500',
            child: null
          },
          {
            id: 610527,
            pid: 610500,
            type: 3,
            name: '白水县',
            zipCode: '715600',
            child: null
          },
          {
            id: 610528,
            pid: 610500,
            type: 3,
            name: '富平县',
            zipCode: '711700',
            child: null
          },
          {
            id: 610581,
            pid: 610500,
            type: 3,
            name: '韩城市',
            zipCode: '715400',
            child: null
          },
          {
            id: 610582,
            pid: 610500,
            type: 3,
            name: '华阴市',
            zipCode: '714200',
            child: null
          }
        ]
      },
      {
        id: 610600,
        pid: 610000,
        type: 2,
        name: '延安市',
        zipCode: '716000',
        child: [
          {
            id: 610602,
            pid: 610600,
            type: 3,
            name: '宝塔区',
            zipCode: '716000',
            child: null
          },
          {
            id: 610621,
            pid: 610600,
            type: 3,
            name: '延长县',
            zipCode: '717100',
            child: null
          },
          {
            id: 610622,
            pid: 610600,
            type: 3,
            name: '延川县',
            zipCode: '717200',
            child: null
          },
          {
            id: 610623,
            pid: 610600,
            type: 3,
            name: '子长县',
            zipCode: '717300',
            child: null
          },
          {
            id: 610624,
            pid: 610600,
            type: 3,
            name: '安塞县',
            zipCode: '717400',
            child: null
          },
          {
            id: 610625,
            pid: 610600,
            type: 3,
            name: '志丹县',
            zipCode: '717500',
            child: null
          },
          {
            id: 610626,
            pid: 610600,
            type: 3,
            name: '吴起县',
            zipCode: '717600',
            child: null
          },
          {
            id: 610627,
            pid: 610600,
            type: 3,
            name: '甘泉县',
            zipCode: '716100',
            child: null
          },
          {
            id: 610628,
            pid: 610600,
            type: 3,
            name: '富县',
            zipCode: '727500',
            child: null
          },
          {
            id: 610629,
            pid: 610600,
            type: 3,
            name: '洛川县',
            zipCode: '727400',
            child: null
          },
          {
            id: 610630,
            pid: 610600,
            type: 3,
            name: '宜川县',
            zipCode: '716200',
            child: null
          },
          {
            id: 610631,
            pid: 610600,
            type: 3,
            name: '黄龙县',
            zipCode: '715700',
            child: null
          },
          {
            id: 610632,
            pid: 610600,
            type: 3,
            name: '黄陵县',
            zipCode: '727300',
            child: null
          }
        ]
      },
      {
        id: 610700,
        pid: 610000,
        type: 2,
        name: '汉中市',
        zipCode: '723000',
        child: [
          {
            id: 610702,
            pid: 610700,
            type: 3,
            name: '汉台区',
            zipCode: '723000',
            child: null
          },
          {
            id: 610721,
            pid: 610700,
            type: 3,
            name: '南郑县',
            zipCode: '723100',
            child: null
          },
          {
            id: 610722,
            pid: 610700,
            type: 3,
            name: '城固县',
            zipCode: '723200',
            child: null
          },
          {
            id: 610723,
            pid: 610700,
            type: 3,
            name: '洋县',
            zipCode: '723300',
            child: null
          },
          {
            id: 610724,
            pid: 610700,
            type: 3,
            name: '西乡县',
            zipCode: '723500',
            child: null
          },
          {
            id: 610725,
            pid: 610700,
            type: 3,
            name: '勉县',
            zipCode: '724200',
            child: null
          },
          {
            id: 610726,
            pid: 610700,
            type: 3,
            name: '宁强县',
            zipCode: '724400',
            child: null
          },
          {
            id: 610727,
            pid: 610700,
            type: 3,
            name: '略阳县',
            zipCode: '724300',
            child: null
          },
          {
            id: 610728,
            pid: 610700,
            type: 3,
            name: '镇巴县',
            zipCode: '723600',
            child: null
          },
          {
            id: 610729,
            pid: 610700,
            type: 3,
            name: '留坝县',
            zipCode: '724100',
            child: null
          },
          {
            id: 610730,
            pid: 610700,
            type: 3,
            name: '佛坪县',
            zipCode: '723400',
            child: null
          }
        ]
      },
      {
        id: 610800,
        pid: 610000,
        type: 2,
        name: '榆林市',
        zipCode: '719000',
        child: [
          {
            id: 610802,
            pid: 610800,
            type: 3,
            name: '榆阳区',
            zipCode: '719000',
            child: null
          },
          {
            id: 610821,
            pid: 610800,
            type: 3,
            name: '神木县',
            zipCode: '719300',
            child: null
          },
          {
            id: 610822,
            pid: 610800,
            type: 3,
            name: '府谷县',
            zipCode: '719400',
            child: null
          },
          {
            id: 610823,
            pid: 610800,
            type: 3,
            name: '横山县',
            zipCode: '719100',
            child: null
          },
          {
            id: 610824,
            pid: 610800,
            type: 3,
            name: '靖边县',
            zipCode: '718500',
            child: null
          },
          {
            id: 610825,
            pid: 610800,
            type: 3,
            name: '定边县',
            zipCode: '718600',
            child: null
          },
          {
            id: 610826,
            pid: 610800,
            type: 3,
            name: '绥德县',
            zipCode: '718000',
            child: null
          },
          {
            id: 610827,
            pid: 610800,
            type: 3,
            name: '米脂县',
            zipCode: '718100',
            child: null
          },
          {
            id: 610828,
            pid: 610800,
            type: 3,
            name: '佳县',
            zipCode: '719200',
            child: null
          },
          {
            id: 610829,
            pid: 610800,
            type: 3,
            name: '吴堡县',
            zipCode: '718200',
            child: null
          },
          {
            id: 610830,
            pid: 610800,
            type: 3,
            name: '清涧县',
            zipCode: '718300',
            child: null
          },
          {
            id: 610831,
            pid: 610800,
            type: 3,
            name: '子洲县',
            zipCode: '718400',
            child: null
          }
        ]
      },
      {
        id: 610900,
        pid: 610000,
        type: 2,
        name: '安康市',
        zipCode: '725000',
        child: [
          {
            id: 610902,
            pid: 610900,
            type: 3,
            name: '汉滨区',
            zipCode: '725000',
            child: null
          },
          {
            id: 610921,
            pid: 610900,
            type: 3,
            name: '汉阴县',
            zipCode: '725100',
            child: null
          },
          {
            id: 610922,
            pid: 610900,
            type: 3,
            name: '石泉县',
            zipCode: '725200',
            child: null
          },
          {
            id: 610923,
            pid: 610900,
            type: 3,
            name: '宁陕县',
            zipCode: '711600',
            child: null
          },
          {
            id: 610924,
            pid: 610900,
            type: 3,
            name: '紫阳县',
            zipCode: '725300',
            child: null
          },
          {
            id: 610925,
            pid: 610900,
            type: 3,
            name: '岚皋县',
            zipCode: '725400',
            child: null
          },
          {
            id: 610926,
            pid: 610900,
            type: 3,
            name: '平利县',
            zipCode: '725500',
            child: null
          },
          {
            id: 610927,
            pid: 610900,
            type: 3,
            name: '镇坪县',
            zipCode: '725600',
            child: null
          },
          {
            id: 610928,
            pid: 610900,
            type: 3,
            name: '旬阳县',
            zipCode: '725700',
            child: null
          },
          {
            id: 610929,
            pid: 610900,
            type: 3,
            name: '白河县',
            zipCode: '725800',
            child: null
          }
        ]
      },
      {
        id: 611000,
        pid: 610000,
        type: 2,
        name: '商洛市',
        zipCode: '726000',
        child: [
          {
            id: 611002,
            pid: 611000,
            type: 3,
            name: '商州区',
            zipCode: '726000',
            child: null
          },
          {
            id: 611021,
            pid: 611000,
            type: 3,
            name: '洛南县',
            zipCode: '726100',
            child: null
          },
          {
            id: 611022,
            pid: 611000,
            type: 3,
            name: '丹凤县',
            zipCode: '726200',
            child: null
          },
          {
            id: 611023,
            pid: 611000,
            type: 3,
            name: '商南县',
            zipCode: '726300',
            child: null
          },
          {
            id: 611024,
            pid: 611000,
            type: 3,
            name: '山阳县',
            zipCode: '726400',
            child: null
          },
          {
            id: 611025,
            pid: 611000,
            type: 3,
            name: '镇安县',
            zipCode: '711500',
            child: null
          },
          {
            id: 611026,
            pid: 611000,
            type: 3,
            name: '柞水县',
            zipCode: '711400',
            child: null
          }
        ]
      },
      {
        id: 611100,
        pid: 610000,
        type: 2,
        name: '西咸新区',
        zipCode: '712000',
        child: [
          {
            id: 611101,
            pid: 611100,
            type: 3,
            name: '空港新城',
            zipCode: '461000',
            child: null
          },
          {
            id: 611102,
            pid: 611100,
            type: 3,
            name: '沣东新城',
            zipCode: '710000',
            child: null
          },
          {
            id: 611103,
            pid: 611100,
            type: 3,
            name: '秦汉新城',
            zipCode: '712000',
            child: null
          },
          {
            id: 611104,
            pid: 611100,
            type: 3,
            name: '沣西新城',
            zipCode: '710000',
            child: null
          },
          {
            id: 611105,
            pid: 611100,
            type: 3,
            name: '泾河新城',
            zipCode: '713700',
            child: null
          }
        ]
      }
    ]
  },
  {
    id: 620000,
    pid: 100000,
    type: 1,
    name: '甘肃省',
    base: 'gs', //省份简称
    zipCode: '',
    child: [
      {
        id: 620100,
        pid: 620000,
        type: 2,
        name: '兰州市',
        zipCode: '730030',
        child: [
          {
            id: 620102,
            pid: 620100,
            type: 3,
            name: '城关区',
            zipCode: '730030',
            child: null
          },
          {
            id: 620103,
            pid: 620100,
            type: 3,
            name: '七里河区',
            zipCode: '730050',
            child: null
          },
          {
            id: 620104,
            pid: 620100,
            type: 3,
            name: '西固区',
            zipCode: '730060',
            child: null
          },
          {
            id: 620105,
            pid: 620100,
            type: 3,
            name: '安宁区',
            zipCode: '730070',
            child: null
          },
          {
            id: 620111,
            pid: 620100,
            type: 3,
            name: '红古区',
            zipCode: '730084',
            child: null
          },
          {
            id: 620121,
            pid: 620100,
            type: 3,
            name: '永登县',
            zipCode: '730300',
            child: null
          },
          {
            id: 620122,
            pid: 620100,
            type: 3,
            name: '皋兰县',
            zipCode: '730200',
            child: null
          },
          {
            id: 620123,
            pid: 620100,
            type: 3,
            name: '榆中县',
            zipCode: '730100',
            child: null
          }
        ]
      },
      {
        id: 620200,
        pid: 620000,
        type: 2,
        name: '嘉峪关市',
        zipCode: '735100',
        child: [
          {
            id: 620201,
            pid: 620200,
            type: 3,
            name: '雄关区',
            zipCode: '735100',
            child: null
          },
          {
            id: 620202,
            pid: 620200,
            type: 3,
            name: '长城区',
            zipCode: '735106',
            child: null
          },
          {
            id: 620203,
            pid: 620200,
            type: 3,
            name: '镜铁区',
            zipCode: '735100',
            child: null
          }
        ]
      },
      {
        id: 620300,
        pid: 620000,
        type: 2,
        name: '金昌市',
        zipCode: '737100',
        child: [
          {
            id: 620302,
            pid: 620300,
            type: 3,
            name: '金川区',
            zipCode: '737100',
            child: null
          },
          {
            id: 620321,
            pid: 620300,
            type: 3,
            name: '永昌县',
            zipCode: '737200',
            child: null
          }
        ]
      },
      {
        id: 620400,
        pid: 620000,
        type: 2,
        name: '白银市',
        zipCode: '730900',
        child: [
          {
            id: 620402,
            pid: 620400,
            type: 3,
            name: '白银区',
            zipCode: '730900',
            child: null
          },
          {
            id: 620403,
            pid: 620400,
            type: 3,
            name: '平川区',
            zipCode: '730913',
            child: null
          },
          {
            id: 620421,
            pid: 620400,
            type: 3,
            name: '靖远县',
            zipCode: '730600',
            child: null
          },
          {
            id: 620422,
            pid: 620400,
            type: 3,
            name: '会宁县',
            zipCode: '730700',
            child: null
          },
          {
            id: 620423,
            pid: 620400,
            type: 3,
            name: '景泰县',
            zipCode: '730400',
            child: null
          }
        ]
      },
      {
        id: 620500,
        pid: 620000,
        type: 2,
        name: '天水市',
        zipCode: '741000',
        child: [
          {
            id: 620502,
            pid: 620500,
            type: 3,
            name: '秦州区',
            zipCode: '741000',
            child: null
          },
          {
            id: 620503,
            pid: 620500,
            type: 3,
            name: '麦积区',
            zipCode: '741020',
            child: null
          },
          {
            id: 620521,
            pid: 620500,
            type: 3,
            name: '清水县',
            zipCode: '741400',
            child: null
          },
          {
            id: 620522,
            pid: 620500,
            type: 3,
            name: '秦安县',
            zipCode: '741600',
            child: null
          },
          {
            id: 620523,
            pid: 620500,
            type: 3,
            name: '甘谷县',
            zipCode: '741200',
            child: null
          },
          {
            id: 620524,
            pid: 620500,
            type: 3,
            name: '武山县',
            zipCode: '741300',
            child: null
          },
          {
            id: 620525,
            pid: 620500,
            type: 3,
            name: '张家川回族自治县',
            zipCode: '741500',
            child: null
          }
        ]
      },
      {
        id: 620600,
        pid: 620000,
        type: 2,
        name: '武威市',
        zipCode: '733000',
        child: [
          {
            id: 620602,
            pid: 620600,
            type: 3,
            name: '凉州区',
            zipCode: '733000',
            child: null
          },
          {
            id: 620621,
            pid: 620600,
            type: 3,
            name: '民勤县',
            zipCode: '733300',
            child: null
          },
          {
            id: 620622,
            pid: 620600,
            type: 3,
            name: '古浪县',
            zipCode: '733100',
            child: null
          },
          {
            id: 620623,
            pid: 620600,
            type: 3,
            name: '天祝藏族自治县',
            zipCode: '733200',
            child: null
          }
        ]
      },
      {
        id: 620700,
        pid: 620000,
        type: 2,
        name: '张掖市',
        zipCode: '734000',
        child: [
          {
            id: 620702,
            pid: 620700,
            type: 3,
            name: '甘州区',
            zipCode: '734000',
            child: null
          },
          {
            id: 620721,
            pid: 620700,
            type: 3,
            name: '肃南裕固族自治县',
            zipCode: '734400',
            child: null
          },
          {
            id: 620722,
            pid: 620700,
            type: 3,
            name: '民乐县',
            zipCode: '734500',
            child: null
          },
          {
            id: 620723,
            pid: 620700,
            type: 3,
            name: '临泽县',
            zipCode: '734200',
            child: null
          },
          {
            id: 620724,
            pid: 620700,
            type: 3,
            name: '高台县',
            zipCode: '734300',
            child: null
          },
          {
            id: 620725,
            pid: 620700,
            type: 3,
            name: '山丹县',
            zipCode: '734100',
            child: null
          }
        ]
      },
      {
        id: 620800,
        pid: 620000,
        type: 2,
        name: '平凉市',
        zipCode: '744000',
        child: [
          {
            id: 620802,
            pid: 620800,
            type: 3,
            name: '崆峒区',
            zipCode: '744000',
            child: null
          },
          {
            id: 620821,
            pid: 620800,
            type: 3,
            name: '泾川县',
            zipCode: '744300',
            child: null
          },
          {
            id: 620822,
            pid: 620800,
            type: 3,
            name: '灵台县',
            zipCode: '744400',
            child: null
          },
          {
            id: 620823,
            pid: 620800,
            type: 3,
            name: '崇信县',
            zipCode: '744200',
            child: null
          },
          {
            id: 620824,
            pid: 620800,
            type: 3,
            name: '华亭县',
            zipCode: '744100',
            child: null
          },
          {
            id: 620825,
            pid: 620800,
            type: 3,
            name: '庄浪县',
            zipCode: '744600',
            child: null
          },
          {
            id: 620826,
            pid: 620800,
            type: 3,
            name: '静宁县',
            zipCode: '743400',
            child: null
          }
        ]
      },
      {
        id: 620900,
        pid: 620000,
        type: 2,
        name: '酒泉市',
        zipCode: '735000',
        child: [
          {
            id: 620902,
            pid: 620900,
            type: 3,
            name: '肃州区',
            zipCode: '735000',
            child: null
          },
          {
            id: 620921,
            pid: 620900,
            type: 3,
            name: '金塔县',
            zipCode: '735300',
            child: null
          },
          {
            id: 620922,
            pid: 620900,
            type: 3,
            name: '瓜州县',
            zipCode: '736100',
            child: null
          },
          {
            id: 620923,
            pid: 620900,
            type: 3,
            name: '肃北蒙古族自治县',
            zipCode: '736300',
            child: null
          },
          {
            id: 620924,
            pid: 620900,
            type: 3,
            name: '阿克塞哈萨克族自治县',
            zipCode: '736400',
            child: null
          },
          {
            id: 620981,
            pid: 620900,
            type: 3,
            name: '玉门市',
            zipCode: '735200',
            child: null
          },
          {
            id: 620982,
            pid: 620900,
            type: 3,
            name: '敦煌市',
            zipCode: '736200',
            child: null
          }
        ]
      },
      {
        id: 621000,
        pid: 620000,
        type: 2,
        name: '庆阳市',
        zipCode: '745000',
        child: [
          {
            id: 621002,
            pid: 621000,
            type: 3,
            name: '西峰区',
            zipCode: '745000',
            child: null
          },
          {
            id: 621021,
            pid: 621000,
            type: 3,
            name: '庆城县',
            zipCode: '745100',
            child: null
          },
          {
            id: 621022,
            pid: 621000,
            type: 3,
            name: '环县',
            zipCode: '745700',
            child: null
          },
          {
            id: 621023,
            pid: 621000,
            type: 3,
            name: '华池县',
            zipCode: '745600',
            child: null
          },
          {
            id: 621024,
            pid: 621000,
            type: 3,
            name: '合水县',
            zipCode: '745400',
            child: null
          },
          {
            id: 621025,
            pid: 621000,
            type: 3,
            name: '正宁县',
            zipCode: '745300',
            child: null
          },
          {
            id: 621026,
            pid: 621000,
            type: 3,
            name: '宁县',
            zipCode: '745200',
            child: null
          },
          {
            id: 621027,
            pid: 621000,
            type: 3,
            name: '镇原县',
            zipCode: '744500',
            child: null
          }
        ]
      },
      {
        id: 621100,
        pid: 620000,
        type: 2,
        name: '定西市',
        zipCode: '743000',
        child: [
          {
            id: 621102,
            pid: 621100,
            type: 3,
            name: '安定区',
            zipCode: '743000',
            child: null
          },
          {
            id: 621121,
            pid: 621100,
            type: 3,
            name: '通渭县',
            zipCode: '743300',
            child: null
          },
          {
            id: 621122,
            pid: 621100,
            type: 3,
            name: '陇西县',
            zipCode: '748100',
            child: null
          },
          {
            id: 621123,
            pid: 621100,
            type: 3,
            name: '渭源县',
            zipCode: '748200',
            child: null
          },
          {
            id: 621124,
            pid: 621100,
            type: 3,
            name: '临洮县',
            zipCode: '730500',
            child: null
          },
          {
            id: 621125,
            pid: 621100,
            type: 3,
            name: '漳县',
            zipCode: '748300',
            child: null
          },
          {
            id: 621126,
            pid: 621100,
            type: 3,
            name: '岷县',
            zipCode: '748400',
            child: null
          }
        ]
      },
      {
        id: 621200,
        pid: 620000,
        type: 2,
        name: '陇南市',
        zipCode: '746000',
        child: [
          {
            id: 621202,
            pid: 621200,
            type: 3,
            name: '武都区',
            zipCode: '746000',
            child: null
          },
          {
            id: 621221,
            pid: 621200,
            type: 3,
            name: '成县',
            zipCode: '742500',
            child: null
          },
          {
            id: 621222,
            pid: 621200,
            type: 3,
            name: '文县',
            zipCode: '746400',
            child: null
          },
          {
            id: 621223,
            pid: 621200,
            type: 3,
            name: '宕昌县',
            zipCode: '748500',
            child: null
          },
          {
            id: 621224,
            pid: 621200,
            type: 3,
            name: '康县',
            zipCode: '746500',
            child: null
          },
          {
            id: 621225,
            pid: 621200,
            type: 3,
            name: '西和县',
            zipCode: '742100',
            child: null
          },
          {
            id: 621226,
            pid: 621200,
            type: 3,
            name: '礼县',
            zipCode: '742200',
            child: null
          },
          {
            id: 621227,
            pid: 621200,
            type: 3,
            name: '徽县',
            zipCode: '742300',
            child: null
          },
          {
            id: 621228,
            pid: 621200,
            type: 3,
            name: '两当县',
            zipCode: '742400',
            child: null
          }
        ]
      },
      {
        id: 622900,
        pid: 620000,
        type: 2,
        name: '临夏回族自治州',
        zipCode: '731100',
        child: [
          {
            id: 622901,
            pid: 622900,
            type: 3,
            name: '临夏市',
            zipCode: '731100',
            child: null
          },
          {
            id: 622921,
            pid: 622900,
            type: 3,
            name: '临夏县',
            zipCode: '731800',
            child: null
          },
          {
            id: 622922,
            pid: 622900,
            type: 3,
            name: '康乐县',
            zipCode: '731500',
            child: null
          },
          {
            id: 622923,
            pid: 622900,
            type: 3,
            name: '永靖县',
            zipCode: '731600',
            child: null
          },
          {
            id: 622924,
            pid: 622900,
            type: 3,
            name: '广河县',
            zipCode: '731300',
            child: null
          },
          {
            id: 622925,
            pid: 622900,
            type: 3,
            name: '和政县',
            zipCode: '731200',
            child: null
          },
          {
            id: 622926,
            pid: 622900,
            type: 3,
            name: '东乡族自治县',
            zipCode: '731400',
            child: null
          },
          {
            id: 622927,
            pid: 622900,
            type: 3,
            name: '积石山保安族东乡族撒拉族自治县',
            zipCode: '731700',
            child: null
          }
        ]
      },
      {
        id: 623000,
        pid: 620000,
        type: 2,
        name: '甘南藏族自治州',
        zipCode: '747000',
        child: [
          {
            id: 623001,
            pid: 623000,
            type: 3,
            name: '合作市',
            zipCode: '747000',
            child: null
          },
          {
            id: 623021,
            pid: 623000,
            type: 3,
            name: '临潭县',
            zipCode: '747500',
            child: null
          },
          {
            id: 623022,
            pid: 623000,
            type: 3,
            name: '卓尼县',
            zipCode: '747600',
            child: null
          },
          {
            id: 623023,
            pid: 623000,
            type: 3,
            name: '舟曲县',
            zipCode: '746300',
            child: null
          },
          {
            id: 623024,
            pid: 623000,
            type: 3,
            name: '迭部县',
            zipCode: '747400',
            child: null
          },
          {
            id: 623025,
            pid: 623000,
            type: 3,
            name: '玛曲县',
            zipCode: '747300',
            child: null
          },
          {
            id: 623026,
            pid: 623000,
            type: 3,
            name: '碌曲县',
            zipCode: '747200',
            child: null
          },
          {
            id: 623027,
            pid: 623000,
            type: 3,
            name: '夏河县',
            zipCode: '747100',
            child: null
          }
        ]
      }
    ]
  },
  {
    id: 630000,
    pid: 100000,
    type: 1,
    name: '青海省',
    base: 'qh', //省份简称
    zipCode: '',
    child: [
      {
        id: 630100,
        pid: 630000,
        type: 2,
        name: '西宁市',
        zipCode: '810000',
        child: [
          {
            id: 630102,
            pid: 630100,
            type: 3,
            name: '城东区',
            zipCode: '810007',
            child: null
          },
          {
            id: 630103,
            pid: 630100,
            type: 3,
            name: '城中区',
            zipCode: '810000',
            child: null
          },
          {
            id: 630104,
            pid: 630100,
            type: 3,
            name: '城西区',
            zipCode: '810001',
            child: null
          },
          {
            id: 630105,
            pid: 630100,
            type: 3,
            name: '城北区',
            zipCode: '810003',
            child: null
          },
          {
            id: 630121,
            pid: 630100,
            type: 3,
            name: '大通回族土族自治县',
            zipCode: '810100',
            child: null
          },
          {
            id: 630122,
            pid: 630100,
            type: 3,
            name: '湟中县',
            zipCode: '811600',
            child: null
          },
          {
            id: 630123,
            pid: 630100,
            type: 3,
            name: '湟源县',
            zipCode: '812100',
            child: null
          }
        ]
      },
      {
        id: 630200,
        pid: 630000,
        type: 2,
        name: '海东市',
        zipCode: '810700',
        child: [
          {
            id: 630202,
            pid: 630200,
            type: 3,
            name: '乐都区',
            zipCode: '810700',
            child: null
          },
          {
            id: 630221,
            pid: 630200,
            type: 3,
            name: '平安县',
            zipCode: '810600',
            child: null
          },
          {
            id: 630222,
            pid: 630200,
            type: 3,
            name: '民和回族土族自治县',
            zipCode: '810800',
            child: null
          },
          {
            id: 630223,
            pid: 630200,
            type: 3,
            name: '互助土族自治县',
            zipCode: '810500',
            child: null
          },
          {
            id: 630224,
            pid: 630200,
            type: 3,
            name: '化隆回族自治县',
            zipCode: '810900',
            child: null
          },
          {
            id: 630225,
            pid: 630200,
            type: 3,
            name: '循化撒拉族自治县',
            zipCode: '811100',
            child: null
          }
        ]
      },
      {
        id: 632200,
        pid: 630000,
        type: 2,
        name: '海北藏族自治州',
        zipCode: '812200',
        child: [
          {
            id: 632221,
            pid: 632200,
            type: 3,
            name: '门源回族自治县',
            zipCode: '810300',
            child: null
          },
          {
            id: 632222,
            pid: 632200,
            type: 3,
            name: '祁连县',
            zipCode: '810400',
            child: null
          },
          {
            id: 632223,
            pid: 632200,
            type: 3,
            name: '海晏县',
            zipCode: '812200',
            child: null
          },
          {
            id: 632224,
            pid: 632200,
            type: 3,
            name: '刚察县',
            zipCode: '812300',
            child: null
          }
        ]
      },
      {
        id: 632300,
        pid: 630000,
        type: 2,
        name: '黄南藏族自治州',
        zipCode: '811300',
        child: [
          {
            id: 632321,
            pid: 632300,
            type: 3,
            name: '同仁县',
            zipCode: '811300',
            child: null
          },
          {
            id: 632322,
            pid: 632300,
            type: 3,
            name: '尖扎县',
            zipCode: '811200',
            child: null
          },
          {
            id: 632323,
            pid: 632300,
            type: 3,
            name: '泽库县',
            zipCode: '811400',
            child: null
          },
          {
            id: 632324,
            pid: 632300,
            type: 3,
            name: '河南蒙古族自治县',
            zipCode: '811500',
            child: null
          }
        ]
      },
      {
        id: 632500,
        pid: 630000,
        type: 2,
        name: '海南藏族自治州',
        zipCode: '813000',
        child: [
          {
            id: 632521,
            pid: 632500,
            type: 3,
            name: '共和县',
            zipCode: '813000',
            child: null
          },
          {
            id: 632522,
            pid: 632500,
            type: 3,
            name: '同德县',
            zipCode: '813200',
            child: null
          },
          {
            id: 632523,
            pid: 632500,
            type: 3,
            name: '贵德县',
            zipCode: '811700',
            child: null
          },
          {
            id: 632524,
            pid: 632500,
            type: 3,
            name: '兴海县',
            zipCode: '813300',
            child: null
          },
          {
            id: 632525,
            pid: 632500,
            type: 3,
            name: '贵南县',
            zipCode: '813100',
            child: null
          }
        ]
      },
      {
        id: 632600,
        pid: 630000,
        type: 2,
        name: '果洛藏族自治州',
        zipCode: '814000',
        child: [
          {
            id: 632621,
            pid: 632600,
            type: 3,
            name: '玛沁县',
            zipCode: '814000',
            child: null
          },
          {
            id: 632622,
            pid: 632600,
            type: 3,
            name: '班玛县',
            zipCode: '814300',
            child: null
          },
          {
            id: 632623,
            pid: 632600,
            type: 3,
            name: '甘德县',
            zipCode: '814100',
            child: null
          },
          {
            id: 632624,
            pid: 632600,
            type: 3,
            name: '达日县',
            zipCode: '814200',
            child: null
          },
          {
            id: 632625,
            pid: 632600,
            type: 3,
            name: '久治县',
            zipCode: '624700',
            child: null
          },
          {
            id: 632626,
            pid: 632600,
            type: 3,
            name: '玛多县',
            zipCode: '813500',
            child: null
          }
        ]
      },
      {
        id: 632700,
        pid: 630000,
        type: 2,
        name: '玉树藏族自治州',
        zipCode: '815000',
        child: [
          {
            id: 632701,
            pid: 632700,
            type: 3,
            name: '玉树市',
            zipCode: '815000',
            child: null
          },
          {
            id: 632722,
            pid: 632700,
            type: 3,
            name: '杂多县',
            zipCode: '815300',
            child: null
          },
          {
            id: 632723,
            pid: 632700,
            type: 3,
            name: '称多县',
            zipCode: '815100',
            child: null
          },
          {
            id: 632724,
            pid: 632700,
            type: 3,
            name: '治多县',
            zipCode: '815400',
            child: null
          },
          {
            id: 632725,
            pid: 632700,
            type: 3,
            name: '囊谦县',
            zipCode: '815200',
            child: null
          },
          {
            id: 632726,
            pid: 632700,
            type: 3,
            name: '曲麻莱县',
            zipCode: '815500',
            child: null
          }
        ]
      },
      {
        id: 632800,
        pid: 630000,
        type: 2,
        name: '海西蒙古族藏族自治州',
        zipCode: '817000',
        child: [
          {
            id: 632801,
            pid: 632800,
            type: 3,
            name: '格尔木市',
            zipCode: '816000',
            child: null
          },
          {
            id: 632802,
            pid: 632800,
            type: 3,
            name: '德令哈市',
            zipCode: '817000',
            child: null
          },
          {
            id: 632821,
            pid: 632800,
            type: 3,
            name: '乌兰县',
            zipCode: '817100',
            child: null
          },
          {
            id: 632822,
            pid: 632800,
            type: 3,
            name: '都兰县',
            zipCode: '816100',
            child: null
          },
          {
            id: 632823,
            pid: 632800,
            type: 3,
            name: '天峻县',
            zipCode: '817200',
            child: null
          }
        ]
      }
    ]
  },
  {
    id: 640000,
    pid: 100000,
    type: 1,
    name: '宁夏回族自治区',
    base: 'nx', //省份简称
    zipCode: '',
    child: [
      {
        id: 640100,
        pid: 640000,
        type: 2,
        name: '银川市',
        zipCode: '750004',
        child: [
          {
            id: 640104,
            pid: 640100,
            type: 3,
            name: '兴庆区',
            zipCode: '750001',
            child: null
          },
          {
            id: 640105,
            pid: 640100,
            type: 3,
            name: '西夏区',
            zipCode: '750021',
            child: null
          },
          {
            id: 640106,
            pid: 640100,
            type: 3,
            name: '金凤区',
            zipCode: '750011',
            child: null
          },
          {
            id: 640121,
            pid: 640100,
            type: 3,
            name: '永宁县',
            zipCode: '750100',
            child: null
          },
          {
            id: 640122,
            pid: 640100,
            type: 3,
            name: '贺兰县',
            zipCode: '750200',
            child: null
          },
          {
            id: 640181,
            pid: 640100,
            type: 3,
            name: '灵武市',
            zipCode: '750004',
            child: null
          }
        ]
      },
      {
        id: 640200,
        pid: 640000,
        type: 2,
        name: '石嘴山市',
        zipCode: '753000',
        child: [
          {
            id: 640202,
            pid: 640200,
            type: 3,
            name: '大武口区',
            zipCode: '753000',
            child: null
          },
          {
            id: 640205,
            pid: 640200,
            type: 3,
            name: '惠农区',
            zipCode: '753600',
            child: null
          },
          {
            id: 640221,
            pid: 640200,
            type: 3,
            name: '平罗县',
            zipCode: '753400',
            child: null
          }
        ]
      },
      {
        id: 640300,
        pid: 640000,
        type: 2,
        name: '吴忠市',
        zipCode: '751100',
        child: [
          {
            id: 640302,
            pid: 640300,
            type: 3,
            name: '利通区',
            zipCode: '751100',
            child: null
          },
          {
            id: 640303,
            pid: 640300,
            type: 3,
            name: '红寺堡区',
            zipCode: '751900',
            child: null
          },
          {
            id: 640323,
            pid: 640300,
            type: 3,
            name: '盐池县',
            zipCode: '751500',
            child: null
          },
          {
            id: 640324,
            pid: 640300,
            type: 3,
            name: '同心县',
            zipCode: '751300',
            child: null
          },
          {
            id: 640381,
            pid: 640300,
            type: 3,
            name: '青铜峡市',
            zipCode: '751600',
            child: null
          }
        ]
      },
      {
        id: 640400,
        pid: 640000,
        type: 2,
        name: '固原市',
        zipCode: '756000',
        child: [
          {
            id: 640402,
            pid: 640400,
            type: 3,
            name: '原州区',
            zipCode: '756000',
            child: null
          },
          {
            id: 640422,
            pid: 640400,
            type: 3,
            name: '西吉县',
            zipCode: '756200',
            child: null
          },
          {
            id: 640423,
            pid: 640400,
            type: 3,
            name: '隆德县',
            zipCode: '756300',
            child: null
          },
          {
            id: 640424,
            pid: 640400,
            type: 3,
            name: '泾源县',
            zipCode: '756400',
            child: null
          },
          {
            id: 640425,
            pid: 640400,
            type: 3,
            name: '彭阳县',
            zipCode: '756500',
            child: null
          }
        ]
      },
      {
        id: 640500,
        pid: 640000,
        type: 2,
        name: '中卫市',
        zipCode: '751700',
        child: [
          {
            id: 640502,
            pid: 640500,
            type: 3,
            name: '沙坡头区',
            zipCode: '755000',
            child: null
          },
          {
            id: 640521,
            pid: 640500,
            type: 3,
            name: '中宁县',
            zipCode: '751200',
            child: null
          },
          {
            id: 640522,
            pid: 640500,
            type: 3,
            name: '海原县',
            zipCode: '751800',
            child: null
          }
        ]
      }
    ]
  },
  {
    id: 650000,
    pid: 100000,
    type: 1,
    name: '新疆维吾尔自治区',
    base: 'xj', //省份简称
    zipCode: '',
    child: [
      {
        id: 650100,
        pid: 650000,
        type: 2,
        name: '乌鲁木齐市',
        zipCode: '830002',
        child: [
          {
            id: 650102,
            pid: 650100,
            type: 3,
            name: '天山区',
            zipCode: '830002',
            child: null
          },
          {
            id: 650103,
            pid: 650100,
            type: 3,
            name: '沙依巴克区',
            zipCode: '830000',
            child: null
          },
          {
            id: 650104,
            pid: 650100,
            type: 3,
            name: '新市区',
            zipCode: '830011',
            child: null
          },
          {
            id: 650105,
            pid: 650100,
            type: 3,
            name: '水磨沟区',
            zipCode: '830017',
            child: null
          },
          {
            id: 650106,
            pid: 650100,
            type: 3,
            name: '头屯河区',
            zipCode: '830022',
            child: null
          },
          {
            id: 650107,
            pid: 650100,
            type: 3,
            name: '达坂城区',
            zipCode: '830039',
            child: null
          },
          {
            id: 650109,
            pid: 650100,
            type: 3,
            name: '米东区',
            zipCode: '830019',
            child: null
          },
          {
            id: 650121,
            pid: 650100,
            type: 3,
            name: '乌鲁木齐县',
            zipCode: '830063',
            child: null
          }
        ]
      },
      {
        id: 650200,
        pid: 650000,
        type: 2,
        name: '克拉玛依市',
        zipCode: '834000',
        child: [
          {
            id: 650202,
            pid: 650200,
            type: 3,
            name: '独山子区',
            zipCode: '834021',
            child: null
          },
          {
            id: 650203,
            pid: 650200,
            type: 3,
            name: '克拉玛依区',
            zipCode: '834000',
            child: null
          },
          {
            id: 650204,
            pid: 650200,
            type: 3,
            name: '白碱滩区',
            zipCode: '834008',
            child: null
          },
          {
            id: 650205,
            pid: 650200,
            type: 3,
            name: '乌尔禾区',
            zipCode: '834012',
            child: null
          }
        ]
      },
      {
        id: 652100,
        pid: 650000,
        type: 2,
        name: '吐鲁番地区',
        zipCode: '838000',
        child: [
          {
            id: 652101,
            pid: 652100,
            type: 3,
            name: '吐鲁番市',
            zipCode: '838000',
            child: null
          },
          {
            id: 652122,
            pid: 652100,
            type: 3,
            name: '鄯善县',
            zipCode: '838200',
            child: null
          },
          {
            id: 652123,
            pid: 652100,
            type: 3,
            name: '托克逊县',
            zipCode: '838100',
            child: null
          }
        ]
      },
      {
        id: 652200,
        pid: 650000,
        type: 2,
        name: '哈密地区',
        zipCode: '839000',
        child: [
          {
            id: 652201,
            pid: 652200,
            type: 3,
            name: '哈密市',
            zipCode: '839000',
            child: null
          },
          {
            id: 652222,
            pid: 652200,
            type: 3,
            name: '巴里坤哈萨克自治县',
            zipCode: '839200',
            child: null
          },
          {
            id: 652223,
            pid: 652200,
            type: 3,
            name: '伊吾县',
            zipCode: '839300',
            child: null
          }
        ]
      },
      {
        id: 652300,
        pid: 650000,
        type: 2,
        name: '昌吉回族自治州',
        zipCode: '831100',
        child: [
          {
            id: 652301,
            pid: 652300,
            type: 3,
            name: '昌吉市',
            zipCode: '831100',
            child: null
          },
          {
            id: 652302,
            pid: 652300,
            type: 3,
            name: '阜康市',
            zipCode: '831500',
            child: null
          },
          {
            id: 652323,
            pid: 652300,
            type: 3,
            name: '呼图壁县',
            zipCode: '831200',
            child: null
          },
          {
            id: 652324,
            pid: 652300,
            type: 3,
            name: '玛纳斯县',
            zipCode: '832200',
            child: null
          },
          {
            id: 652325,
            pid: 652300,
            type: 3,
            name: '奇台县',
            zipCode: '831800',
            child: null
          },
          {
            id: 652327,
            pid: 652300,
            type: 3,
            name: '吉木萨尔县',
            zipCode: '831700',
            child: null
          },
          {
            id: 652328,
            pid: 652300,
            type: 3,
            name: '木垒哈萨克自治县',
            zipCode: '831900',
            child: null
          }
        ]
      },
      {
        id: 652700,
        pid: 650000,
        type: 2,
        name: '博尔塔拉蒙古自治州',
        zipCode: '833400',
        child: [
          {
            id: 652701,
            pid: 652700,
            type: 3,
            name: '博乐市',
            zipCode: '833400',
            child: null
          },
          {
            id: 652702,
            pid: 652700,
            type: 3,
            name: '阿拉山口市',
            zipCode: '833400',
            child: null
          },
          {
            id: 652722,
            pid: 652700,
            type: 3,
            name: '精河县',
            zipCode: '833300',
            child: null
          },
          {
            id: 652723,
            pid: 652700,
            type: 3,
            name: '温泉县',
            zipCode: '833500',
            child: null
          }
        ]
      },
      {
        id: 652800,
        pid: 650000,
        type: 2,
        name: '巴音郭楞蒙古自治州',
        zipCode: '841000',
        child: [
          {
            id: 652801,
            pid: 652800,
            type: 3,
            name: '库尔勒市',
            zipCode: '841000',
            child: null
          },
          {
            id: 652822,
            pid: 652800,
            type: 3,
            name: '轮台县',
            zipCode: '841600',
            child: null
          },
          {
            id: 652823,
            pid: 652800,
            type: 3,
            name: '尉犁县',
            zipCode: '841500',
            child: null
          },
          {
            id: 652824,
            pid: 652800,
            type: 3,
            name: '若羌县',
            zipCode: '841800',
            child: null
          },
          {
            id: 652825,
            pid: 652800,
            type: 3,
            name: '且末县',
            zipCode: '841900',
            child: null
          },
          {
            id: 652826,
            pid: 652800,
            type: 3,
            name: '焉耆回族自治县',
            zipCode: '841100',
            child: null
          },
          {
            id: 652827,
            pid: 652800,
            type: 3,
            name: '和静县',
            zipCode: '841300',
            child: null
          },
          {
            id: 652828,
            pid: 652800,
            type: 3,
            name: '和硕县',
            zipCode: '841200',
            child: null
          },
          {
            id: 652829,
            pid: 652800,
            type: 3,
            name: '博湖县',
            zipCode: '841400',
            child: null
          }
        ]
      },
      {
        id: 652900,
        pid: 650000,
        type: 2,
        name: '阿克苏地区',
        zipCode: '843000',
        child: [
          {
            id: 652901,
            pid: 652900,
            type: 3,
            name: '阿克苏市',
            zipCode: '843000',
            child: null
          },
          {
            id: 652922,
            pid: 652900,
            type: 3,
            name: '温宿县',
            zipCode: '843100',
            child: null
          },
          {
            id: 652923,
            pid: 652900,
            type: 3,
            name: '库车县',
            zipCode: '842000',
            child: null
          },
          {
            id: 652924,
            pid: 652900,
            type: 3,
            name: '沙雅县',
            zipCode: '842200',
            child: null
          },
          {
            id: 652925,
            pid: 652900,
            type: 3,
            name: '新和县',
            zipCode: '842100',
            child: null
          },
          {
            id: 652926,
            pid: 652900,
            type: 3,
            name: '拜城县',
            zipCode: '842300',
            child: null
          },
          {
            id: 652927,
            pid: 652900,
            type: 3,
            name: '乌什县',
            zipCode: '843400',
            child: null
          },
          {
            id: 652928,
            pid: 652900,
            type: 3,
            name: '阿瓦提县',
            zipCode: '843200',
            child: null
          },
          {
            id: 652929,
            pid: 652900,
            type: 3,
            name: '柯坪县',
            zipCode: '843600',
            child: null
          }
        ]
      },
      {
        id: 653000,
        pid: 650000,
        type: 2,
        name: '克孜勒苏柯尔克孜自治州',
        zipCode: '845350',
        child: [
          {
            id: 653001,
            pid: 653000,
            type: 3,
            name: '阿图什市',
            zipCode: '845350',
            child: null
          },
          {
            id: 653022,
            pid: 653000,
            type: 3,
            name: '阿克陶县',
            zipCode: '845550',
            child: null
          },
          {
            id: 653023,
            pid: 653000,
            type: 3,
            name: '阿合奇县',
            zipCode: '843500',
            child: null
          },
          {
            id: 653024,
            pid: 653000,
            type: 3,
            name: '乌恰县',
            zipCode: '845450',
            child: null
          }
        ]
      },
      {
        id: 653100,
        pid: 650000,
        type: 2,
        name: '喀什地区',
        zipCode: '844000',
        child: [
          {
            id: 653101,
            pid: 653100,
            type: 3,
            name: '喀什市',
            zipCode: '844000',
            child: null
          },
          {
            id: 653121,
            pid: 653100,
            type: 3,
            name: '疏附县',
            zipCode: '844100',
            child: null
          },
          {
            id: 653122,
            pid: 653100,
            type: 3,
            name: '疏勒县',
            zipCode: '844200',
            child: null
          },
          {
            id: 653123,
            pid: 653100,
            type: 3,
            name: '英吉沙县',
            zipCode: '844500',
            child: null
          },
          {
            id: 653124,
            pid: 653100,
            type: 3,
            name: '泽普县',
            zipCode: '844800',
            child: null
          },
          {
            id: 653125,
            pid: 653100,
            type: 3,
            name: '莎车县',
            zipCode: '844700',
            child: null
          },
          {
            id: 653126,
            pid: 653100,
            type: 3,
            name: '叶城县',
            zipCode: '844900',
            child: null
          },
          {
            id: 653127,
            pid: 653100,
            type: 3,
            name: '麦盖提县',
            zipCode: '844600',
            child: null
          },
          {
            id: 653128,
            pid: 653100,
            type: 3,
            name: '岳普湖县',
            zipCode: '844400',
            child: null
          },
          {
            id: 653129,
            pid: 653100,
            type: 3,
            name: '伽师县',
            zipCode: '844300',
            child: null
          },
          {
            id: 653130,
            pid: 653100,
            type: 3,
            name: '巴楚县',
            zipCode: '843800',
            child: null
          },
          {
            id: 653131,
            pid: 653100,
            type: 3,
            name: '塔什库尔干塔吉克自治县',
            zipCode: '845250',
            child: null
          }
        ]
      },
      {
        id: 653200,
        pid: 650000,
        type: 2,
        name: '和田地区',
        zipCode: '848000',
        child: [
          {
            id: 653201,
            pid: 653200,
            type: 3,
            name: '和田市',
            zipCode: '848000',
            child: null
          },
          {
            id: 653221,
            pid: 653200,
            type: 3,
            name: '和田县',
            zipCode: '848000',
            child: null
          },
          {
            id: 653222,
            pid: 653200,
            type: 3,
            name: '墨玉县',
            zipCode: '848100',
            child: null
          },
          {
            id: 653223,
            pid: 653200,
            type: 3,
            name: '皮山县',
            zipCode: '845150',
            child: null
          },
          {
            id: 653224,
            pid: 653200,
            type: 3,
            name: '洛浦县',
            zipCode: '848200',
            child: null
          },
          {
            id: 653225,
            pid: 653200,
            type: 3,
            name: '策勒县',
            zipCode: '848300',
            child: null
          },
          {
            id: 653226,
            pid: 653200,
            type: 3,
            name: '于田县',
            zipCode: '848400',
            child: null
          },
          {
            id: 653227,
            pid: 653200,
            type: 3,
            name: '民丰县',
            zipCode: '848500',
            child: null
          }
        ]
      },
      {
        id: 654000,
        pid: 650000,
        type: 2,
        name: '伊犁哈萨克自治州',
        zipCode: '835100',
        child: [
          {
            id: 654002,
            pid: 654000,
            type: 3,
            name: '伊宁市',
            zipCode: '835000',
            child: null
          },
          {
            id: 654003,
            pid: 654000,
            type: 3,
            name: '奎屯市',
            zipCode: '833200',
            child: null
          },
          {
            id: 654004,
            pid: 654000,
            type: 3,
            name: '霍尔果斯市',
            zipCode: '835221',
            child: null
          },
          {
            id: 654021,
            pid: 654000,
            type: 3,
            name: '伊宁县',
            zipCode: '835100',
            child: null
          },
          {
            id: 654022,
            pid: 654000,
            type: 3,
            name: '察布查尔锡伯自治县',
            zipCode: '835300',
            child: null
          },
          {
            id: 654023,
            pid: 654000,
            type: 3,
            name: '霍城县',
            zipCode: '835200',
            child: null
          },
          {
            id: 654024,
            pid: 654000,
            type: 3,
            name: '巩留县',
            zipCode: '835400',
            child: null
          },
          {
            id: 654025,
            pid: 654000,
            type: 3,
            name: '新源县',
            zipCode: '835800',
            child: null
          },
          {
            id: 654026,
            pid: 654000,
            type: 3,
            name: '昭苏县',
            zipCode: '835600',
            child: null
          },
          {
            id: 654027,
            pid: 654000,
            type: 3,
            name: '特克斯县',
            zipCode: '835500',
            child: null
          },
          {
            id: 654028,
            pid: 654000,
            type: 3,
            name: '尼勒克县',
            zipCode: '835700',
            child: null
          }
        ]
      },
      {
        id: 654200,
        pid: 650000,
        type: 2,
        name: '塔城地区',
        zipCode: '834700',
        child: [
          {
            id: 654201,
            pid: 654200,
            type: 3,
            name: '塔城市',
            zipCode: '834700',
            child: null
          },
          {
            id: 654202,
            pid: 654200,
            type: 3,
            name: '乌苏市',
            zipCode: '833000',
            child: null
          },
          {
            id: 654221,
            pid: 654200,
            type: 3,
            name: '额敏县',
            zipCode: '834600',
            child: null
          },
          {
            id: 654223,
            pid: 654200,
            type: 3,
            name: '沙湾县',
            zipCode: '832100',
            child: null
          },
          {
            id: 654224,
            pid: 654200,
            type: 3,
            name: '托里县',
            zipCode: '834500',
            child: null
          },
          {
            id: 654225,
            pid: 654200,
            type: 3,
            name: '裕民县',
            zipCode: '834800',
            child: null
          },
          {
            id: 654226,
            pid: 654200,
            type: 3,
            name: '和布克赛尔蒙古自治县',
            zipCode: '834400',
            child: null
          }
        ]
      },
      {
        id: 654300,
        pid: 650000,
        type: 2,
        name: '阿勒泰地区',
        zipCode: '836500',
        child: [
          {
            id: 654301,
            pid: 654300,
            type: 3,
            name: '阿勒泰市',
            zipCode: '836500',
            child: null
          },
          {
            id: 654321,
            pid: 654300,
            type: 3,
            name: '布尔津县',
            zipCode: '836600',
            child: null
          },
          {
            id: 654322,
            pid: 654300,
            type: 3,
            name: '富蕴县',
            zipCode: '836100',
            child: null
          },
          {
            id: 654323,
            pid: 654300,
            type: 3,
            name: '福海县',
            zipCode: '836400',
            child: null
          },
          {
            id: 654324,
            pid: 654300,
            type: 3,
            name: '哈巴河县',
            zipCode: '836700',
            child: null
          },
          {
            id: 654325,
            pid: 654300,
            type: 3,
            name: '青河县',
            zipCode: '836200',
            child: null
          },
          {
            id: 654326,
            pid: 654300,
            type: 3,
            name: '吉木乃县',
            zipCode: '836800',
            child: null
          }
        ]
      },
      {
        id: 659000,
        pid: 650000,
        type: 2,
        name: '直辖县级',
        zipCode: '',
        child: [
          {
            id: 659001,
            pid: 659000,
            type: 3,
            name: '石河子市',
            zipCode: '832000',
            child: null
          },
          {
            id: 659002,
            pid: 659000,
            type: 3,
            name: '阿拉尔市',
            zipCode: '843300',
            child: null
          },
          {
            id: 659003,
            pid: 659000,
            type: 3,
            name: '图木舒克市',
            zipCode: '843806',
            child: null
          },
          {
            id: 659004,
            pid: 659000,
            type: 3,
            name: '五家渠市',
            zipCode: '831300',
            child: null
          },
          {
            id: 659005,
            pid: 659000,
            type: 3,
            name: '北屯市',
            zipCode: '836000',
            child: null
          },
          {
            id: 659006,
            pid: 659000,
            type: 3,
            name: '铁门关市',
            zipCode: '836000',
            child: null
          },
          {
            id: 659007,
            pid: 659000,
            type: 3,
            name: '双河市',
            zipCode: '833408',
            child: null
          }
        ]
      }
    ]
  },
  {
    id: 710000,
    pid: 100000,
    type: 1,
    name: '台湾',
    zipCode: '',
    child: [
      {
        id: 710100,
        pid: 710000,
        type: 2,
        name: '台北市',
        zipCode: '1',
        child: [
          {
            id: 710101,
            pid: 710100,
            type: 3,
            name: '松山区',
            zipCode: '105',
            child: null
          },
          {
            id: 710102,
            pid: 710100,
            type: 3,
            name: '信义区',
            zipCode: '110',
            child: null
          },
          {
            id: 710103,
            pid: 710100,
            type: 3,
            name: '大安区',
            zipCode: '106',
            child: null
          },
          {
            id: 710104,
            pid: 710100,
            type: 3,
            name: '中山区',
            zipCode: '104',
            child: null
          },
          {
            id: 710105,
            pid: 710100,
            type: 3,
            name: '中正区',
            zipCode: '100',
            child: null
          },
          {
            id: 710106,
            pid: 710100,
            type: 3,
            name: '大同区',
            zipCode: '103',
            child: null
          },
          {
            id: 710107,
            pid: 710100,
            type: 3,
            name: '万华区',
            zipCode: '108',
            child: null
          },
          {
            id: 710108,
            pid: 710100,
            type: 3,
            name: '文山区',
            zipCode: '116',
            child: null
          },
          {
            id: 710109,
            pid: 710100,
            type: 3,
            name: '南港区',
            zipCode: '115',
            child: null
          },
          {
            id: 710110,
            pid: 710100,
            type: 3,
            name: '内湖区',
            zipCode: '114',
            child: null
          },
          {
            id: 710111,
            pid: 710100,
            type: 3,
            name: '士林区',
            zipCode: '111',
            child: null
          },
          {
            id: 710112,
            pid: 710100,
            type: 3,
            name: '北投区',
            zipCode: '112',
            child: null
          }
        ]
      },
      {
        id: 710200,
        pid: 710000,
        type: 2,
        name: '高雄市',
        zipCode: '8',
        child: [
          {
            id: 710201,
            pid: 710200,
            type: 3,
            name: '盐埕区',
            zipCode: '803',
            child: null
          },
          {
            id: 710202,
            pid: 710200,
            type: 3,
            name: '鼓山区',
            zipCode: '804',
            child: null
          },
          {
            id: 710203,
            pid: 710200,
            type: 3,
            name: '左营区',
            zipCode: '813',
            child: null
          },
          {
            id: 710204,
            pid: 710200,
            type: 3,
            name: '楠梓区',
            zipCode: '811',
            child: null
          },
          {
            id: 710205,
            pid: 710200,
            type: 3,
            name: '三民区',
            zipCode: '807',
            child: null
          },
          {
            id: 710206,
            pid: 710200,
            type: 3,
            name: '新兴区',
            zipCode: '800',
            child: null
          },
          {
            id: 710207,
            pid: 710200,
            type: 3,
            name: '前金区',
            zipCode: '801',
            child: null
          },
          {
            id: 710208,
            pid: 710200,
            type: 3,
            name: '苓雅区',
            zipCode: '802',
            child: null
          },
          {
            id: 710209,
            pid: 710200,
            type: 3,
            name: '前镇区',
            zipCode: '806',
            child: null
          },
          {
            id: 710210,
            pid: 710200,
            type: 3,
            name: '旗津区',
            zipCode: '805',
            child: null
          },
          {
            id: 710211,
            pid: 710200,
            type: 3,
            name: '小港区',
            zipCode: '812',
            child: null
          },
          {
            id: 710212,
            pid: 710200,
            type: 3,
            name: '凤山区',
            zipCode: '830',
            child: null
          },
          {
            id: 710213,
            pid: 710200,
            type: 3,
            name: '林园区',
            zipCode: '832',
            child: null
          },
          {
            id: 710214,
            pid: 710200,
            type: 3,
            name: '大寮区',
            zipCode: '831',
            child: null
          },
          {
            id: 710215,
            pid: 710200,
            type: 3,
            name: '大树区',
            zipCode: '840',
            child: null
          },
          {
            id: 710216,
            pid: 710200,
            type: 3,
            name: '大社区',
            zipCode: '815',
            child: null
          },
          {
            id: 710217,
            pid: 710200,
            type: 3,
            name: '仁武区',
            zipCode: '814',
            child: null
          },
          {
            id: 710218,
            pid: 710200,
            type: 3,
            name: '鸟松区',
            zipCode: '833',
            child: null
          },
          {
            id: 710219,
            pid: 710200,
            type: 3,
            name: '冈山区',
            zipCode: '820',
            child: null
          },
          {
            id: 710220,
            pid: 710200,
            type: 3,
            name: '桥头区',
            zipCode: '825',
            child: null
          },
          {
            id: 710221,
            pid: 710200,
            type: 3,
            name: '燕巢区',
            zipCode: '824',
            child: null
          },
          {
            id: 710222,
            pid: 710200,
            type: 3,
            name: '田寮区',
            zipCode: '823',
            child: null
          },
          {
            id: 710223,
            pid: 710200,
            type: 3,
            name: '阿莲区',
            zipCode: '822',
            child: null
          },
          {
            id: 710224,
            pid: 710200,
            type: 3,
            name: '路竹区',
            zipCode: '821',
            child: null
          },
          {
            id: 710225,
            pid: 710200,
            type: 3,
            name: '湖内区',
            zipCode: '829',
            child: null
          },
          {
            id: 710226,
            pid: 710200,
            type: 3,
            name: '茄萣区',
            zipCode: '852',
            child: null
          },
          {
            id: 710227,
            pid: 710200,
            type: 3,
            name: '永安区',
            zipCode: '828',
            child: null
          },
          {
            id: 710228,
            pid: 710200,
            type: 3,
            name: '弥陀区',
            zipCode: '827',
            child: null
          },
          {
            id: 710229,
            pid: 710200,
            type: 3,
            name: '梓官区',
            zipCode: '826',
            child: null
          },
          {
            id: 710230,
            pid: 710200,
            type: 3,
            name: '旗山区',
            zipCode: '842',
            child: null
          },
          {
            id: 710231,
            pid: 710200,
            type: 3,
            name: '美浓区',
            zipCode: '843',
            child: null
          },
          {
            id: 710232,
            pid: 710200,
            type: 3,
            name: '六龟区',
            zipCode: '844',
            child: null
          },
          {
            id: 710233,
            pid: 710200,
            type: 3,
            name: '甲仙区',
            zipCode: '847',
            child: null
          },
          {
            id: 710234,
            pid: 710200,
            type: 3,
            name: '杉林区',
            zipCode: '846',
            child: null
          },
          {
            id: 710235,
            pid: 710200,
            type: 3,
            name: '内门区',
            zipCode: '845',
            child: null
          },
          {
            id: 710236,
            pid: 710200,
            type: 3,
            name: '茂林区',
            zipCode: '851',
            child: null
          },
          {
            id: 710237,
            pid: 710200,
            type: 3,
            name: '桃源区',
            zipCode: '848',
            child: null
          },
          {
            id: 710238,
            pid: 710200,
            type: 3,
            name: '那玛夏区',
            zipCode: '849',
            child: null
          }
        ]
      },
      {
        id: 710300,
        pid: 710000,
        type: 2,
        name: '基隆市',
        zipCode: '2',
        child: [
          {
            id: 710301,
            pid: 710300,
            type: 3,
            name: '中正区',
            zipCode: '202',
            child: null
          },
          {
            id: 710302,
            pid: 710300,
            type: 3,
            name: '七堵区',
            zipCode: '206',
            child: null
          },
          {
            id: 710303,
            pid: 710300,
            type: 3,
            name: '暖暖区',
            zipCode: '205',
            child: null
          },
          {
            id: 710304,
            pid: 710300,
            type: 3,
            name: '仁爱区',
            zipCode: '200',
            child: null
          },
          {
            id: 710305,
            pid: 710300,
            type: 3,
            name: '中山区',
            zipCode: '203',
            child: null
          },
          {
            id: 710306,
            pid: 710300,
            type: 3,
            name: '安乐区',
            zipCode: '204',
            child: null
          },
          {
            id: 710307,
            pid: 710300,
            type: 3,
            name: '信义区',
            zipCode: '201',
            child: null
          }
        ]
      },
      {
        id: 710400,
        pid: 710000,
        type: 2,
        name: '台中市',
        zipCode: '4',
        child: [
          {
            id: 710401,
            pid: 710400,
            type: 3,
            name: '中区',
            zipCode: '400',
            child: null
          },
          {
            id: 710402,
            pid: 710400,
            type: 3,
            name: '东区',
            zipCode: '401',
            child: null
          },
          {
            id: 710403,
            pid: 710400,
            type: 3,
            name: '南区',
            zipCode: '402',
            child: null
          },
          {
            id: 710404,
            pid: 710400,
            type: 3,
            name: '西区',
            zipCode: '403',
            child: null
          },
          {
            id: 710405,
            pid: 710400,
            type: 3,
            name: '北区',
            zipCode: '404',
            child: null
          },
          {
            id: 710406,
            pid: 710400,
            type: 3,
            name: '西屯区',
            zipCode: '407',
            child: null
          },
          {
            id: 710407,
            pid: 710400,
            type: 3,
            name: '南屯区',
            zipCode: '408',
            child: null
          },
          {
            id: 710408,
            pid: 710400,
            type: 3,
            name: '北屯区',
            zipCode: '406',
            child: null
          },
          {
            id: 710409,
            pid: 710400,
            type: 3,
            name: '丰原区',
            zipCode: '420',
            child: null
          },
          {
            id: 710410,
            pid: 710400,
            type: 3,
            name: '东势区',
            zipCode: '423',
            child: null
          },
          {
            id: 710411,
            pid: 710400,
            type: 3,
            name: '大甲区',
            zipCode: '437',
            child: null
          },
          {
            id: 710412,
            pid: 710400,
            type: 3,
            name: '清水区',
            zipCode: '436',
            child: null
          },
          {
            id: 710413,
            pid: 710400,
            type: 3,
            name: '沙鹿区',
            zipCode: '433',
            child: null
          },
          {
            id: 710414,
            pid: 710400,
            type: 3,
            name: '梧栖区',
            zipCode: '435',
            child: null
          },
          {
            id: 710415,
            pid: 710400,
            type: 3,
            name: '后里区',
            zipCode: '421',
            child: null
          },
          {
            id: 710416,
            pid: 710400,
            type: 3,
            name: '神冈区',
            zipCode: '429',
            child: null
          },
          {
            id: 710417,
            pid: 710400,
            type: 3,
            name: '潭子区',
            zipCode: '427',
            child: null
          },
          {
            id: 710418,
            pid: 710400,
            type: 3,
            name: '大雅区',
            zipCode: '428',
            child: null
          },
          {
            id: 710419,
            pid: 710400,
            type: 3,
            name: '新社区',
            zipCode: '426',
            child: null
          },
          {
            id: 710420,
            pid: 710400,
            type: 3,
            name: '石冈区',
            zipCode: '422',
            child: null
          },
          {
            id: 710421,
            pid: 710400,
            type: 3,
            name: '外埔区',
            zipCode: '438',
            child: null
          },
          {
            id: 710422,
            pid: 710400,
            type: 3,
            name: '大安区',
            zipCode: '439',
            child: null
          },
          {
            id: 710423,
            pid: 710400,
            type: 3,
            name: '乌日区',
            zipCode: '414',
            child: null
          },
          {
            id: 710424,
            pid: 710400,
            type: 3,
            name: '大肚区',
            zipCode: '432',
            child: null
          },
          {
            id: 710425,
            pid: 710400,
            type: 3,
            name: '龙井区',
            zipCode: '434',
            child: null
          },
          {
            id: 710426,
            pid: 710400,
            type: 3,
            name: '雾峰区',
            zipCode: '413',
            child: null
          },
          {
            id: 710427,
            pid: 710400,
            type: 3,
            name: '太平区',
            zipCode: '411',
            child: null
          },
          {
            id: 710428,
            pid: 710400,
            type: 3,
            name: '大里区',
            zipCode: '412',
            child: null
          },
          {
            id: 710429,
            pid: 710400,
            type: 3,
            name: '和平区',
            zipCode: '424',
            child: null
          }
        ]
      },
      {
        id: 710500,
        pid: 710000,
        type: 2,
        name: '台南市',
        zipCode: '7',
        child: [
          {
            id: 710501,
            pid: 710500,
            type: 3,
            name: '东区',
            zipCode: '701',
            child: null
          },
          {
            id: 710502,
            pid: 710500,
            type: 3,
            name: '南区',
            zipCode: '702',
            child: null
          },
          {
            id: 710504,
            pid: 710500,
            type: 3,
            name: '北区',
            zipCode: '704',
            child: null
          },
          {
            id: 710506,
            pid: 710500,
            type: 3,
            name: '安南区',
            zipCode: '709',
            child: null
          },
          {
            id: 710507,
            pid: 710500,
            type: 3,
            name: '安平区',
            zipCode: '708',
            child: null
          },
          {
            id: 710508,
            pid: 710500,
            type: 3,
            name: '中西区',
            zipCode: '700',
            child: null
          },
          {
            id: 710509,
            pid: 710500,
            type: 3,
            name: '新营区',
            zipCode: '730',
            child: null
          },
          {
            id: 710510,
            pid: 710500,
            type: 3,
            name: '盐水区',
            zipCode: '737',
            child: null
          },
          {
            id: 710511,
            pid: 710500,
            type: 3,
            name: '白河区',
            zipCode: '732',
            child: null
          },
          {
            id: 710512,
            pid: 710500,
            type: 3,
            name: '柳营区',
            zipCode: '736',
            child: null
          },
          {
            id: 710513,
            pid: 710500,
            type: 3,
            name: '后壁区',
            zipCode: '731',
            child: null
          },
          {
            id: 710514,
            pid: 710500,
            type: 3,
            name: '东山区',
            zipCode: '733',
            child: null
          },
          {
            id: 710515,
            pid: 710500,
            type: 3,
            name: '麻豆区',
            zipCode: '721',
            child: null
          },
          {
            id: 710516,
            pid: 710500,
            type: 3,
            name: '下营区',
            zipCode: '735',
            child: null
          },
          {
            id: 710517,
            pid: 710500,
            type: 3,
            name: '六甲区',
            zipCode: '734',
            child: null
          },
          {
            id: 710518,
            pid: 710500,
            type: 3,
            name: '官田区',
            zipCode: '720',
            child: null
          },
          {
            id: 710519,
            pid: 710500,
            type: 3,
            name: '大内区',
            zipCode: '742',
            child: null
          },
          {
            id: 710520,
            pid: 710500,
            type: 3,
            name: '佳里区',
            zipCode: '722',
            child: null
          },
          {
            id: 710521,
            pid: 710500,
            type: 3,
            name: '学甲区',
            zipCode: '726',
            child: null
          },
          {
            id: 710522,
            pid: 710500,
            type: 3,
            name: '西港区',
            zipCode: '723',
            child: null
          },
          {
            id: 710523,
            pid: 710500,
            type: 3,
            name: '七股区',
            zipCode: '724',
            child: null
          },
          {
            id: 710524,
            pid: 710500,
            type: 3,
            name: '将军区',
            zipCode: '725',
            child: null
          },
          {
            id: 710525,
            pid: 710500,
            type: 3,
            name: '北门区',
            zipCode: '727',
            child: null
          },
          {
            id: 710526,
            pid: 710500,
            type: 3,
            name: '新化区',
            zipCode: '712',
            child: null
          },
          {
            id: 710527,
            pid: 710500,
            type: 3,
            name: '善化区',
            zipCode: '741',
            child: null
          },
          {
            id: 710528,
            pid: 710500,
            type: 3,
            name: '新市区',
            zipCode: '744',
            child: null
          },
          {
            id: 710529,
            pid: 710500,
            type: 3,
            name: '安定区',
            zipCode: '745',
            child: null
          },
          {
            id: 710530,
            pid: 710500,
            type: 3,
            name: '山上区',
            zipCode: '743',
            child: null
          },
          {
            id: 710531,
            pid: 710500,
            type: 3,
            name: '玉井区',
            zipCode: '714',
            child: null
          },
          {
            id: 710532,
            pid: 710500,
            type: 3,
            name: '楠西区',
            zipCode: '715',
            child: null
          },
          {
            id: 710533,
            pid: 710500,
            type: 3,
            name: '南化区',
            zipCode: '716',
            child: null
          },
          {
            id: 710534,
            pid: 710500,
            type: 3,
            name: '左镇区',
            zipCode: '713',
            child: null
          },
          {
            id: 710535,
            pid: 710500,
            type: 3,
            name: '仁德区',
            zipCode: '717',
            child: null
          },
          {
            id: 710536,
            pid: 710500,
            type: 3,
            name: '归仁区',
            zipCode: '711',
            child: null
          },
          {
            id: 710537,
            pid: 710500,
            type: 3,
            name: '关庙区',
            zipCode: '718',
            child: null
          },
          {
            id: 710538,
            pid: 710500,
            type: 3,
            name: '龙崎区',
            zipCode: '719',
            child: null
          },
          {
            id: 710539,
            pid: 710500,
            type: 3,
            name: '永康区',
            zipCode: '710',
            child: null
          }
        ]
      },
      {
        id: 710600,
        pid: 710000,
        type: 2,
        name: '新竹市',
        zipCode: '3',
        child: [
          {
            id: 710601,
            pid: 710600,
            type: 3,
            name: '东区',
            zipCode: '300',
            child: null
          },
          {
            id: 710602,
            pid: 710600,
            type: 3,
            name: '北区',
            zipCode: '',
            child: null
          },
          {
            id: 710603,
            pid: 710600,
            type: 3,
            name: '香山区',
            zipCode: '',
            child: null
          }
        ]
      },
      {
        id: 710700,
        pid: 710000,
        type: 2,
        name: '嘉义市',
        zipCode: '6',
        child: [
          {
            id: 710701,
            pid: 710700,
            type: 3,
            name: '东区',
            zipCode: '600',
            child: null
          },
          {
            id: 710702,
            pid: 710700,
            type: 3,
            name: '西区',
            zipCode: '600',
            child: null
          }
        ]
      },
      {
        id: 710800,
        pid: 710000,
        type: 2,
        name: '新北市',
        zipCode: '2',
        child: [
          {
            id: 710801,
            pid: 710800,
            type: 3,
            name: '板桥区',
            zipCode: '220',
            child: null
          },
          {
            id: 710802,
            pid: 710800,
            type: 3,
            name: '三重区',
            zipCode: '241',
            child: null
          },
          {
            id: 710803,
            pid: 710800,
            type: 3,
            name: '中和区',
            zipCode: '235',
            child: null
          },
          {
            id: 710804,
            pid: 710800,
            type: 3,
            name: '永和区',
            zipCode: '234',
            child: null
          },
          {
            id: 710805,
            pid: 710800,
            type: 3,
            name: '新庄区',
            zipCode: '242',
            child: null
          },
          {
            id: 710806,
            pid: 710800,
            type: 3,
            name: '新店区',
            zipCode: '231',
            child: null
          },
          {
            id: 710807,
            pid: 710800,
            type: 3,
            name: '树林区',
            zipCode: '238',
            child: null
          },
          {
            id: 710808,
            pid: 710800,
            type: 3,
            name: '莺歌区',
            zipCode: '239',
            child: null
          },
          {
            id: 710809,
            pid: 710800,
            type: 3,
            name: '三峡区',
            zipCode: '237',
            child: null
          },
          {
            id: 710810,
            pid: 710800,
            type: 3,
            name: '淡水区',
            zipCode: '251',
            child: null
          },
          {
            id: 710811,
            pid: 710800,
            type: 3,
            name: '汐止区',
            zipCode: '221',
            child: null
          },
          {
            id: 710812,
            pid: 710800,
            type: 3,
            name: '瑞芳区',
            zipCode: '224',
            child: null
          },
          {
            id: 710813,
            pid: 710800,
            type: 3,
            name: '土城区',
            zipCode: '236',
            child: null
          },
          {
            id: 710814,
            pid: 710800,
            type: 3,
            name: '芦洲区',
            zipCode: '247',
            child: null
          },
          {
            id: 710815,
            pid: 710800,
            type: 3,
            name: '五股区',
            zipCode: '248',
            child: null
          },
          {
            id: 710816,
            pid: 710800,
            type: 3,
            name: '泰山区',
            zipCode: '243',
            child: null
          },
          {
            id: 710817,
            pid: 710800,
            type: 3,
            name: '林口区',
            zipCode: '244',
            child: null
          },
          {
            id: 710818,
            pid: 710800,
            type: 3,
            name: '深坑区',
            zipCode: '222',
            child: null
          },
          {
            id: 710819,
            pid: 710800,
            type: 3,
            name: '石碇区',
            zipCode: '223',
            child: null
          },
          {
            id: 710820,
            pid: 710800,
            type: 3,
            name: '坪林区',
            zipCode: '232',
            child: null
          },
          {
            id: 710821,
            pid: 710800,
            type: 3,
            name: '三芝区',
            zipCode: '252',
            child: null
          },
          {
            id: 710822,
            pid: 710800,
            type: 3,
            name: '石门区',
            zipCode: '253',
            child: null
          },
          {
            id: 710823,
            pid: 710800,
            type: 3,
            name: '八里区',
            zipCode: '249',
            child: null
          },
          {
            id: 710824,
            pid: 710800,
            type: 3,
            name: '平溪区',
            zipCode: '226',
            child: null
          },
          {
            id: 710825,
            pid: 710800,
            type: 3,
            name: '双溪区',
            zipCode: '227',
            child: null
          },
          {
            id: 710826,
            pid: 710800,
            type: 3,
            name: '贡寮区',
            zipCode: '228',
            child: null
          },
          {
            id: 710827,
            pid: 710800,
            type: 3,
            name: '金山区',
            zipCode: '208',
            child: null
          },
          {
            id: 710828,
            pid: 710800,
            type: 3,
            name: '万里区',
            zipCode: '207',
            child: null
          },
          {
            id: 710829,
            pid: 710800,
            type: 3,
            name: '乌来区',
            zipCode: '233',
            child: null
          }
        ]
      },
      {
        id: 712200,
        pid: 710000,
        type: 2,
        name: '宜兰县',
        zipCode: '2',
        child: [
          {
            id: 712201,
            pid: 712200,
            type: 3,
            name: '宜兰市',
            zipCode: '260',
            child: null
          },
          {
            id: 712221,
            pid: 712200,
            type: 3,
            name: '罗东镇',
            zipCode: '265',
            child: null
          },
          {
            id: 712222,
            pid: 712200,
            type: 3,
            name: '苏澳镇',
            zipCode: '270',
            child: null
          },
          {
            id: 712223,
            pid: 712200,
            type: 3,
            name: '头城镇',
            zipCode: '261',
            child: null
          },
          {
            id: 712224,
            pid: 712200,
            type: 3,
            name: '礁溪乡',
            zipCode: '262',
            child: null
          },
          {
            id: 712225,
            pid: 712200,
            type: 3,
            name: '壮围乡',
            zipCode: '263',
            child: null
          },
          {
            id: 712226,
            pid: 712200,
            type: 3,
            name: '员山乡',
            zipCode: '264',
            child: null
          },
          {
            id: 712227,
            pid: 712200,
            type: 3,
            name: '冬山乡',
            zipCode: '269',
            child: null
          },
          {
            id: 712228,
            pid: 712200,
            type: 3,
            name: '五结乡',
            zipCode: '268',
            child: null
          },
          {
            id: 712229,
            pid: 712200,
            type: 3,
            name: '三星乡',
            zipCode: '266',
            child: null
          },
          {
            id: 712230,
            pid: 712200,
            type: 3,
            name: '大同乡',
            zipCode: '267',
            child: null
          },
          {
            id: 712231,
            pid: 712200,
            type: 3,
            name: '南澳乡',
            zipCode: '272',
            child: null
          }
        ]
      },
      {
        id: 712300,
        pid: 710000,
        type: 2,
        name: '桃园县',
        zipCode: '3',
        child: [
          {
            id: 712301,
            pid: 712300,
            type: 3,
            name: '桃园市',
            zipCode: '330',
            child: null
          },
          {
            id: 712302,
            pid: 712300,
            type: 3,
            name: '中坜市',
            zipCode: '320',
            child: null
          },
          {
            id: 712303,
            pid: 712300,
            type: 3,
            name: '平镇市',
            zipCode: '324',
            child: null
          },
          {
            id: 712304,
            pid: 712300,
            type: 3,
            name: '八德市',
            zipCode: '334',
            child: null
          },
          {
            id: 712305,
            pid: 712300,
            type: 3,
            name: '杨梅市',
            zipCode: '326',
            child: null
          },
          {
            id: 712306,
            pid: 712300,
            type: 3,
            name: '芦竹市',
            zipCode: '338',
            child: null
          },
          {
            id: 712321,
            pid: 712300,
            type: 3,
            name: '大溪镇',
            zipCode: '335',
            child: null
          },
          {
            id: 712324,
            pid: 712300,
            type: 3,
            name: '大园乡',
            zipCode: '337',
            child: null
          },
          {
            id: 712325,
            pid: 712300,
            type: 3,
            name: '龟山乡',
            zipCode: '333',
            child: null
          },
          {
            id: 712327,
            pid: 712300,
            type: 3,
            name: '龙潭乡',
            zipCode: '325',
            child: null
          },
          {
            id: 712329,
            pid: 712300,
            type: 3,
            name: '新屋乡',
            zipCode: '327',
            child: null
          },
          {
            id: 712330,
            pid: 712300,
            type: 3,
            name: '观音乡',
            zipCode: '328',
            child: null
          },
          {
            id: 712331,
            pid: 712300,
            type: 3,
            name: '复兴乡',
            zipCode: '336',
            child: null
          }
        ]
      },
      {
        id: 712400,
        pid: 710000,
        type: 2,
        name: '新竹县',
        zipCode: '3',
        child: [
          {
            id: 712401,
            pid: 712400,
            type: 3,
            name: '竹北市',
            zipCode: '302',
            child: null
          },
          {
            id: 712421,
            pid: 712400,
            type: 3,
            name: '竹东镇',
            zipCode: '310',
            child: null
          },
          {
            id: 712422,
            pid: 712400,
            type: 3,
            name: '新埔镇',
            zipCode: '305',
            child: null
          },
          {
            id: 712423,
            pid: 712400,
            type: 3,
            name: '关西镇',
            zipCode: '306',
            child: null
          },
          {
            id: 712424,
            pid: 712400,
            type: 3,
            name: '湖口乡',
            zipCode: '303',
            child: null
          },
          {
            id: 712425,
            pid: 712400,
            type: 3,
            name: '新丰乡',
            zipCode: '304',
            child: null
          },
          {
            id: 712426,
            pid: 712400,
            type: 3,
            name: '芎林乡',
            zipCode: '307',
            child: null
          },
          {
            id: 712427,
            pid: 712400,
            type: 3,
            name: '横山乡',
            zipCode: '312',
            child: null
          },
          {
            id: 712428,
            pid: 712400,
            type: 3,
            name: '北埔乡',
            zipCode: '314',
            child: null
          },
          {
            id: 712429,
            pid: 712400,
            type: 3,
            name: '宝山乡',
            zipCode: '308',
            child: null
          },
          {
            id: 712430,
            pid: 712400,
            type: 3,
            name: '峨眉乡',
            zipCode: '315',
            child: null
          },
          {
            id: 712431,
            pid: 712400,
            type: 3,
            name: '尖石乡',
            zipCode: '313',
            child: null
          },
          {
            id: 712432,
            pid: 712400,
            type: 3,
            name: '五峰乡',
            zipCode: '311',
            child: null
          }
        ]
      },
      {
        id: 712500,
        pid: 710000,
        type: 2,
        name: '苗栗县',
        zipCode: '3',
        child: [
          {
            id: 712501,
            pid: 712500,
            type: 3,
            name: '苗栗市',
            zipCode: '360',
            child: null
          },
          {
            id: 712521,
            pid: 712500,
            type: 3,
            name: '苑里镇',
            zipCode: '358',
            child: null
          },
          {
            id: 712522,
            pid: 712500,
            type: 3,
            name: '通霄镇',
            zipCode: '357',
            child: null
          },
          {
            id: 712523,
            pid: 712500,
            type: 3,
            name: '竹南镇',
            zipCode: '350',
            child: null
          },
          {
            id: 712524,
            pid: 712500,
            type: 3,
            name: '头份镇',
            zipCode: '351',
            child: null
          },
          {
            id: 712525,
            pid: 712500,
            type: 3,
            name: '后龙镇',
            zipCode: '356',
            child: null
          },
          {
            id: 712526,
            pid: 712500,
            type: 3,
            name: '卓兰镇',
            zipCode: '369',
            child: null
          },
          {
            id: 712527,
            pid: 712500,
            type: 3,
            name: '大湖乡',
            zipCode: '364',
            child: null
          },
          {
            id: 712528,
            pid: 712500,
            type: 3,
            name: '公馆乡',
            zipCode: '363',
            child: null
          },
          {
            id: 712529,
            pid: 712500,
            type: 3,
            name: '铜锣乡',
            zipCode: '366',
            child: null
          },
          {
            id: 712530,
            pid: 712500,
            type: 3,
            name: '南庄乡',
            zipCode: '353',
            child: null
          },
          {
            id: 712531,
            pid: 712500,
            type: 3,
            name: '头屋乡',
            zipCode: '362',
            child: null
          },
          {
            id: 712532,
            pid: 712500,
            type: 3,
            name: '三义乡',
            zipCode: '367',
            child: null
          },
          {
            id: 712533,
            pid: 712500,
            type: 3,
            name: '西湖乡',
            zipCode: '368',
            child: null
          },
          {
            id: 712534,
            pid: 712500,
            type: 3,
            name: '造桥乡',
            zipCode: '361',
            child: null
          },
          {
            id: 712535,
            pid: 712500,
            type: 3,
            name: '三湾乡',
            zipCode: '352',
            child: null
          },
          {
            id: 712536,
            pid: 712500,
            type: 3,
            name: '狮潭乡',
            zipCode: '354',
            child: null
          },
          {
            id: 712537,
            pid: 712500,
            type: 3,
            name: '泰安乡',
            zipCode: '365',
            child: null
          }
        ]
      },
      {
        id: 712700,
        pid: 710000,
        type: 2,
        name: '彰化县',
        zipCode: '5',
        child: [
          {
            id: 712701,
            pid: 712700,
            type: 3,
            name: '彰化市',
            zipCode: '500',
            child: null
          },
          {
            id: 712721,
            pid: 712700,
            type: 3,
            name: '鹿港镇',
            zipCode: '505',
            child: null
          },
          {
            id: 712722,
            pid: 712700,
            type: 3,
            name: '和美镇',
            zipCode: '508',
            child: null
          },
          {
            id: 712723,
            pid: 712700,
            type: 3,
            name: '线西乡',
            zipCode: '507',
            child: null
          },
          {
            id: 712724,
            pid: 712700,
            type: 3,
            name: '伸港乡',
            zipCode: '509',
            child: null
          },
          {
            id: 712725,
            pid: 712700,
            type: 3,
            name: '福兴乡',
            zipCode: '506',
            child: null
          },
          {
            id: 712726,
            pid: 712700,
            type: 3,
            name: '秀水乡',
            zipCode: '504',
            child: null
          },
          {
            id: 712727,
            pid: 712700,
            type: 3,
            name: '花坛乡',
            zipCode: '503',
            child: null
          },
          {
            id: 712728,
            pid: 712700,
            type: 3,
            name: '芬园乡',
            zipCode: '502',
            child: null
          },
          {
            id: 712729,
            pid: 712700,
            type: 3,
            name: '员林镇',
            zipCode: '510',
            child: null
          },
          {
            id: 712730,
            pid: 712700,
            type: 3,
            name: '溪湖镇',
            zipCode: '514',
            child: null
          },
          {
            id: 712731,
            pid: 712700,
            type: 3,
            name: '田中镇',
            zipCode: '520',
            child: null
          },
          {
            id: 712732,
            pid: 712700,
            type: 3,
            name: '大村乡',
            zipCode: '515',
            child: null
          },
          {
            id: 712733,
            pid: 712700,
            type: 3,
            name: '埔盐乡',
            zipCode: '516',
            child: null
          },
          {
            id: 712734,
            pid: 712700,
            type: 3,
            name: '埔心乡',
            zipCode: '513',
            child: null
          },
          {
            id: 712735,
            pid: 712700,
            type: 3,
            name: '永靖乡',
            zipCode: '512',
            child: null
          },
          {
            id: 712736,
            pid: 712700,
            type: 3,
            name: '社头乡',
            zipCode: '511',
            child: null
          },
          {
            id: 712737,
            pid: 712700,
            type: 3,
            name: '二水乡',
            zipCode: '530',
            child: null
          },
          {
            id: 712738,
            pid: 712700,
            type: 3,
            name: '北斗镇',
            zipCode: '521',
            child: null
          },
          {
            id: 712739,
            pid: 712700,
            type: 3,
            name: '二林镇',
            zipCode: '526',
            child: null
          },
          {
            id: 712740,
            pid: 712700,
            type: 3,
            name: '田尾乡',
            zipCode: '522',
            child: null
          },
          {
            id: 712741,
            pid: 712700,
            type: 3,
            name: '埤头乡',
            zipCode: '523',
            child: null
          },
          {
            id: 712742,
            pid: 712700,
            type: 3,
            name: '芳苑乡',
            zipCode: '528',
            child: null
          },
          {
            id: 712743,
            pid: 712700,
            type: 3,
            name: '大城乡',
            zipCode: '527',
            child: null
          },
          {
            id: 712744,
            pid: 712700,
            type: 3,
            name: '竹塘乡',
            zipCode: '525',
            child: null
          },
          {
            id: 712745,
            pid: 712700,
            type: 3,
            name: '溪州乡',
            zipCode: '524',
            child: null
          }
        ]
      },
      {
        id: 712800,
        pid: 710000,
        type: 2,
        name: '南投县',
        zipCode: '5',
        child: [
          {
            id: 712801,
            pid: 712800,
            type: 3,
            name: '南投市',
            zipCode: '540',
            child: null
          },
          {
            id: 712821,
            pid: 712800,
            type: 3,
            name: '埔里镇',
            zipCode: '545',
            child: null
          },
          {
            id: 712822,
            pid: 712800,
            type: 3,
            name: '草屯镇',
            zipCode: '542',
            child: null
          },
          {
            id: 712823,
            pid: 712800,
            type: 3,
            name: '竹山镇',
            zipCode: '557',
            child: null
          },
          {
            id: 712824,
            pid: 712800,
            type: 3,
            name: '集集镇',
            zipCode: '552',
            child: null
          },
          {
            id: 712825,
            pid: 712800,
            type: 3,
            name: '名间乡',
            zipCode: '551',
            child: null
          },
          {
            id: 712826,
            pid: 712800,
            type: 3,
            name: '鹿谷乡',
            zipCode: '558',
            child: null
          },
          {
            id: 712827,
            pid: 712800,
            type: 3,
            name: '中寮乡',
            zipCode: '541',
            child: null
          },
          {
            id: 712828,
            pid: 712800,
            type: 3,
            name: '鱼池乡',
            zipCode: '555',
            child: null
          },
          {
            id: 712829,
            pid: 712800,
            type: 3,
            name: '国姓乡',
            zipCode: '544',
            child: null
          },
          {
            id: 712830,
            pid: 712800,
            type: 3,
            name: '水里乡',
            zipCode: '553',
            child: null
          },
          {
            id: 712831,
            pid: 712800,
            type: 3,
            name: '信义乡',
            zipCode: '556',
            child: null
          },
          {
            id: 712832,
            pid: 712800,
            type: 3,
            name: '仁爱乡',
            zipCode: '546',
            child: null
          }
        ]
      },
      {
        id: 712900,
        pid: 710000,
        type: 2,
        name: '云林县',
        zipCode: '6',
        child: [
          {
            id: 712901,
            pid: 712900,
            type: 3,
            name: '斗六市',
            zipCode: '640',
            child: null
          },
          {
            id: 712921,
            pid: 712900,
            type: 3,
            name: '斗南镇',
            zipCode: '630',
            child: null
          },
          {
            id: 712922,
            pid: 712900,
            type: 3,
            name: '虎尾镇',
            zipCode: '632',
            child: null
          },
          {
            id: 712923,
            pid: 712900,
            type: 3,
            name: '西螺镇',
            zipCode: '648',
            child: null
          },
          {
            id: 712924,
            pid: 712900,
            type: 3,
            name: '土库镇',
            zipCode: '633',
            child: null
          },
          {
            id: 712925,
            pid: 712900,
            type: 3,
            name: '北港镇',
            zipCode: '651',
            child: null
          },
          {
            id: 712926,
            pid: 712900,
            type: 3,
            name: '古坑乡',
            zipCode: '646',
            child: null
          },
          {
            id: 712927,
            pid: 712900,
            type: 3,
            name: '大埤乡',
            zipCode: '631',
            child: null
          },
          {
            id: 712928,
            pid: 712900,
            type: 3,
            name: '莿桐乡',
            zipCode: '647',
            child: null
          },
          {
            id: 712929,
            pid: 712900,
            type: 3,
            name: '林内乡',
            zipCode: '643',
            child: null
          },
          {
            id: 712930,
            pid: 712900,
            type: 3,
            name: '二仑乡',
            zipCode: '649',
            child: null
          },
          {
            id: 712931,
            pid: 712900,
            type: 3,
            name: '仑背乡',
            zipCode: '637',
            child: null
          },
          {
            id: 712932,
            pid: 712900,
            type: 3,
            name: '麦寮乡',
            zipCode: '638',
            child: null
          },
          {
            id: 712933,
            pid: 712900,
            type: 3,
            name: '东势乡',
            zipCode: '635',
            child: null
          },
          {
            id: 712934,
            pid: 712900,
            type: 3,
            name: '褒忠乡',
            zipCode: '634',
            child: null
          },
          {
            id: 712935,
            pid: 712900,
            type: 3,
            name: '台西乡',
            zipCode: '636',
            child: null
          },
          {
            id: 712936,
            pid: 712900,
            type: 3,
            name: '元长乡',
            zipCode: '655',
            child: null
          },
          {
            id: 712937,
            pid: 712900,
            type: 3,
            name: '四湖乡',
            zipCode: '654',
            child: null
          },
          {
            id: 712938,
            pid: 712900,
            type: 3,
            name: '口湖乡',
            zipCode: '653',
            child: null
          },
          {
            id: 712939,
            pid: 712900,
            type: 3,
            name: '水林乡',
            zipCode: '652',
            child: null
          }
        ]
      },
      {
        id: 713000,
        pid: 710000,
        type: 2,
        name: '嘉义县',
        zipCode: '6',
        child: [
          {
            id: 713001,
            pid: 713000,
            type: 3,
            name: '太保市',
            zipCode: '612',
            child: null
          },
          {
            id: 713002,
            pid: 713000,
            type: 3,
            name: '朴子市',
            zipCode: '613',
            child: null
          },
          {
            id: 713023,
            pid: 713000,
            type: 3,
            name: '布袋镇',
            zipCode: '625',
            child: null
          },
          {
            id: 713024,
            pid: 713000,
            type: 3,
            name: '大林镇',
            zipCode: '622',
            child: null
          },
          {
            id: 713025,
            pid: 713000,
            type: 3,
            name: '民雄乡',
            zipCode: '621',
            child: null
          },
          {
            id: 713026,
            pid: 713000,
            type: 3,
            name: '溪口乡',
            zipCode: '623',
            child: null
          },
          {
            id: 713027,
            pid: 713000,
            type: 3,
            name: '新港乡',
            zipCode: '616',
            child: null
          },
          {
            id: 713028,
            pid: 713000,
            type: 3,
            name: '六脚乡',
            zipCode: '615',
            child: null
          },
          {
            id: 713029,
            pid: 713000,
            type: 3,
            name: '东石乡',
            zipCode: '614',
            child: null
          },
          {
            id: 713030,
            pid: 713000,
            type: 3,
            name: '义竹乡',
            zipCode: '624',
            child: null
          },
          {
            id: 713031,
            pid: 713000,
            type: 3,
            name: '鹿草乡',
            zipCode: '611',
            child: null
          },
          {
            id: 713032,
            pid: 713000,
            type: 3,
            name: '水上乡',
            zipCode: '608',
            child: null
          },
          {
            id: 713033,
            pid: 713000,
            type: 3,
            name: '中埔乡',
            zipCode: '606',
            child: null
          },
          {
            id: 713034,
            pid: 713000,
            type: 3,
            name: '竹崎乡',
            zipCode: '604',
            child: null
          },
          {
            id: 713035,
            pid: 713000,
            type: 3,
            name: '梅山乡',
            zipCode: '603',
            child: null
          },
          {
            id: 713036,
            pid: 713000,
            type: 3,
            name: '番路乡',
            zipCode: '602',
            child: null
          },
          {
            id: 713037,
            pid: 713000,
            type: 3,
            name: '大埔乡',
            zipCode: '607',
            child: null
          },
          {
            id: 713038,
            pid: 713000,
            type: 3,
            name: '阿里山乡',
            zipCode: '605',
            child: null
          }
        ]
      },
      {
        id: 713300,
        pid: 710000,
        type: 2,
        name: '屏东县',
        zipCode: '9',
        child: [
          {
            id: 713301,
            pid: 713300,
            type: 3,
            name: '屏东市',
            zipCode: '900',
            child: null
          },
          {
            id: 713321,
            pid: 713300,
            type: 3,
            name: '潮州镇',
            zipCode: '920',
            child: null
          },
          {
            id: 713322,
            pid: 713300,
            type: 3,
            name: '东港镇',
            zipCode: '928',
            child: null
          },
          {
            id: 713323,
            pid: 713300,
            type: 3,
            name: '恒春镇',
            zipCode: '946',
            child: null
          },
          {
            id: 713324,
            pid: 713300,
            type: 3,
            name: '万丹乡',
            zipCode: '913',
            child: null
          },
          {
            id: 713325,
            pid: 713300,
            type: 3,
            name: '长治乡',
            zipCode: '908',
            child: null
          },
          {
            id: 713326,
            pid: 713300,
            type: 3,
            name: '麟洛乡',
            zipCode: '909',
            child: null
          },
          {
            id: 713327,
            pid: 713300,
            type: 3,
            name: '九如乡',
            zipCode: '904',
            child: null
          },
          {
            id: 713328,
            pid: 713300,
            type: 3,
            name: '里港乡',
            zipCode: '905',
            child: null
          },
          {
            id: 713329,
            pid: 713300,
            type: 3,
            name: '盐埔乡',
            zipCode: '907',
            child: null
          },
          {
            id: 713330,
            pid: 713300,
            type: 3,
            name: '高树乡',
            zipCode: '906',
            child: null
          },
          {
            id: 713331,
            pid: 713300,
            type: 3,
            name: '万峦乡',
            zipCode: '923',
            child: null
          },
          {
            id: 713332,
            pid: 713300,
            type: 3,
            name: '内埔乡',
            zipCode: '912',
            child: null
          },
          {
            id: 713333,
            pid: 713300,
            type: 3,
            name: '竹田乡',
            zipCode: '911',
            child: null
          },
          {
            id: 713334,
            pid: 713300,
            type: 3,
            name: '新埤乡',
            zipCode: '925',
            child: null
          },
          {
            id: 713335,
            pid: 713300,
            type: 3,
            name: '枋寮乡',
            zipCode: '940',
            child: null
          },
          {
            id: 713336,
            pid: 713300,
            type: 3,
            name: '新园乡',
            zipCode: '932',
            child: null
          },
          {
            id: 713337,
            pid: 713300,
            type: 3,
            name: '崁顶乡',
            zipCode: '924',
            child: null
          },
          {
            id: 713338,
            pid: 713300,
            type: 3,
            name: '林边乡',
            zipCode: '927',
            child: null
          },
          {
            id: 713339,
            pid: 713300,
            type: 3,
            name: '南州乡',
            zipCode: '926',
            child: null
          },
          {
            id: 713340,
            pid: 713300,
            type: 3,
            name: '佳冬乡',
            zipCode: '931',
            child: null
          },
          {
            id: 713341,
            pid: 713300,
            type: 3,
            name: '琉球乡',
            zipCode: '929',
            child: null
          },
          {
            id: 713342,
            pid: 713300,
            type: 3,
            name: '车城乡',
            zipCode: '944',
            child: null
          },
          {
            id: 713343,
            pid: 713300,
            type: 3,
            name: '满州乡',
            zipCode: '947',
            child: null
          },
          {
            id: 713344,
            pid: 713300,
            type: 3,
            name: '枋山乡',
            zipCode: '941',
            child: null
          },
          {
            id: 713345,
            pid: 713300,
            type: 3,
            name: '三地门乡',
            zipCode: '901',
            child: null
          },
          {
            id: 713346,
            pid: 713300,
            type: 3,
            name: '雾台乡',
            zipCode: '902',
            child: null
          },
          {
            id: 713347,
            pid: 713300,
            type: 3,
            name: '玛家乡',
            zipCode: '903',
            child: null
          },
          {
            id: 713348,
            pid: 713300,
            type: 3,
            name: '泰武乡',
            zipCode: '921',
            child: null
          },
          {
            id: 713349,
            pid: 713300,
            type: 3,
            name: '来义乡',
            zipCode: '922',
            child: null
          },
          {
            id: 713350,
            pid: 713300,
            type: 3,
            name: '春日乡',
            zipCode: '942',
            child: null
          },
          {
            id: 713351,
            pid: 713300,
            type: 3,
            name: '狮子乡',
            zipCode: '943',
            child: null
          },
          {
            id: 713352,
            pid: 713300,
            type: 3,
            name: '牡丹乡',
            zipCode: '945',
            child: null
          }
        ]
      },
      {
        id: 713400,
        pid: 710000,
        type: 2,
        name: '台东县',
        zipCode: '9',
        child: [
          {
            id: 713401,
            pid: 713400,
            type: 3,
            name: '台东市',
            zipCode: '950',
            child: null
          },
          {
            id: 713421,
            pid: 713400,
            type: 3,
            name: '成功镇',
            zipCode: '961',
            child: null
          },
          {
            id: 713422,
            pid: 713400,
            type: 3,
            name: '关山镇',
            zipCode: '956',
            child: null
          },
          {
            id: 713423,
            pid: 713400,
            type: 3,
            name: '卑南乡',
            zipCode: '954',
            child: null
          },
          {
            id: 713424,
            pid: 713400,
            type: 3,
            name: '鹿野乡',
            zipCode: '955',
            child: null
          },
          {
            id: 713425,
            pid: 713400,
            type: 3,
            name: '池上乡',
            zipCode: '958',
            child: null
          },
          {
            id: 713426,
            pid: 713400,
            type: 3,
            name: '东河乡',
            zipCode: '959',
            child: null
          },
          {
            id: 713427,
            pid: 713400,
            type: 3,
            name: '长滨乡',
            zipCode: '962',
            child: null
          },
          {
            id: 713428,
            pid: 713400,
            type: 3,
            name: '太麻里乡',
            zipCode: '963',
            child: null
          },
          {
            id: 713429,
            pid: 713400,
            type: 3,
            name: '大武乡',
            zipCode: '965',
            child: null
          },
          {
            id: 713430,
            pid: 713400,
            type: 3,
            name: '绿岛乡',
            zipCode: '951',
            child: null
          },
          {
            id: 713431,
            pid: 713400,
            type: 3,
            name: '海端乡',
            zipCode: '957',
            child: null
          },
          {
            id: 713432,
            pid: 713400,
            type: 3,
            name: '延平乡',
            zipCode: '953',
            child: null
          },
          {
            id: 713433,
            pid: 713400,
            type: 3,
            name: '金峰乡',
            zipCode: '964',
            child: null
          },
          {
            id: 713434,
            pid: 713400,
            type: 3,
            name: '达仁乡',
            zipCode: '966',
            child: null
          },
          {
            id: 713435,
            pid: 713400,
            type: 3,
            name: '兰屿乡',
            zipCode: '952',
            child: null
          }
        ]
      },
      {
        id: 713500,
        pid: 710000,
        type: 2,
        name: '花莲县',
        zipCode: '9',
        child: [
          {
            id: 713501,
            pid: 713500,
            type: 3,
            name: '花莲市',
            zipCode: '970',
            child: null
          },
          {
            id: 713521,
            pid: 713500,
            type: 3,
            name: '凤林镇',
            zipCode: '975',
            child: null
          },
          {
            id: 713522,
            pid: 713500,
            type: 3,
            name: '玉里镇',
            zipCode: '981',
            child: null
          },
          {
            id: 713523,
            pid: 713500,
            type: 3,
            name: '新城乡',
            zipCode: '971',
            child: null
          },
          {
            id: 713524,
            pid: 713500,
            type: 3,
            name: '吉安乡',
            zipCode: '973',
            child: null
          },
          {
            id: 713525,
            pid: 713500,
            type: 3,
            name: '寿丰乡',
            zipCode: '974',
            child: null
          },
          {
            id: 713526,
            pid: 713500,
            type: 3,
            name: '光复乡',
            zipCode: '976',
            child: null
          },
          {
            id: 713527,
            pid: 713500,
            type: 3,
            name: '丰滨乡',
            zipCode: '977',
            child: null
          },
          {
            id: 713528,
            pid: 713500,
            type: 3,
            name: '瑞穗乡',
            zipCode: '978',
            child: null
          },
          {
            id: 713529,
            pid: 713500,
            type: 3,
            name: '富里乡',
            zipCode: '983',
            child: null
          },
          {
            id: 713530,
            pid: 713500,
            type: 3,
            name: '秀林乡',
            zipCode: '972',
            child: null
          },
          {
            id: 713531,
            pid: 713500,
            type: 3,
            name: '万荣乡',
            zipCode: '979',
            child: null
          },
          {
            id: 713532,
            pid: 713500,
            type: 3,
            name: '卓溪乡',
            zipCode: '982',
            child: null
          }
        ]
      },
      {
        id: 713600,
        pid: 710000,
        type: 2,
        name: '澎湖县',
        zipCode: '8',
        child: [
          {
            id: 713601,
            pid: 713600,
            type: 3,
            name: '马公市',
            zipCode: '880',
            child: null
          },
          {
            id: 713621,
            pid: 713600,
            type: 3,
            name: '湖西乡',
            zipCode: '885',
            child: null
          },
          {
            id: 713622,
            pid: 713600,
            type: 3,
            name: '白沙乡',
            zipCode: '884',
            child: null
          },
          {
            id: 713623,
            pid: 713600,
            type: 3,
            name: '西屿乡',
            zipCode: '881',
            child: null
          },
          {
            id: 713624,
            pid: 713600,
            type: 3,
            name: '望安乡',
            zipCode: '882',
            child: null
          },
          {
            id: 713625,
            pid: 713600,
            type: 3,
            name: '七美乡',
            zipCode: '883',
            child: null
          }
        ]
      },
      {
        id: 713700,
        pid: 710000,
        type: 2,
        name: '金门县',
        zipCode: '8',
        child: [
          {
            id: 713701,
            pid: 713700,
            type: 3,
            name: '金城镇',
            zipCode: '893',
            child: null
          },
          {
            id: 713702,
            pid: 713700,
            type: 3,
            name: '金湖镇',
            zipCode: '891',
            child: null
          },
          {
            id: 713703,
            pid: 713700,
            type: 3,
            name: '金沙镇',
            zipCode: '890',
            child: null
          },
          {
            id: 713704,
            pid: 713700,
            type: 3,
            name: '金宁乡',
            zipCode: '892',
            child: null
          },
          {
            id: 713705,
            pid: 713700,
            type: 3,
            name: '烈屿乡',
            zipCode: '894',
            child: null
          },
          {
            id: 713706,
            pid: 713700,
            type: 3,
            name: '乌丘乡',
            zipCode: '896',
            child: null
          }
        ]
      },
      {
        id: 713800,
        pid: 710000,
        type: 2,
        name: '连江县',
        zipCode: '2',
        child: [
          {
            id: 713801,
            pid: 713800,
            type: 3,
            name: '南竿乡',
            zipCode: '209',
            child: null
          },
          {
            id: 713802,
            pid: 713800,
            type: 3,
            name: '北竿乡',
            zipCode: '210',
            child: null
          },
          {
            id: 713803,
            pid: 713800,
            type: 3,
            name: '莒光乡',
            zipCode: '211',
            child: null
          },
          {
            id: 713804,
            pid: 713800,
            type: 3,
            name: '东引乡',
            zipCode: '212',
            child: null
          }
        ]
      }
    ]
  },
  {
    id: 810000,
    pid: 100000,
    type: 1,
    name: '香港特别行政区',
    zipCode: '',
    child: [
      {
        id: 810100,
        pid: 810000,
        type: 2,
        name: '香港岛',
        zipCode: '999077',
        child: [
          {
            id: 810101,
            pid: 810100,
            type: 3,
            name: '中西区',
            zipCode: '999077',
            child: null
          },
          {
            id: 810102,
            pid: 810100,
            type: 3,
            name: '湾仔区',
            zipCode: '999077',
            child: null
          },
          {
            id: 810103,
            pid: 810100,
            type: 3,
            name: '东区',
            zipCode: '999077',
            child: null
          },
          {
            id: 810104,
            pid: 810100,
            type: 3,
            name: '南区',
            zipCode: '999077',
            child: null
          }
        ]
      },
      {
        id: 810200,
        pid: 810000,
        type: 2,
        name: '九龙',
        zipCode: '999077',
        child: [
          {
            id: 810201,
            pid: 810200,
            type: 3,
            name: '油尖旺区',
            zipCode: '999077',
            child: null
          },
          {
            id: 810202,
            pid: 810200,
            type: 3,
            name: '深水埗区',
            zipCode: '999077',
            child: null
          },
          {
            id: 810203,
            pid: 810200,
            type: 3,
            name: '九龙城区',
            zipCode: '999077',
            child: null
          },
          {
            id: 810204,
            pid: 810200,
            type: 3,
            name: '黄大仙区',
            zipCode: '999077',
            child: null
          },
          {
            id: 810205,
            pid: 810200,
            type: 3,
            name: '观塘区',
            zipCode: '999077',
            child: null
          }
        ]
      },
      {
        id: 810300,
        pid: 810000,
        type: 2,
        name: '新界',
        zipCode: '999077',
        child: [
          {
            id: 810301,
            pid: 810300,
            type: 3,
            name: '荃湾区',
            zipCode: '999077',
            child: null
          },
          {
            id: 810302,
            pid: 810300,
            type: 3,
            name: '屯门区',
            zipCode: '999077',
            child: null
          },
          {
            id: 810303,
            pid: 810300,
            type: 3,
            name: '元朗区',
            zipCode: '999077',
            child: null
          },
          {
            id: 810304,
            pid: 810300,
            type: 3,
            name: '北区',
            zipCode: '999077',
            child: null
          },
          {
            id: 810305,
            pid: 810300,
            type: 3,
            name: '大埔区',
            zipCode: '999077',
            child: null
          },
          {
            id: 810306,
            pid: 810300,
            type: 3,
            name: '西贡区',
            zipCode: '999077',
            child: null
          },
          {
            id: 810307,
            pid: 810300,
            type: 3,
            name: '沙田区',
            zipCode: '999077',
            child: null
          },
          {
            id: 810308,
            pid: 810300,
            type: 3,
            name: '葵青区',
            zipCode: '999077',
            child: null
          },
          {
            id: 810309,
            pid: 810300,
            type: 3,
            name: '离岛区',
            zipCode: '999077',
            child: null
          }
        ]
      }
    ]
  },
  {
    id: 820000,
    pid: 100000,
    type: 1,
    name: '澳门特别行政区',
    zipCode: '',
    child: [
      {
        id: 820100,
        pid: 820000,
        type: 2,
        name: '澳门半岛',
        zipCode: '999078',
        child: [
          {
            id: 820101,
            pid: 820100,
            type: 3,
            name: '花地玛堂区',
            zipCode: '999078',
            child: null
          },
          {
            id: 820102,
            pid: 820100,
            type: 3,
            name: '圣安多尼堂区',
            zipCode: '999078',
            child: null
          },
          {
            id: 820103,
            pid: 820100,
            type: 3,
            name: '大堂区',
            zipCode: '999078',
            child: null
          },
          {
            id: 820104,
            pid: 820100,
            type: 3,
            name: '望德堂区',
            zipCode: '999078',
            child: null
          },
          {
            id: 820105,
            pid: 820100,
            type: 3,
            name: '风顺堂区',
            zipCode: '999078',
            child: null
          }
        ]
      },
      {
        id: 820200,
        pid: 820000,
        type: 2,
        name: '氹仔岛',
        zipCode: '999078',
        child: [
          {
            id: 820201,
            pid: 820200,
            type: 3,
            name: '嘉模堂区',
            zipCode: '999078',
            child: null
          }
        ]
      },
      {
        id: 820300,
        pid: 820000,
        type: 2,
        name: '路环岛',
        zipCode: '999078',
        child: [
          {
            id: 820301,
            pid: 820300,
            type: 3,
            name: '圣方济各堂区',
            zipCode: '999078',
            child: null
          }
        ]
      }
    ]
  },
  {
    id: 900000,
    pid: 100000,
    type: 1,
    name: '钓鱼岛',
    zipCode: '',
    child: null
  }
]
