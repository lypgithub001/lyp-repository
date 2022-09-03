<template>
  <div>
    <el-dialog-module
      :isShow="isShow"
      :title="title"
      @onClose="onClose"
      :dialogButton="dialogButton"
      @onSubmit="onClose"
      width="1000px"
    >
      <template #content>
        <div>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt"
              >【审慎阅读】您在申请注册流程中点击同意前，应当认真阅读以下协议。请您务必审慎阅读、充分理解协议中相关条款内容，其中包括：</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">1</span
            ><span style="font-family: 宋体; font-size: 10.5pt">、与您约定免除或限制责任的条款；</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">2</span
            ><span style="font-family: 宋体; font-size: 10.5pt">、与您约定法律适用和管辖的条款；</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">如您对协议有任何疑问，可向智采云客服中心咨询</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">【特别提示】 您已充分理解，智采云</span
            ><span style="font-family: Calibri; font-size: 10.5pt">SaaS</span
            ><span style="font-family: 宋体; font-size: 10.5pt"
              >平台是一个采供协同平台，当您按照注册页面提示填写信息、阅读并同意协议且完成全部注册程序后，即表示您已充分阅读、理解并接受协议的全部内容，并将基于您的真实贸易需求而使用智采云服务。如您因智采云服务与智采云发生争议，应适用《智采云服务条款》处理；如您在使用智采云服务中与其他用户发生争议，依您与其他用户达成的协议处理。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">阅读协议的过程中，如果您不同意相关协议或其中任何条款约定，您应立即停止注册程序。</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">《智采云服务条款》</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">《隐私政策》</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">智采云服务条款</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">最后更新日期：</span><span style="font-family: Calibri; font-size: 10.5pt">2022</span
            ><span style="font-family: 宋体; font-size: 10.5pt">年</span><span style="font-family: Calibri; font-size: 10.5pt">5</span
            ><span style="font-family: 宋体; font-size: 10.5pt">月</span><span style="font-family: Calibri; font-size: 10.5pt">6</span
            ><span style="font-family: 宋体; font-size: 10.5pt">日</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt"
              >欢迎“您”（以下或称“用户”）与“智采云（北京）科技有限公司”（下称“智采云”）共同签署本《智采云服务条款》协议（下称“本协议”），本协议阐述之条款和条件适用于您使用智采云基于互联网，以包含智采云中国网站、客户端等在内的各种形态（包括未来技术发展出现的新的服务形态）向您提供的各项服务。
            </span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt"
              >本协议为《智采云服务条款》修订版本，自本协议发布之日起，智采云各处所称“智采云服务条款”均指本协议。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">一、接受协议</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">1.1 </span
            ><span style="font-family: 宋体; font-size: 10.5pt"
              >本协议内容包括协议正文及所有智采云已经发布或将来可能发布并采取合理途径通知的各类规则。所有规则为协议不可分割的一部分，与协议正文具有同等法律效力。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">1.2</span
            ><span style="font-family: 宋体; font-size: 10.5pt"
              >您在点击同意本协议之前，应当认真阅读本协议。请您务必审慎阅读、充分理解各条款内容，特别是免除或者限制责任的条款、法律适用和争议解决条款。免除或者限制责任的条款将以粗体下划线标识，您应重点阅读。如您对协议有任何疑问，可登录智采云网站向智采云客服咨询。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">1.3</span
            ><span style="font-family: 宋体; font-size: 10.5pt"
              >当您按照注册页面提示填写信息、阅读并同意本协议且完成全部注册程序，或以任何方式进入智采云并使用服务即表示您已充分阅读、理解并同意接受本协议的条款和条件。阅读本协议的过程中，如果您不同意本协议或其中任何条款约定，您应立即停止注册程序并停止使用服务。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">二、定义</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">2.1</span
            ><span style="font-family: 宋体; font-size: 10.5pt">智采云：指智采云主办运营的面向企业间贸易 </span
            ><span style="font-family: Calibri; font-size: 10.5pt">(B-TO-B)</span
            ><span style="font-family: 宋体; font-size: 10.5pt">的在线信息发布及交易平台，包含智采云中国网站及客户端。</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">2.2</span
            ><span style="font-family: 宋体; font-size: 10.5pt">智采云：指“智采云（北京）科技有限公司”，系智采云的经营者。</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">2.3</span
            ><span style="font-family: 宋体; font-size: 10.5pt"
              >智采云服务：指智采云公司基于互联网，以包含智采云网站、客户端等在内的各种形态（包括未来技术发展出现的新的服务形态）向您提供的各项服务（下称“服务”）。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">2.4</span
            ><span style="font-family: 宋体; font-size: 10.5pt"
              >智采云规则：指在智采云内已发布及后续发布的全部规则、解读、公告等内容以及帮助中心等渠道发布的各类规则、实施细则、产品流程说明、公告等。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">2.5</span
            ><span style="font-family: 宋体; font-size: 10.5pt">支付公司：指提供支付服务的主体“中金支付有限公司”。</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">三、协议范围</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">3.1</span><span style="font-family: 宋体; font-size: 10.5pt">签约主体</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">本协议由您与智采云共同缔结，本协议对您与智采云具有同等合同效力。</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">3.2</span><span style="font-family: 宋体; font-size: 10.5pt">补充协议</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt"
              >由于互联网高速发展，您与智采云签署的本协议列明的条款并不能完整罗列并覆盖您与智采云所有权利与义务，现有的约定也不能保证完全符合未来发展的需求。因此，智采云法律声明、隐私政策、智采云规则均为本协议的补充协议，与本协议不可分割且具有同等法律效力。如您使用智采云服务，视为您同意上述补充协议。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">四、账户注册与使用</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">4.1</span><span style="font-family: 宋体; font-size: 10.5pt">用户资格</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">4.1.1</span
            ><span style="font-family: 宋体; font-size: 10.5pt"
              >您确认，在您完成注册程序或以其他智采云允许的方式实际使用服务时，您应当具备中华人民共和国法律规定的与您行为相适应的民事行为能力。若您不具备前述与您行为相适应的民事行为能力，则您及您的监护人应依照法律规定承担因此而导致的相应后果，且智采云有权终止向您提供服务并注销您的账户。如您代表一家公司或其他法律主体在智采云注册，则您声明和保证，您有权使该公司或该法律主体受本协议的约束。
            </span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">4.1.2</span
            ><span style="font-family: 宋体; font-size: 10.5pt"
              >此外，您还需确保您不是任何国家、国际组织或者地域实施的贸易限制、制裁或其他法律、规则限制的对象，否则您可能无法正常注册及使用服务。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">4.2</span><span style="font-family: 宋体; font-size: 10.5pt">账户注册</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">4.2.1</span
            ><span style="font-family: 宋体; font-size: 10.5pt"
              >在您按照注册页面提示填写信息、阅读并同意本协议且完成全部注册程序后，或在您按照激活页面提示填写信息、阅读并同意本协议且完成全部激活程序后，或您以其他智采云允许的方式实际使用智采云服务时，您即受本协议的约束。您可以使用您提供或确认的邮箱、手机号码或者智采云允许的其它方式作为登录手段进入智采云。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">4.2.2</span
            ><span style="font-family: 宋体; font-size: 10.5pt"
              >您了解并同意，如您系在智采云完成的注册程序，只要您注册成功，您即可以获得您的登录名（以下或称“账户”）。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">4.2.3</span
            ><span style="font-family: 宋体; font-size: 10.5pt"
              >由于您的账户关联您的信息及智采云商业信息，您的账户仅限您本人使用。未经智采云同意，您直接或间接授权第三方使用您账户或获取您账户项下信息的行为无效。如智采云根据您账户的使用行为等情况判断您账户的使用可能危及您的账户安全及</span
            ><span style="font-family: Calibri; font-size: 10.5pt">/</span
            ><span style="font-family: 宋体; font-size: 10.5pt">或智采云信息安全的，智采云可拒绝提供相应服务或终止本协议。</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">4.3</span><span style="font-family: 宋体; font-size: 10.5pt">账户转让</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt"
              >由于用户账户关联用户信用信息，仅当有法律明文规定、司法裁定或经智采云同意，并符合智采云规则规定的账户转让流程的情况下，您可进行账户的转让。您的账户一经转让，该账户项下权利义务一并转移。除此外，您的账户不得以任何方式转让，否则智采云有权追究您的违约责任，且由此产生的相应责任均由您承担。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">4.4</span><span style="font-family: 宋体; font-size: 10.5pt">实名认证</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt"
              >为使您更好地使用智采云的各项服务，保障您的账户安全，智采云可要求您按国家法律法规的规定完成实名认证。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">4.5</span><span style="font-family: 宋体; font-size: 10.5pt">不活跃账户回收</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt"
              >如您的账户同时符合以下条件，您的智采云登录名可能被注销，不能再登陆任一智采云平台，所有平台服务将同时终止：</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">（一）未按照国家相关法律法规以及智采云要求通过实名认证；</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">（二）连续</span><span style="font-family: Calibri; font-size: 10.5pt">6</span
            ><span style="font-family: 宋体; font-size: 10.5pt">个月未不存在未到期的有效业务。</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">4.6</span><span style="font-family: 宋体; font-size: 10.5pt">注册信息管理</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">4.6.1</span
            ><span style="font-family: 宋体; font-size: 10.5pt"
              >在完成注册或激活流程时，您应当按智采云相应页面的提示准确完整地提供并及时更新您的信息，以使之始终保持真实、及时，完整和准确。在国家法律法规有明确规定要求智采云作为平台服务提供者必须对用户（如卖家等）的信息进行核实的情况下，智采云将依法不时地对您的信息进行检查核实，您应当配合提供最新、真实、完整、有效的信息。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">4.6.2</span
            ><span style="font-family: 宋体; font-size: 10.5pt"
              >如智采云按您最后一次提供的信息与您联系未果、您未按智采云的要求及时提供信息、您提供的信息存在明显不实或行政司法机关核实您提供的信息无效的，您将承担因此对您自身、他人及智采云造成的全部损失与不利后果。智采云可向您发出询问或要求整改的通知，并要求您进行重新认证，直至中止、终止对您提供部分或全部智采云服务，除法律明确规定外智采云对此不承担责任。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">4.6.3</span
            ><span style="font-family: 宋体; font-size: 10.5pt"
              >您设置的账户登录名及昵称不得违反国家法律法规及智采云规则的相应管理规定，否则智采云可回收您的登录名及昵称，并按智采云规则进行相应的处理。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">4.7</span><span style="font-family: 宋体; font-size: 10.5pt">账户安全 </span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">4.7.1</span
            ><span style="font-family: 宋体; font-size: 10.5pt"
              >您的账户为您自行设置并由您保管，智采云任何时候均不会主动要求您提供您的账户密码。因此，建议您务必保管好您的账户，并确保您在每个上网时段结束时退出登录并以正确步骤离开智采云。账户因您主动泄露或因您遭受他人攻击、诈骗等行为导致的损失及后果，智采云并不承担责任，您应通过司法、行政等救济途径向侵权行为人追偿。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">4.7.2</span
            ><span style="font-family: 宋体; font-size: 10.5pt"
              >除智采云存在过错外，您应对您账户项下的所有行为结果（包括但不限于在线签署各类协议、发布信息、询</span
            ><span style="font-family: Calibri; font-size: 10.5pt">/</span
            ><span style="font-family: 宋体; font-size: 10.5pt">报价、采购产品、订购服务及披露信息等）负责。</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">4.7.3</span
            ><span style="font-family: 宋体; font-size: 10.5pt"
              >如发现任何未经授权使用您账户登录智采云或其他可能导致您账户遭窃、遗失的情况，建议您立即通知智采云。您理解智采云对您的任何请求采取行动均需要合理时间，且智采云应您请求而采取的行动可能无法避免或阻止侵害后果的形成或扩大，除智采云存在法定过错外，智采云不承担责任。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">五、服务及规范</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">您有权在智采云上享受销售端管理、产品及</span
            ><span style="font-family: Calibri; font-size: 10.5pt">/</span
            ><span style="font-family: 宋体; font-size: 10.5pt">或服务的报价、销售与推广、产品及</span
            ><span style="font-family: Calibri; font-size: 10.5pt">/</span
            ><span style="font-family: 宋体; font-size: 10.5pt"
              >或服务的询价、采购与评价、交易争议处理等服务。智采云提供的服务内容众多，具体您可登录智采云浏览。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">5.1</span><span style="font-family: 宋体; font-size: 10.5pt">销售端管理</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">5.1.1</span
            ><span style="font-family: 宋体; font-size: 10.5pt">通过在智采云创建销售端，您可发布各类产品及</span
            ><span style="font-family: Calibri; font-size: 10.5pt">/</span
            ><span style="font-family: 宋体; font-size: 10.5pt">或服务信息，并与其他用户达成交易。</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">5.1.2</span
            ><span style="font-family: 宋体; font-size: 10.5pt"
              >如您通过下架全部产品短暂关停您的销售端，您仍应当对您销售端关停前已达成的交易继续承担发货、纠纷及投诉处理等交易保障责任。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">5.2</span><span style="font-family: 宋体; font-size: 10.5pt">产品及</span
            ><span style="font-family: Calibri; font-size: 10.5pt">/</span><span style="font-family: 宋体; font-size: 10.5pt">或服务的报价、销售与推广</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">5.2.1</span
            ><span style="font-family: 宋体; font-size: 10.5pt">通过智采云提供的服务，您有权通过文字、图片等形式在智采云上发布产品及</span
            ><span style="font-family: Calibri; font-size: 10.5pt">/</span
            ><span style="font-family: 宋体; font-size: 10.5pt">或服务信息、进行报价、招揽和物色交易对象、达成交易。</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">5.2.2</span
            ><span style="font-family: 宋体; font-size: 10.5pt">您应当确保您对您在智采云上发布的产品及</span
            ><span style="font-family: Calibri; font-size: 10.5pt">/</span
            ><span style="font-family: 宋体; font-size: 10.5pt">或服务享有相应的权利，您不得在智采云上销售以下产品及</span
            ><span style="font-family: Calibri; font-size: 10.5pt">/</span><span style="font-family: 宋体; font-size: 10.5pt">或提供以下服务：</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">（一）国家禁止或限制的；</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">（二）侵犯他人知识产权或其它合法权益的；</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">（三）智采云规则、公告、通知或各平台与您单独签署的协议中已明确说明不适合在智采云上销售及</span
            ><span style="font-family: Calibri; font-size: 10.5pt">/</span><span style="font-family: 宋体; font-size: 10.5pt">或提供的。</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">5.2.3</span
            ><span style="font-family: 宋体; font-size: 10.5pt">您应当遵守诚实信用原则，确保您所发布的产品及</span
            ><span style="font-family: Calibri; font-size: 10.5pt">/</span
            ><span style="font-family: 宋体; font-size: 10.5pt">或服务信息真实、与您实际所销售的产品及</span
            ><span style="font-family: Calibri; font-size: 10.5pt">/</span
            ><span style="font-family: 宋体; font-size: 10.5pt"
              >或提供的服务相符，并在交易过程中切实履行您的交易承诺。您应当维护智采云良性的市场竞争秩序，不得贬低、诋毁竞争对手，不得干扰智采云上进行的任何交易、活动，不得以任何不正当方式提升或试图提升自身的信用度，不得以任何方式干扰或试图干扰智采云的正常运作。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">5.2.4</span><span style="font-family: 宋体; font-size: 10.5pt">您有权自行决定产品及</span
            ><span style="font-family: Calibri; font-size: 10.5pt">/</span
            ><span style="font-family: 宋体; font-size: 10.5pt"
              >或服务的促销及推广方式，智采云亦为您提供了形式丰富的促销推广工具。您的促销推广行为应当符合国家相关法律法规及智采云的要求。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">5.2.5</span
            ><span style="font-family: 宋体; font-size: 10.5pt">依法纳税是每一个公民、企业应尽的义务，您应对销售额</span
            ><span style="font-family: Calibri; font-size: 10.5pt">/</span
            ><span style="font-family: 宋体; font-size: 10.5pt">营业额超过法定免征额部分及时、足额地向税务主管机关申报纳税。</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">5.3</span><span style="font-family: 宋体; font-size: 10.5pt">产品及</span
            ><span style="font-family: Calibri; font-size: 10.5pt">/</span><span style="font-family: 宋体; font-size: 10.5pt">或服务的询价、采购与评价</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">5.3.1</span
            ><span style="font-family: 宋体; font-size: 10.5pt">当您在智采云询价、采购产品及</span><span style="font-family: Calibri; font-size: 10.5pt">/</span
            ><span style="font-family: 宋体; font-size: 10.5pt"
              >或服务时，请您务必仔细确认采购产品的品名、价格、数量、型号、规格、尺寸或服务的时间、内容、限制性要求等重要事项，并在采购下单时核实您的联系地址、电话、收货人等信息。如您填写的收货人非您本人，则该收货人的行为和意思表示产生的法律后果均由您承担。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">5.3.2</span
            ><span style="font-family: 宋体; font-size: 10.5pt"
              >您充分了解并同意，智采云是一个商业贸易采购平台，而并非面向消费者的消费购买市场，故您的询价、采购行为应当基于真实的贸易需求，不得存在对产品及</span
            ><span style="font-family: Calibri; font-size: 10.5pt">/</span
            ><span style="font-family: 宋体; font-size: 10.5pt"
              >或服务实施恶意询价、采购、恶意维权等扰乱智采云正常交易秩序的行为。基于维护智采云交易秩序及交易安全的需要，智采云发现上述情形时可主动执行关闭相关交易订单等操作。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">5.3.3</span
            ><span style="font-family: 宋体; font-size: 10.5pt">您有权在智采云提供的评价系统中对与您达成交易的其他用户产品及</span
            ><span style="font-family: Calibri; font-size: 10.5pt">/</span
            ><span style="font-family: 宋体; font-size: 10.5pt"
              >或服务进行评价。您的所有评价行为应遵守智采云规则的相关规定，评价内容应当客观真实，不应包含任何污言秽语、色情低俗、广告信息及法律法规与本协议列明的其他禁止性信息；您不应以不正当方式帮助他人提升信用或利用评价权利对其他用户实施威胁、敲诈勒索。智采云可按照智采云规则的相关规定对您实施上述行为所产生的评价信息进行删除或屏蔽。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">5.3.4 </span
            ><span style="font-family: 宋体; font-size: 10.5pt">如您在智采云询价、采购的产品及</span
            ><span style="font-family: Calibri; font-size: 10.5pt">/</span><span style="font-family: 宋体; font-size: 10.5pt">或服务为用于对外出口的商品及</span
            ><span style="font-family: Calibri; font-size: 10.5pt">/</span><span style="font-family: 宋体; font-size: 10.5pt">或服务：</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">5.3.4.1 </span
            ><span style="font-family: 宋体; font-size: 10.5pt"
              >您承诺遵守所有适用的进出口管制、贸易限制与经济制裁相关法律法规。 如您违反前述承诺的，智采云可在发现上述情形时停止提供相关服务。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">5.3.4.2</span
            ><span style="font-family: 宋体; font-size: 10.5pt"
              >您需确保您不是任何国家、地区或国际组织实施的贸易限制、经济制裁或其他法律法规限制的对象，也未直接或间接为前述对象提供资金、商品或服务，否则您应当停止使用智采云提供的服务，同时您理解违反前述要求可能会造成您无法正常注册及使用智采云服务。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">5.3.5 </span
            ><span style="font-family: 宋体; font-size: 10.5pt"
              >针对通过智采云平台取得的商品、服务、软件及技术，您承诺遵守所有适用的进出口管制、贸易限制与经济制裁相关法律法规，包括联合国安全理事会、中国、美国及任何其他国家制定并执行的制裁决议、法律法规。基于维护交易秩序及交易安全的需要，如您违反前述承诺的，智采云可在发现上述情形时终止服务及主动执行关闭相关交易订单及作出账户处置等操作。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">5.4</span><span style="font-family: 宋体; font-size: 10.5pt">交易争议处理</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">5.4.1 </span
            ><span style="font-family: 宋体; font-size: 10.5pt"
              >您可通过智采云所支持的交易方式与其他用户达成交易，并遵守相应交易与支付规则。您理解并同意，智采云仅作为用户物色交易对象，就产品和服务的交易进行协商，以及获取各类与贸易相关的服务的地点，智采云不会参与用户间的交易，亦不会涉及用户间因交易而产生的法律关系及法律纠纷。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">5.4.2</span
            ><span style="font-family: 宋体; font-size: 10.5pt">您在智采云交易过程中与其他用户发生争议的，您或其他用户中任何一方均有权选择以下途径解决：</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">（一）与争议相对方自主协商；</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">（二）使用智采云提供的争议调处服务；</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">（三）向有关行政部门投诉；</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">（四）根据与争议相对方达成的仲裁协议（如有）提请仲裁机构仲裁；</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">（五）向人民法院提起诉讼。</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">5.4.3</span
            ><span style="font-family: 宋体; font-size: 10.5pt"
              >如您依据智采云规则使用智采云的争议调处服务，则表示您认可并愿意履行智采云的客服作为独立的第三方根据其所了解到的争议事实并依据智采云规则所作出的调处决定（包括调整相关订单的交易状态、判定将争议款项的全部或部分支付给交易一方或双方、执行相应的保证金赔付等）。在智采云调处决定作出前，您可选择上述其他争议处理途径解决争议以中止智采云的争议调处服务。如您对调处决定不满意，您仍有权采取其他争议处理途径解决争议，但通过其他争议处理途径未取得终局决定前，您仍应先履行调处决定。
            </span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">六、费用</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">6.1</span
            ><span style="font-family: 宋体; font-size: 10.5pt"
              >智采云为您提供的服务付出了大量的成本，除智采云明示的收费业务外，智采云向您提供的服务目前是免费的。如未来智采云向您收取合理费用，智采云会采取合理途径并提前通过法定程序以本协议约定的有效方式通知您，确保您有充分选择的权利。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">6.2</span
            ><span style="font-family: 宋体; font-size: 10.5pt"
              >您因进行交易、向智采云获取有偿服务或接触智采云服务器而发生的所有应纳税赋，以及相关硬件、软件、通讯、网络服务及其他方面的费用均由您自行承担。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">七、责任限制</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">7.1</span
            ><span style="font-family: 宋体; font-size: 10.5pt"
              >智采云依照法律规定履行基础保障义务，但对于下述不可抗力或其他第三人因素原因导致的合同履行障碍、履行瑕疵、履行延后或履行内容变更等情形，智采云并不承担相应的违约责任：</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">（一）因自然灾害、罢工、暴乱、战争、政府行为、司法行政命令等不可抗力因素；</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">（二）因电力供应故障、通讯网络故障等公共服务因素或第三人因素；</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt"
              >（三）在智采云已尽善意管理的情况下，因常规或紧急的设备与系统维护、设备与系统故障、网络信息与数据安全等因素。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">7.2</span
            ><span style="font-family: 宋体; font-size: 10.5pt"
              >智采云仅向您提供本协议约定之服务，您了解智采云上的信息系用户自行发布，且可能存在风险和瑕疵。智采云将通过依照法律规定建立相关检查监控制度尽可能保障您在智采云的合法权益及良好体验。同时，鉴于智采云具备存在海量信息及信息网络环境下信息与实物相分离的特点，智采云作为网络交易平台无法逐一审查产品及</span
            ><span style="font-family: Calibri; font-size: 10.5pt">/</span
            ><span style="font-family: 宋体; font-size: 10.5pt">或服务的信息，无法逐一审查交易所涉及的产品及</span
            ><span style="font-family: Calibri; font-size: 10.5pt">/</span
            ><span style="font-family: 宋体; font-size: 10.5pt"
              >或服务的质量、安全以及合法性、真实性、准确性，对此您应谨慎判断，如发现存在危害信息和行为，请您及时同智采云进行联系和投诉，智采云将对有害信息和行为进行处理。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">7.3 </span
            ><span style="font-family: 宋体; font-size: 10.5pt"
              >您理解并同意，在争议调处服务中，智采云的客服并非专业人士，仅能以普通人的认知对用户提交的凭证进行判断，智采云不保证争议调处决定一定符合您的期望，除法律明确规定及存在故意或重大过失外，智采云对争议调处决定不承担责任。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">八、用户信息的保护及授权</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">8.1</span><span style="font-family: 宋体; font-size: 10.5pt">个人信息的保护</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt"
              >智采云非常重视用户个人信息（即能够独立或与其他信息结合后识别用户身份的信息）的保护，在您使用智采云提供的服务时，您同意智采云按照在智采云上公布的隐私政策收集、存储、使用、披露和保护您的个人信息。智采云希望通过隐私政策向您清楚地介绍智采云对您个人信息的处理方式，因此智采云建议您完整地阅读隐私政策（点击此处或点击智采云首页底部链接），以帮助您更好地保护您的隐私权。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">8.2</span><span style="font-family: 宋体; font-size: 10.5pt">非个人信息的保证与授权</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">8.2.1</span
            ><span style="font-family: 宋体; font-size: 10.5pt"
              >您声明并保证，您对您所发布的信息拥有相应、合法的权利。否则，智采云可对您发布的信息依法或依本协议进行删除或屏蔽。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">8.2.2</span
            ><span style="font-family: 宋体; font-size: 10.5pt">您应当确保您所发布的信息不包含以下内容：</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">（一）违反国家法律法规禁止性规定的；</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">（二）政治宣传、封建迷信、淫秽、色情、赌博、暴力、恐怖或者教唆犯罪的；</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">（三）欺诈、虚假、不准确或存在误导性的；</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">（四）侵犯他人知识产权或涉及第三方商业秘密及其他专有权利的；</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">（五）侮辱、诽谤、恐吓、涉及他人隐私等侵害他人合法权益的；</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt"
              >（六）存在可能破坏、篡改、删除、影响智采云任何系统正常运行或未经授权秘密获取智采云及其他用户的数据、个人资料的病毒、木马、爬虫等恶意软件、程序代码的；</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt"
              >（七）其他违背社会公共利益或公共道德或依据相关智采云协议、规则的规定不适合在智采云上发布的。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">8.2.3</span
            ><span style="font-family: 宋体; font-size: 10.5pt"
              >对于您提供、发布及在使用智采云服务中形成的除个人信息外的文字、图片、视频、音频等非个人信息，均不会因您的上传、发布等行为发生知识产权、肖像权等权利的转移。除非智采云另行明确说明，在法律允许的范围和法律规定的保护期限内，您免费授予智采云及其关联公司获得非排他的、无地域限制的许可使用（包括存储、使用、复制、修订、编辑、发布、展示、翻译、分发您的非个人信息或制作其派生作品，并以已知或日后开发的形式、媒体或技术将上述信息纳入其它作品内等）权利及可再授权给其他第三方使用的权利，以及可以自身名义对第三方侵权行为取证及提起诉讼的权利。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">九、用户的违约及处理</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">9.1</span><span style="font-family: 宋体; font-size: 10.5pt">违约认定</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">发生如下情形之一的，视为您违约：</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">（一）使用智采云服务时违反有关法律法规规定的；</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">（二）违反本协议或本协议补充协议（即本协议第</span
            ><span style="font-family: Calibri; font-size: 10.5pt">3.2</span><span style="font-family: 宋体; font-size: 10.5pt">条）约定的。</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt"
              >为适应电子商务发展和满足海量用户对高效优质服务的需求，您理解并同意，智采云可在智采云规则中约定违约认定的程序和标准。如：智采云可依据您的用户数据与海量用户数据的关系来认定您是否构成违约；您有义务对您的数据异常现象进行充分举证和合理解释，否则将被认定为违约。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">9.2</span><span style="font-family: 宋体; font-size: 10.5pt">违约处理措施</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">9.2.1</span
            ><span style="font-family: 宋体; font-size: 10.5pt"
              >您在智采云上发布的信息构成违约的，智采云可根据相应规则立即对相应信息进行删除、屏蔽处理或对您的产品进行下架、删除、监管。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">9.2.2</span
            ><span style="font-family: 宋体; font-size: 10.5pt"
              >您在智采云上实施的行为，或虽未在智采云上实施但对智采云及其用户产生影响的行为构成违约的，智采云可依据相应规则对您执行账户扣分、限制参加营销活动、中止向您提供部分或全部服务、划扣违约金等处理措施。如您的行为构成根本违约的，智采云可关闭您的账户，终止向您提供服务。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">9.2.3</span
            ><span style="font-family: 宋体; font-size: 10.5pt"
              >当您违约的同时存在欺诈、售假、盗用他人账户等特定情形或您存在危及他人交易安全或账户安全风险时，智采云会依照您行为的风险程度指示支付公司对您的（及您账户绑定的，下同）支付账户采取取消收款、资金止付等强制措施。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">9.2.4</span
            ><span style="font-family: 宋体; font-size: 10.5pt"
              >智采云可将对您上述违约行为处理措施信息以及其他经国家行政或司法机关生效法律文书确认的违法信息在智采云上予以公示。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">9.3</span><span style="font-family: 宋体; font-size: 10.5pt">赔偿责任</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">9.3.1</span><span style="font-family: 宋体; font-size: 10.5pt">如您的行为使智采云及</span
            ><span style="font-family: Calibri; font-size: 10.5pt">/</span
            ><span style="font-family: 宋体; font-size: 10.5pt">或其关联公司、支付公司遭受损失，您应根据本协议履行赔偿责任，您需赔偿智采云及</span
            ><span style="font-family: Calibri; font-size: 10.5pt">/</span
            ><span style="font-family: 宋体; font-size: 10.5pt">或其关联公司、支付公司的因此遭受的损失（如有）包括：</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">（一）支付的合理律师费、诉讼费、消除影响所支出的必要费用；</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">（二）因行政处罚、司法裁判、法定标准范围内的调解等对外支出的罚款、违约金或赔偿金；</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt"
              >（三）商誉损失、合理预期利益损失（如会员的流失、支出减少、消费频次降低及销售端经营者收入减少等），具体金额可以第三方独立合理分析、智采云根据大数据合理分析及其他计算收益、损失的合理方法所得出的相关估算标准作为计算依据；</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">（四）因此遭受的其他损失。</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">9.3.2</span><span style="font-family: 宋体; font-size: 10.5pt">如您的行为使智采云及</span
            ><span style="font-family: Calibri; font-size: 10.5pt">/</span
            ><span style="font-family: 宋体; font-size: 10.5pt">或其关联公司、支付公司遭受第三人主张权利，智采云及</span
            ><span style="font-family: Calibri; font-size: 10.5pt">/</span
            ><span style="font-family: 宋体; font-size: 10.5pt">或其关联公司、支付公司可在对第三人承担金钱给付等义务后就全部损失向您追偿。</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">9.3.3</span
            ><span style="font-family: 宋体; font-size: 10.5pt">如因您的行为使得第三人遭受损失或您怠于履行调处决定，您授权并同意智采云及</span
            ><span style="font-family: Calibri; font-size: 10.5pt">/</span
            ><span style="font-family: 宋体; font-size: 10.5pt"
              >或其关联公司出于保护社会公共利益或保护其他用户合法权益目的，可指示支付公司自您的支付账户中划扣相应款项进行支付。如您的支付余额或保证金不足以支付相应款项的，您同意委托智采云使用自有资金代您支付上述款项（但智采云并无此义务），您应当返还该部分费用并赔偿因此造成智采云的全部损失。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">9.3.4</span
            ><span style="font-family: 宋体; font-size: 10.5pt"
              >您同意智采云指示支付公司自您的支付账户中划扣相应款项支付上述赔偿款项。如您支付账户中的款项不足以支付上述赔偿款项的，智采云及</span
            ><span style="font-family: Calibri; font-size: 10.5pt">/</span
            ><span style="font-family: 宋体; font-size: 10.5pt">或关联公司可直接抵减您在智采云及</span
            ><span style="font-family: Calibri; font-size: 10.5pt">/</span
            ><span style="font-family: 宋体; font-size: 10.5pt">或其关联公司其它协议项下的款项及</span
            ><span style="font-family: Calibri; font-size: 10.5pt">/</span><span style="font-family: 宋体; font-size: 10.5pt">或权益，并可继续追偿。</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">9.3.5 </span
            ><span style="font-family: 宋体; font-size: 10.5pt"
              >智采云因故意或重大过失违约导致您利益受损的，智采云将以您的直接实际损失为计算依据向您履行赔偿责任。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">9.4</span><span style="font-family: 宋体; font-size: 10.5pt">特别约定</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">9.4.1</span><span style="font-family: 宋体; font-size: 10.5pt">如您向智采云及</span
            ><span style="font-family: Calibri; font-size: 10.5pt">/</span
            ><span style="font-family: 宋体; font-size: 10.5pt"
              >或其关联公司的雇员或顾问等提供实物、现金、现金等价物、劳务、旅游等价值明显超出正常商务洽谈范畴的利益，则可视为您存在商业贿赂行为。发生上述情形的，智采云可按照智采云规则进行相应处理，并经提前通知后终止与您的所有合作并向您收取违约金及</span
            ><span style="font-family: Calibri; font-size: 10.5pt">/</span
            ><span style="font-family: 宋体; font-size: 10.5pt">或赔偿金，该等金额以智采云因您的贿赂行为而遭受的经济损失和商誉损失作为计算依据。</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">9.4.2</span
            ><span style="font-family: 宋体; font-size: 10.5pt"
              >如您因严重违约导致智采云终止本协议时，出于维护平台秩序及保护其他用户合法权益的目的，智采云及</span
            ><span style="font-family: Calibri; font-size: 10.5pt">/</span
            ><span style="font-family: 宋体; font-size: 10.5pt"
              >或其关联公司可对与您在其他协议项下的合作采取中止甚或终止协议的措施，并以本协议约定的有效方式通知您。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">9.4.3</span
            ><span style="font-family: 宋体; font-size: 10.5pt">如智采云与您签署的其他协议及智采云及</span
            ><span style="font-family: Calibri; font-size: 10.5pt">/</span
            ><span style="font-family: 宋体; font-size: 10.5pt"
              >或其关联公司、支付公司与您签署的协议中明确约定了对您在本协议项下合作进行关联处理的情形，则智采云出于维护平台秩序及保护其他用户合法权益的目的，可在收到指令时中止甚至终止协议，并以本协议约定的有效方式通知您。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">十、协议的变更</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">10.1</span
            ><span style="font-family: 宋体; font-size: 10.5pt"
              >智采云可根据国家法律法规变化及维护市场秩序、保护用户合法权益需要，不时修改本协议、补充协议，变更后的协议、补充协议（下称“变更事项”）将通过法定程序并以本协议约定的有效通知方式通知您。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">10.2</span
            ><span style="font-family: 宋体; font-size: 10.5pt"
              >如您不同意变更事项，您有权于变更事项确定的生效日前联系智采云反馈意见。如反馈意见得以采纳，智采云将酌情调整变更事项。如您对已生效的变更事项仍不同意的，您应当于变更事项确定的生效之日起停止使用智采云服务，变更事项对您不产生效力；如您在变更事项生效后仍继续使用智采云服务，则视为您同意已生效的变更事项。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">十一、有效通知</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">11.1</span><span style="font-family: 宋体; font-size: 10.5pt">有效联系方式</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt"
              >您在注册成为智采云用户，并接受智采云服务时，您应该向智采云提供真实有效的联系方式（包括您的电子邮件地址、联系电话、联系地址等），对于联系方式发生变更的，您有义务及时更新有关信息，并保持可被有效联系的状态。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt"
              >您在注册智采云用户时生成的用于登陆智采云接收站内信、系统消息等即时信息的会员账户（包括子账户），也作为您的有效联系方式。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt"
              >智采云将向您的上述联系方式的其中之一或其中若干向您送达各类通知，而此类通知的内容可能对您的权利义务产生重大的有利或不利影响，请您务必及时关注。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">您有权通过您注册时填写的手机号码或者电子邮箱获取您感兴趣的产品</span
            ><span style="font-family: Calibri; font-size: 10.5pt">/</span
            ><span style="font-family: 宋体; font-size: 10.5pt"
              >服务广告信息、促销优惠等商业性信息；您如果不愿意接收此类信息，您有权通过智采云提供的相应的退订功能进行退订。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">11.2</span><span style="font-family: 宋体; font-size: 10.5pt">通知的送达</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">11.2.1</span
            ><span style="font-family: 宋体; font-size: 10.5pt"
              >智采云通过上述联系方式向您发出通知，其中以电子的方式发出的书面通知，包括但不限于在智采云公告，向您提供的联系电话发送手机短信，向您提供的电子邮件地址发送电子邮件，向您的账户发送系统消息以及站内信信息，在发送成功后即视为送达；以纸质载体发出的书面通知，按照提供联系地址交邮后的第五个自然日即视为送达。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">11.2.2</span
            ><span style="font-family: 宋体; font-size: 10.5pt"
              >对于在智采云上因交易活动引起的任何纠纷，您同意司法机关（包括但不限于人民法院）可以通过手机短信、电子邮件等现代通讯方式或邮寄方式向您送达法律文书（包括但不限于诉讼文书）。您指定接收法律文书的手机号码、电子邮箱等联系方式为您在智采云注册、更新时提供的手机号码、电子邮箱联系方式，司法机关向上述联系方式发出法律文书即视为送达。您指定的邮寄地址为您的法定联系地址或您提供的有效联系地址。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt"
              >您同意司法机关可采取以上一种或多种送达方式向您达法律文书，司法机关采取多种方式向您送达法律文书，送达时间以上述送达方式中最先送达的为准。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt"
              >您同意上述送达方式适用于各个司法程序阶段。如进入诉讼程序的，包括但不限于一审、二审、再审、执行以及督促程序等。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt"
              >你应当保证所提供的联系方式是准确、有效的，并进行实时更新。如果因提供的联系方式不确切，或不及时告知变更后的联系方式，使法律文书无法送达或未及时送达，由您自行承担由此可能产生的法律后果。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">十二、协议终止</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">12.1</span><span style="font-family: 宋体; font-size: 10.5pt">协议终止的情形</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">12.1.1</span
            ><span style="font-family: 宋体; font-size: 10.5pt">您有权通过以下任一方式终止本协议：</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">（一）在满足智采云要求的账户注销条件时您通过网站自助服务注销您的账户的；</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">（二）变更事项生效前您停止使用智采云服务并明示不愿接受变更事项的；</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">（三）您明示不愿继续使用智采云服务，且符合智采云要求的终止条件的。</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">12.1.2</span
            ><span style="font-family: 宋体; font-size: 10.5pt">出现以下情况时，智采云可以本协议约定的有效方式通知您终止本协议：</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">（一）您的实名认证身份无效、不再合法存续或无法有效核实；</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">（二）您违反本协议约定，智采云依据违约条款终止本协议的；</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt"
              >（三）您盗用他人账户、发布违禁信息、欺诈、售假、扰乱市场秩序、采取不正当手段牟利等行为，智采云依据智采云规则对您的账户予以关闭的；</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt"
              >（四）除上述情形外，因您多次违反智采云规则相关规定且情节严重，智采云依据智采云规则对您的账户予以关闭的；</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">（五）您的账户被智采云依据本协议回收的；</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">（六）您在智采云平台有欺诈、发布或销售假冒伪劣</span
            ><span style="font-family: Calibri; font-size: 10.5pt">/</span
            ><span style="font-family: 宋体; font-size: 10.5pt">侵权产品、侵犯他人合法权益或其他严重违法违约行为的；</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt"
              >（七）智采云基于合理理由相信您的行为可能会使您、智采云及智采云用户等相关方发生严重损害或产生法律责任；</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">（八）其它应当终止服务的情况。</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">12.2</span><span style="font-family: 宋体; font-size: 10.5pt">协议终止后的处理</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">12.2.1</span
            ><span style="font-family: 宋体; font-size: 10.5pt"
              >本协议终止后，除法律有明确规定外，智采云无义务向您或您指定的第三方披露您账户中的任何信息。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">12.2.2</span
            ><span style="font-family: 宋体; font-size: 10.5pt">本协议终止后，智采云仍享有下列权利：</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">（一）继续保存您留存于智采云的本协议第八条所列的各类信息；</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">（二）对于您过往的违约行为，智采云仍可依据本协议向您追究违约责任。</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">12.2.3</span
            ><span style="font-family: 宋体; font-size: 10.5pt"
              >本协议终止后，对于您在本协议存续期间产生的交易订单，智采云可通知交易相对方并根据交易相对方的意愿决定是否关闭该等交易订单；如交易相对方要求继续履行的，则您应当就该等交易订单继续履行本协议及交易订单的约定，并承担因此产生的任何损失或增加的任何费用。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">十三、链接</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt"
              >智采云或第三者均可提供与其他万维网网站或资源的链接。由于智采云并不控制该等网站和资源，您理解并同意，智采云并不对该等外在网站或资源的可用性负责，且不认可该等网站或资源上或可从该等网站或资源获取的任何内容、宣传、产品、服务或其他材料，也不对其等负责或承担任何责任。您进一步理解和同意，对于任何因使用或信赖从此类网站或资源上获取的此类内容、宣传、产品、服务或其他材料而造成（或声称造成）的任何直接或间接损失，除非法律明确规定应由智采云承担责任情形外，智采云均不承担责任。
            </span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">十四、法律适用、管辖及其他</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">14.1</span
            ><span style="font-family: 宋体; font-size: 10.5pt"
              >本协议之效力、解释、变更、执行与争议解决均适用中华人民共和国大陆地区法律；如无相关法律规定的，则应参照商业惯例和（或）行业惯例。
            </span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">14.2</span
            ><span style="font-family: 宋体; font-size: 10.5pt"
              >您与智采云仅为独立订约人关系。本协议无意结成或创设任何代理、合伙、合营、雇佣与被雇佣或特性授权与被授权关系。
            </span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">14.3</span
            ><span style="font-family: 宋体; font-size: 10.5pt"
              >除双方另有约定外，您同意智采云因经营业务需要有权将本协议项下的权利义务就部分或全部进行转让，并采取合理途径提前通过法定程序以本协议约定的有效方式通知您。
            </span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">14.4</span
            ><span style="font-family: 宋体; font-size: 10.5pt"
              >因本协议或智采云服务所引起或与其有关的任何争议，由智采云与您协商解决。协商不成时，任何一方均可向被告住所地人民法院提起诉讼。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">14.5</span
            ><span style="font-family: 宋体; font-size: 10.5pt"
              >倘若本协议任何条款被裁定为无效或不可强制执行，该项条款应被撤销，而其余条款应予遵守和执行。条款标题仅为方便参阅而设，并不以任何方式界定、限制、解释或描述该条款的范围或限度。智采云未就您或其他人士的某项违约行为采取行动，并不表明智采云撤回就任何继后或类似的违约事件采取行动的权利。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">智采云隐私政策</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">更新日期：</span><span style="font-family: Calibri; font-size: 10.5pt">2022</span
            ><span style="font-family: 宋体; font-size: 10.5pt">年</span><span style="font-family: Calibri; font-size: 10.5pt">5</span
            ><span style="font-family: 宋体; font-size: 10.5pt">月</span><span style="font-family: Calibri; font-size: 10.5pt">6</span
            ><span style="font-family: 宋体; font-size: 10.5pt">日</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">【引言】</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt"
              >欢迎您使用我们的产品和服务！我们深知个人信息对您的重要性，您的信赖对我们非常重要，我们将严格遵守法律法规要求采取相应的安全保护措施，致力于保护您的个人信息安全可控。基于此，智采云服务提供者（或简称“我们”）制定本《智采云隐私政策》（下称“本政策”</span
            ><span style="font-family: Calibri; font-size: 10.5pt">/</span
            ><span style="font-family: 宋体; font-size: 10.5pt"
              >“本隐私政策”），帮助您充分了解在您使用我们产品和服务的过程中，我们会如何收集、使用、共享、存储和保护您的个人信息以及您可以如何管理您的个人信息，以便您更好地作出适当的选择。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">在您开始使用我们的产品和服务前，请您务必先仔细阅读和理解本政策，特别应重点阅读我们以粗体</span
            ><span style="font-family: Calibri; font-size: 10.5pt">/</span
            ><span style="font-family: 宋体; font-size: 10.5pt"
              >粗体下划线标识的条款，确保您充分理解和同意之后再开始使用。本政策中涉及的专业词汇，我们尽量以简明通俗的表述向您解释，以便于您理解。如对本政策内容有任何疑问、意见或建议，您可通过本政策文末的联系方式与我们联系。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt"
              >您同意隐私政策表示您已了解应用提供的功能，以及功能运行所需的必要个人信息，并给予相应的收集使用授权，但并不代表您已单独同意开启附加功能、处理非必要个人信息，相关附加功能的开启、处理非必要个人信息以及处理敏感个人信息，我们会根据您的实际使用情况单独征求您的同意。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">本隐私政策将帮助您了解以下内容：</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">一、适用范围</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">二、信息收集及使用</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">三、对外提供信息</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">四、您的权利</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">五、信息的存储</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">六、政策的更新</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">七、未成年人保护</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">八、联系我们</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">附录：相关定义</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">一、适用范围</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt"
              >本政策适用于智采云服务提供者以网站、客户端、小程序以及随技术发展出现的新形态向您提供的各项产品和服务。我们及关联公司就其向您提供的产品或服务单独设有隐私政策的，则相应产品或服务适用相应隐私政策。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt"
              >除本政策说明的相关信息收集使用活动外，本政策不适用于智采云卖家及其他第三方向您提供的其他服务，其他服务适用其向您另行说明的个人信息收集使用规则。例如，当您加入卖家或品牌的会员时，则此类卖家或品牌对会员信息的使用适用其专门向您说明的规则。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">二、信息收集及使用</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">在您使用我们的产品</span><span style="font-family: Calibri; font-size: 10.5pt">/</span
            ><span style="font-family: 宋体; font-size: 10.5pt">服务时，我们需要</span><span style="font-family: Calibri; font-size: 10.5pt">/</span
            ><span style="font-family: 宋体; font-size: 10.5pt">可能需要收集和使用的您的个人信息包括如下两种：</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">1</span
            ><span style="font-family: 宋体; font-size: 10.5pt">、&nbsp; 为实现向您提供我们产品及</span
            ><span style="font-family: Calibri; font-size: 10.5pt">/</span
            ><span style="font-family: 宋体; font-size: 10.5pt"
              >或服务的基本功能，您须授权我们收集、使用的必要的信息。如您拒绝提供相应信息，您将无法正常使用我们的产品及</span
            ><span style="font-family: Calibri; font-size: 10.5pt">/</span><span style="font-family: 宋体; font-size: 10.5pt">或服务；</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">2</span
            ><span style="font-family: 宋体; font-size: 10.5pt">、&nbsp; 为实现向您提供我们产品及</span
            ><span style="font-family: Calibri; font-size: 10.5pt">/</span
            ><span style="font-family: 宋体; font-size: 10.5pt"
              >或服务的附加功能，您可选择单独同意或不同意我们收集、使用的信息。如您拒绝提供，您将无法正常使用相关附加功能或无法达到我们拟达到的功能效果，不会影响您使用我们的基本功能。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt"
              >我们在此特别提醒您：我们致力于打造多样的产品和服务以满足您的需求。因我们向您提供的产品和服务种类众多，且不同用户选择使用的具体产品</span
            ><span style="font-family: Calibri; font-size: 10.5pt">/</span><span style="font-family: 宋体; font-size: 10.5pt">服务范围存在差异，故基本</span
            ><span style="font-family: Calibri; font-size: 10.5pt">/</span
            ><span style="font-family: 宋体; font-size: 10.5pt">附加功能及对应收集使用的个人信息类型、范围会有所区别，请以具体的产品</span
            ><span style="font-family: Calibri; font-size: 10.5pt">/</span><span style="font-family: 宋体; font-size: 10.5pt">服务功能为准。</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">我们会为您提供的各项具体功能场景包括：</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">（一）帮助您成为我们的会员及账户管理</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">1</span><span style="font-family: 宋体; font-size: 10.5pt">、基础会员服务</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt"
              >我们基于智采云账户为您提供服务。为了创建智采云账户您需要至少向我们提供您的手机号码和密码。如果您拒绝提供上述信息，您将无法注册智采云账户，仅可以使用浏览、搜索服务。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt"
              >我们会根据您的智采云账户使用情况及平台设置的账户等级计算规则确定您当前的等级，并为您提供相应账户等级所对应的基本权益。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">2</span><span style="font-family: 宋体; font-size: 10.5pt">、附加会员服务</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt"
              >特别会员权益：如果您提供以下额外资料补全信息，将有助于我们给您提供更个性化的产品或服务：您的真实姓名、固定电话、联系方式、职位、主营行业、昵称和头像，我们还可以为您提供特别会员服务。其中，您设置的昵称和头像，将公开显示。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt"
              >实人认证：您可以根据认证要求提交相应的身份证件信息（身份证、护照及其他身份证件信息）、面部信息以完成实人认证。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt"
              >授权登录：我们可能会根据您的单独同意从第三方处获取您的第三方账户信息，并与您的智采云账户进行绑定，使您可在第三方处直接登录、使用我们的产品及</span
            ><span style="font-family: Calibri; font-size: 10.5pt">/</span
            ><span style="font-family: 宋体; font-size: 10.5pt">或服务。我们将在您单独同意的授权范围内使用您的相关信息。</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt"
              >其他会员角色服务：如果您申请注册成为卖家、服务商或其他存在额外身份认证要求的会员角色，您需主动向我们提供身份信息及</span
            ><span style="font-family: Calibri; font-size: 10.5pt">/</span
            ><span style="font-family: 宋体; font-size: 10.5pt"
              >或企业相关信息，或授权我们自支付公司处获取您对应支付账户的上述相关认证信息，用于您身份及其他会员角色获取资格的核验、登记、公示及其他我们明确告知的目的。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt"
              >如果您已拥有智采云账户，我们可能会在智采云服务中显示您的上述个人信息，以及您在智采云上或与智采云账户相关联的产品和服务中执行的操作（您可通过智采云账户在我们网站或者客户端提供的链接入口或其他产品</span
            ><span style="font-family: Calibri; font-size: 10.5pt">/</span><span style="font-family: 宋体; font-size: 10.5pt">服务入口使用我们及</span
            ><span style="font-family: Calibri; font-size: 10.5pt">/</span
            ><span style="font-family: 宋体; font-size: 10.5pt"
              >或关联公司提供的产品或服务），包括通过智采云账户展示您的个人资料、优惠权益、交易订单。我们会尊重您对智采云服务和智采云账户设置所做的选择。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">3</span><span style="font-family: 宋体; font-size: 10.5pt">、身份验证</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt"
              >为满足相关法律规定及监管要求、确保用户身份真实性、实现反欺诈等风险控制、保障系统和服务安全，在您使用特定服务</span
            ><span style="font-family: Calibri; font-size: 10.5pt">/</span
            ><span style="font-family: 宋体; font-size: 10.5pt">功能时，我们需要收集您的相关信息进行身份验证，如：</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">&nbsp;&nbsp;&nbsp;&nbsp; 实名</span><span style="font-family: Calibri; font-size: 10.5pt">/</span
            ><span style="font-family: 宋体; font-size: 10.5pt"
              >实人认证：基于实现特殊类型商品或服务交易、申请存在额外身份认证要求的会员角色（如卖家、内容创作者）以及其他依法需要核验用户真实身份的场景（包括依法保护未成年人权益、打击电信网络诈骗、代扣代缴个人所得税、行政执法或司法诉讼中相关主体认定、找回账号密码）的必要，您需要进行实名或实人认证。为实现认证目的，您需要主动提供相关真实身份信息（姓名、证件号码等证件信息或面部识别信息，根据实际情况可能有所不同，以页面提示为准）并授权我们通过国家权威可信身份认证机构进行信息核验，或授权我们自支付公司处获取您绑定支付账户（含您淘宝账户绑定的支付账户）的必要认证信息，我们将依法记录、保存认证信息及认证结果，这些信息仅供完成认证目的，或其他法律法规所规定的用途，未经您明示授权不会用作其他目的。此外，当您参与平台上的促销、互动活动时，我们需要向支付公司查询您绑定的支付账户的实名认证状态，用于核验您的基础参与条件，保障您的活动体验。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">（二）向您展示商品或服务信息</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt"
              >为向您展示商品或服务信息，包括您的访问足迹、历史搜索等情况，我们会收集和使用您在访问或使用智采云网站或客户端时的浏览、搜索记录。我们会结合依法收集的设备信息、服务日志信息，以及其他取得您授权的信息，通过算法模型预测您的偏好特征，匹配您可能感兴趣的商品、服务或其他信息，对向您展示的商品、服务或其他信息进行排序。为满足您的多元需求，我们会在排序过程中引入多样化推荐技术，拓展推荐的内容，避免同类型内容过度集中。我们也会基于您的偏好特征在智采云及其他第三方应用程序向您推送您可能感兴趣的商业广告及其他信息，或者向您发送商业性短信息。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">同时，我们通过以下措施努力保障您的隐私体验：</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">1</span
            ><span style="font-family: 宋体; font-size: 10.5pt">、&nbsp; 如您要删除您的浏览和搜索记录，您可以登录账号通过“我的足迹”选择删除；</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">2</span
            ><span style="font-family: 宋体; font-size: 10.5pt"
              >、&nbsp; 如您不想接受我们给您发送的商业广告，您可通过短信提示回复退订或我们提供的其他方式进行退订或关闭；</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">3</span
            ><span style="font-family: 宋体; font-size: 10.5pt"
              >、&nbsp; 如您在使用我们提供的站内搜索服务时，需要查看不针对您个人特征的排序，您可以在搜索结果页面点击”筛选”，选择其中的
              “通用排序”进行设置；</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">4</span
            ><span style="font-family: 宋体; font-size: 10.5pt"
              >、&nbsp;
              如您不想看到我们在首页或或进入进货单、收藏夹给您推荐的商品或服务，您可以通过长按被推荐的商品或服务图片，在随后出现的弹窗中根据提示选择屏蔽类似商品或者商品或服务所属的类目；</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">5</span
            ><span style="font-family: 宋体; font-size: 10.5pt"
              >、&nbsp; 如您想管理我们给您发送的个性化广告，您可以在“我的—设置—隐私—广告管理—是否停用个性化广告展示”中进行设置。（点击管理个性化广告）</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">6</span
            ><span style="font-family: 宋体; font-size: 10.5pt">、&nbsp; 如您想管理我们给您推送的个性化内容，您可以在“我的</span
            ><span style="font-family: Calibri; font-size: 10.5pt">-</span><span style="font-family: 宋体; font-size: 10.5pt">设置</span
            ><span style="font-family: Calibri; font-size: 10.5pt">-</span><span style="font-family: 宋体; font-size: 10.5pt">隐私</span
            ><span style="font-family: Calibri; font-size: 10.5pt">-</span><span style="font-family: 宋体; font-size: 10.5pt">推荐管理</span
            ><span style="font-family: Calibri; font-size: 10.5pt">-</span
            ><span style="font-family: 宋体; font-size: 10.5pt">个性化内容推荐设置”中进行设置。（点击管理个性化推荐）</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">（三）为您提供收藏、加购、关注与分享功能</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">在您浏览我们网站或客户端的过程中，您可以选择对感兴趣的商品及</span
            ><span style="font-family: Calibri; font-size: 10.5pt">/</span
            ><span style="font-family: 宋体; font-size: 10.5pt">或服务进行收藏、添加至购物车、与您感兴趣的商家</span
            ><span style="font-family: Calibri; font-size: 10.5pt">/</span
            ><span style="font-family: 宋体; font-size: 10.5pt">品牌建立关注关系、通过我们提供的功能组件向第三方分享商品</span
            ><span style="font-family: Calibri; font-size: 10.5pt">/</span
            ><span style="font-family: 宋体; font-size: 10.5pt"
              >服务信息。在您使用上述功能的过程中，我们会收集包括您的收藏及添加购物车的记录、关注关系、分享历史在内的服务日志信息用于实现上述功能及其他我们明确告知的目的。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">您可以在收藏夹、购物车查看或管理您的收藏和加购信息。</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">（四）帮助您完成下单及订单管理</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">当您在我们的产品及</span><span style="font-family: Calibri; font-size: 10.5pt">/</span
            ><span style="font-family: 宋体; font-size: 10.5pt">或服务中订购具体商品及</span><span style="font-family: Calibri; font-size: 10.5pt">/</span
            ><span style="font-family: 宋体; font-size: 10.5pt">或服务时，我们会通过系统为您生成购买该商品及</span
            ><span style="font-family: Calibri; font-size: 10.5pt">/</span><span style="font-family: 宋体; font-size: 10.5pt">或服务的订单。在下单过程中</span
            ><span style="font-family: Calibri; font-size: 10.5pt">,</span
            ><span style="font-family: 宋体; font-size: 10.5pt"
              >您需至少提供您的收货人姓名、收货地址、收货人联系电话，对于部分特殊类型的商品和服务您还需要提供该商品或服务所必需的其他信息，例如涉及跨境交易时您需要提供您的身份证件信息以完成清关。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">同时该订单中会载明您所购买的商品及</span
            ><span style="font-family: Calibri; font-size: 10.5pt">/</span
            ><span style="font-family: 宋体; font-size: 10.5pt"
              >或服务信息、具体订单号、订单创建时间、您应支付的金额、您的备注信息。我们收集这些信息是为了帮助您顺利完成交易、保障您的交易安全、便于您查询订单信息、提供客服与售后服务及其他我们明确告知的目的。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">您可以通过智采云为其他人订购商品及</span
            ><span style="font-family: Calibri; font-size: 10.5pt">/</span
            ><span style="font-family: 宋体; font-size: 10.5pt">或服务，您需要提供该实际收货人的前述个人信息，并确保已取得该实际收货人的同意。</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt"
              >为便于您了解、查询订单信息并对订单信息进行管理，我们会收集您在使用我们服务过程中产生的订单信息用于向您展示及便于您对订单进行管理。
            </span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">您可额外填写</span><span style="font-family: Calibri; font-size: 10.5pt">/</span
            ><span style="font-family: 宋体; font-size: 10.5pt">选择包括其他联系电话、收货时间在内的更多附加信息以确保商品或服务的准确送达。</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">您可以通过“我的订单”查看和管理您的订单信息。</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">（五）帮助您完成支付</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt"
              >为完成订单支付，您需要绑定支付账户、网上银行或其他第三方支付方式并选择付款方式。我们会将您的智采云账户会员名、对应的支付账户会员名、订单支付相关信息、订单安全相关设备信息及其他反洗钱法律要求的必要信息通过在网站或客户端中嵌入的支付软件工具开发包（软件工具开发包在本政策中简称“</span
            ><span style="font-family: Calibri; font-size: 10.5pt">SDK</span
            ><span style="font-family: 宋体; font-size: 10.5pt"
              >”）及其他安全方式与支付公司、网上银行或第三方支付平台共享。如您选择由其他金融机构为您提供支付服务，我们还会将您的包括银行卡号、有效期在内的银行卡支付必要信息与您选择的相应金融机构共享。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">您可以请求其他人为您付款，那么您需要提供代付人的支付账户等第三方支付账户及</span
            ><span style="font-family: Calibri; font-size: 10.5pt">/</span><span style="font-family: 宋体; font-size: 10.5pt">或手机号码。</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt"
              >为使我们及时获悉并确认您的支付进度及状态，为您提供售后与争议解决服务，您同意我们可自您所选择的交易对象、支付公司或您选择的其他金融机构处收集与支付进度相关信息。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">您可以查看您的智采云账户所绑定的支付账户信息或申请更换绑定的支付账户。</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">（六）帮助向您完成商品或服务的交付</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">为保证您购买的商品及</span><span style="font-family: Calibri; font-size: 10.5pt">/</span
            ><span style="font-family: 宋体; font-size: 10.5pt"
              >或服务能够顺利、安全、准确送达、提供，我们会向为智采云提供物流信息系统和技术服务的浙江菜鸟供应链管理有限公司披露订单相关的配送信息，并由其根据商品及</span
            ><span style="font-family: Calibri; font-size: 10.5pt">/</span
            ><span style="font-family: 宋体; font-size: 10.5pt"
              >或服务提供主体的选择向相应的物流配送主体同步相关配送信息。您知晓并同意相应物流配送主体不可避免地获知及使用您的配送信息，用于完成交付目的。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt"
              >为向您提供售后与争议解决服务之目的，我们需要及时获悉并确认交付进度及状态，您同意我们可自物流相关服务主体处收集与交付进度相关的信息。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">（七）客服及争议处理</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt"
              >当您与我们联系或提出售中、售后、争议纠纷处理申请时，为了保障您的账户及系统安全，我们需要您提供必要的个人信息以核验您的会员身份。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt"
              >为便于与您联系、尽快帮助您解决问题或记录相关问题的处理方案及结果，我们可能会保存您与我们的沟通、通信</span
            ><span style="font-family: Calibri; font-size: 10.5pt">/</span
            ><span style="font-family: 宋体; font-size: 10.5pt"
              >通话记录及相关内容（包括账户信息、订单信息、您为了证明相关事实提供的其他信息，或您留下的联系方式信息）。如果您针对具体订单进行咨询、投诉或提供建议的，我们会使用您的账户信息和订单信息。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt"
              >为了提供服务及改进服务质量的合理需要，我们还可能使用的您的其他信息，包括您与客服联系时您提供的相关信息，您参与问卷调查时向我们发送的问卷答复信息。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">（八）为您提供信息公开发布功能</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">您可通过我们为您提供的评论、问答、论坛、个人主页及其他信息发布功能，选择公开发布图文</span
            ><span style="font-family: Calibri; font-size: 10.5pt">/</span><span style="font-family: 宋体; font-size: 10.5pt">视频</span
            ><span style="font-family: Calibri; font-size: 10.5pt">/</span
            ><span style="font-family: 宋体; font-size: 10.5pt">直播内容，发表评价及问答内容，一键转卖商品到淘宝、淘特，以及作为卖家发布商品及</span
            ><span style="font-family: Calibri; font-size: 10.5pt">/</span
            ><span style="font-family: 宋体; font-size: 10.5pt">或服务相关信息、店铺相关信息。我们尊重并保护您对相关信息是否发布以及发布范围的设置。</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">我们可能会根据您的会员类型及网络日志信息，判断您是否可享受对应信息发布功能权限。</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt"
              >请注意，您公开发布的信息中可能会涉及您或他人的个人信息甚至敏感个人信息，如您在评价时选择上传包含个人信息的图片。请您更加谨慎地考虑，是否在使用我们的服务时共享甚至公开分享相关信息。若您公开发布的信息中涉及他人个人信息的，您需在发布前征得他人的同意。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">（九）为您提供安全保障</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt"
              >为履行保障电子商务交易安全的法定义务，提高您使用我们及我们关联公司、合作伙伴提供服务的安全性，保护您或其他用户或公众的人身财产安全免遭侵害，更好地预防钓鱼网站、欺诈、网络漏洞、计算机病毒、网络攻击、网络侵入风险，更准确地识别违反法律法规或智采云相关协议、规则的情况，我们在应用程序中嵌入我们关联公司开发的应用安全</span
            ><span style="font-family: Calibri; font-size: 10.5pt">SDK</span
            ><span style="font-family: 宋体; font-size: 10.5pt"
              >收集您的设备信息、服务日志信息，并可能使用或整合您的会员信息、交易信息、设备信息、服务日志信息以及我们关联公司、合作伙伴取得您授权或依据法律共享的信息（其中，我们可能会在应用后台运行期间收集</span
            ><span style="font-family: Calibri; font-size: 10.5pt">MAC</span><span style="font-family: 宋体; font-size: 10.5pt">地址、</span
            ><span style="font-family: Calibri; font-size: 10.5pt">IMEI</span
            ><span style="font-family: 宋体; font-size: 10.5pt"
              >及其他设备标识符进行风险校验），来综合判断您账户及交易风险、进行身份验证、检测及防范安全事件，并依法采取必要的记录、审计、分析、处置措施。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">（十）为您提供的其他附加服务</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">1</span><span style="font-family: 宋体; font-size: 10.5pt">、 基于系统权限的附加服务</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">为向您提供更便捷、更优质、个性化的产品及</span
            ><span style="font-family: Calibri; font-size: 10.5pt">/</span
            ><span style="font-family: 宋体; font-size: 10.5pt"
              >或服务，努力提升您的体验，我们在向您提供的以下附加服务中可能会通过开启系统权限以收集和使用您的个人信息。如果您不同意开启相关权限，不会影响您使用智采云的基本服务，但您可能无法获得这些附加服务给您带来的用户体验。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">您可自行决定这些权限随时的开启或关闭。</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt"
              >请您注意，您开启任一权限即代表您授权我们可以收集和使用相关个人信息来为您提供对应服务，您一旦关闭任一权限即代表您取消了授权，我们将不再基于对应权限继续收集和使用相关个人信息，也无法继续为您提供该权限所对应的服务。您关闭权限的决定不会影响此前基于您的授权所进行的信息收集及使用。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">您可点击此处查看应用权限申请与使用情况说明。</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">2</span><span style="font-family: 宋体; font-size: 10.5pt">、 </span
            ><span style="font-family: Calibri; font-size: 10.5pt">Cookie</span><span style="font-family: 宋体; font-size: 10.5pt">和同类技术的服务</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">Cookie</span
            ><span style="font-family: 宋体; font-size: 10.5pt"
              >和同类设备信息标识技术是互联网中普遍使用的技术。当您使用我们的服务时，我们可能会使用相关技术向您的设备发送一个或多个 </span
            ><span style="font-family: Calibri; font-size: 10.5pt">Cookie </span
            ><span style="font-family: 宋体; font-size: 10.5pt">或匿名标识符（以下简称“</span><span style="font-family: Calibri; font-size: 10.5pt">Cookie</span
            ><span style="font-family: 宋体; font-size: 10.5pt">”），以收集、标识和存储您访问、使用本产品时的信息。我们承诺，不会将 </span
            ><span style="font-family: Calibri; font-size: 10.5pt">Cookie </span
            ><span style="font-family: 宋体; font-size: 10.5pt">用于本隐私政策所述目的之外的任何其他用途。我们使用 </span
            ><span style="font-family: Calibri; font-size: 10.5pt">Cookie </span
            ><span style="font-family: 宋体; font-size: 10.5pt"
              >主要为了保障产品与服务的安全、高效运转，可以使我们确认您账户与交易的安全状态，排查崩溃、延迟的相关异常情况，帮助您省去重复您填写表单、输入搜索内容的步骤和流程。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">同时，我们可能会利用 </span><span style="font-family: Calibri; font-size: 10.5pt">Cookie </span
            ><span style="font-family: 宋体; font-size: 10.5pt"
              >向您展示您可能感兴趣的信息或功能，并优化您对广告的选择。大多数浏览器均为用户提供了清除浏览器缓存数据的功能，您可以进行相应的数据清除操作，或可修改对</span
            ><span style="font-family: Calibri; font-size: 10.5pt">Cookie</span><span style="font-family: 宋体; font-size: 10.5pt">的接受程度或拒绝我们的</span
            ><span style="font-family: Calibri; font-size: 10.5pt">Cookie</span
            ><span style="font-family: 宋体; font-size: 10.5pt">。您可能因为这些修改，无法使用依赖于</span
            ><span style="font-family: Calibri; font-size: 10.5pt">Cookie</span><span style="font-family: 宋体; font-size: 10.5pt">的服务或相应功能。</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">三、对外提供信息</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">（一）共享</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">我们不会与智采云服务提供者以外的公司、组织和个人共享您的个人信息，但以下情况除外：</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">1</span
            ><span style="font-family: 宋体; font-size: 10.5pt"
              >、&nbsp;
              履行法定义务所必需的共享：我们可能会根据法律法规规定、诉讼、争议解决的必要，或按行政、司法机关依法提出的要求，以及其他法定义务履行的必需，共享您的个人信息。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">2</span
            ><span style="font-family: 宋体; font-size: 10.5pt">、&nbsp; 取得您同意的情况下共享：获得您的明确同意后，我们会与其他方共享您的个人信息。</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">3</span
            ><span style="font-family: 宋体; font-size: 10.5pt"
              >、&nbsp;
              为订立、履行您作为一方当事人的合同所必需的情况下的共享：您通过智采云购买商品或服务，我们会根据您的选择，将您的订单信息中与交易有关的必要信息共享给相关商品或服务的提供者，以实现您的交易、配送及售后服务需求。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">4</span
            ><span style="font-family: 宋体; font-size: 10.5pt"
              >、&nbsp;
              与关联公司间共享：为便于我们与关联公司共同向您提供部分服务，基于智采云账户向您提供产品和服务，推荐您可能感兴趣的信息，识别会员账户异常，保护智采云关联公司或其他用户或公众的人身财产安全免遭侵害，您的个人信息可能会与我们的关联公司和</span
            ><span style="font-family: Calibri; font-size: 10.5pt">/</span
            ><span style="font-family: 宋体; font-size: 10.5pt"
              >或其指定的服务提供商共享。我们只会共享必要的个人信息，且受本政策中所声明目的的约束，如果我们共享您的敏感个人信息或关联公司改变个人信息的使用及处理目的，将再次征求您的授权同意。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">您可点击此处查看智采云数据共享情况说明。</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt"
              >请注意，您在使用我们服务时自愿共享甚至公开分享的信息，可能会涉及您或他人的个人信息甚至敏感个人信息。请您更加谨慎地考虑并做出决定。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">（二）委托处理</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt"
              >我们可能委托授权合作伙伴处理您的个人信息，以便授权合作伙伴代表我们为您提供某些服务或履行职能。我们仅会出于本政策声明的合法、正当、必要、特定、明确的目的委托其处理您的信息，授权合作伙伴只能接触到其履行职责所需信息，且我们将会通过协议要求其不得将此信息用于其他任何超出委托范围的目的。如果授权合作伙伴将您的信息用于我们未委托的用途，其将单独征得您的同意。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">目前，我们委托的授权合作伙伴包括以下类型：</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">1</span
            ><span style="font-family: 宋体; font-size: 10.5pt"
              >、&nbsp;&nbsp;
              广告、分析服务类的授权合作伙伴。我们会在采用行业通用的安全技术前提下，委托这些合作伙伴处理与广告投放、覆盖面和有效性相关的信息。我们不会将您的个人身份信息委托合作伙伴处理。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">2</span
            ><span style="font-family: 宋体; font-size: 10.5pt"
              >、&nbsp;&nbsp;
              供应商、服务提供商和其他合作伙伴。我们将信息委托给支持我们业务的供应商、服务提供商和其他合作伙伴处理，这些支持包括受我们委托提供的技术基础设施服务、分析我们服务的使用方式、提供客户服务、支付便利或进行学术研究和调查，以及在您选择“成为卖家”时，将您的姓名，联系方式、平台账户信息、您的注册时间和最近登录系统时间提供服务提供商以便其联系您来帮助您成为我们的商家会员。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt"
              >为保障我们客户端的稳定运行、功能实现，使您能够使用和享受更多的服务及功能，我们的应用中会嵌入授权合作伙伴的</span
            ><span style="font-family: Calibri; font-size: 10.5pt">SDK</span
            ><span style="font-family: 宋体; font-size: 10.5pt">或其他类似的应用程序。我们会对授权合作伙伴获取有关信息的应用程序接口（</span
            ><span style="font-family: Calibri; font-size: 10.5pt">API</span><span style="font-family: 宋体; font-size: 10.5pt">）、软件工具开发包（</span
            ><span style="font-family: Calibri; font-size: 10.5pt">SDK</span
            ><span style="font-family: 宋体; font-size: 10.5pt"
              >）进行严格的安全检测，并与授权合作伙伴约定严格的数据保护措施，令其按照本政策以及其他任何相关的保密和安全措施来处理个人信息。授权合作伙伴单独取得您同意的除外。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">您可点击此处查看我们接入的</span><span style="font-family: Calibri; font-size: 10.5pt">SDK</span
            ><span style="font-family: 宋体; font-size: 10.5pt">详情。</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">（三）转让</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt"
              >如果我们因合并、分立、解散、被宣告破产的原因需要转移个人信息的，我们会向您告知接收方的名称或者姓名和联系方式。接收方将继续履行本政策及其他法定义务。接收方变更原先的处理目的、处理方式的，会重新取得您的同意。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">（四）公开披露</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">我们仅会在以下情况下，公开披露您的个人信息：</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">1</span
            ><span style="font-family: 宋体; font-size: 10.5pt">、&nbsp;&nbsp; 基于您的主动选择及其他单独同意的情况下，我们可能会公开披露您的个人信息；</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">2</span
            ><span style="font-family: 宋体; font-size: 10.5pt"
              >、&nbsp;&nbsp;
              如果我们确定您出现违反法律法规或严重违反智采云相关协议及规则的情况，或为保护智采云用户或公众的人身财产安全免遭侵害，我们可能披露关于您的个人信息，包括相关违规行为以及智采云已对您采取的措施。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">四、您的权利</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">您可以通过以下方式查阅和管理您的信息，我们会在符合法律法规要求的情形下响应您的请求：</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">（一）查阅、更正和补充</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">您有权通过以下方式查阅、更正和补充您的信息：</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">登录智采云，进入“智采云”首页，进入“个人信息设置”。</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">（二）删除</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt"
              >您可以通过“（一）查阅、更正和补充您的信息”列明的路径删除您的部分信息，或申请注销账户删除您的全部信息。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">在以下情形中，您可以通过与客服联系向我们提出删除个人信息的请求：</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">1</span
            ><span style="font-family: 宋体; font-size: 10.5pt">、&nbsp; 如果我们处理个人信息的行为违反法律法规；</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">2</span
            ><span style="font-family: 宋体; font-size: 10.5pt">、&nbsp; 如果我们收集、使用您的个人信息，却未征得您的明确同意；</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">3</span
            ><span style="font-family: 宋体; font-size: 10.5pt">、&nbsp; 如果我们处理个人信息的行为严重违反了与您的约定；</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">4</span
            ><span style="font-family: 宋体; font-size: 10.5pt">、&nbsp; 如果我们的处理目的已实现、无法实现或者为实现处理目的不再必要；</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">5</span
            ><span style="font-family: 宋体; font-size: 10.5pt">、&nbsp; 如果我们停止提供产品或者服务，或者保存期限已届满。</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt"
              >若我们决定响应您的删除请求，我们还将同时尽可能通知从我们处获得您的个人信息的主体，并要求其及时删除（除非法律法规另有规定，或这些主体已独立获得您的授权）。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt"
              >当您或我们协助您删除相关信息后，因为适用的法律和安全技术限制，我们可能无法立即从备份系统中删除相应的信息，我们将安全地存储您的个人信息并限制对其的任何进一步的处理，直到备份可以清除或实现匿名化。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">（三）改变授权范围</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">您可以通过以下方式改变或者撤回您授权我们收集和处理您的个人信息的范围：</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">在“我的</span><span style="font-family: Calibri; font-size: 10.5pt">-</span
            ><span style="font-family: 宋体; font-size: 10.5pt">设置</span><span style="font-family: Calibri; font-size: 10.5pt">-</span
            ><span style="font-family: 宋体; font-size: 10.5pt">隐私</span><span style="font-family: Calibri; font-size: 10.5pt">-</span
            ><span style="font-family: 宋体; font-size: 10.5pt">系统权限”中管理</span><span style="font-family: Calibri; font-size: 10.5pt">App</span
            ><span style="font-family: 宋体; font-size: 10.5pt">使用的系统权限授权。</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt"
              >对于您无法直接通过上述方式设置的授权，您可以通过客服联系进行修改，但请注意，对于部分类型的个人信息，例如实现智采云基本功能所必须的信息或者我们履行法律法规规定的义务所必需的信息，我们可能无法响应您改变授权范围的请求。当您撤回授权后，我们将不再处理相应的个人信息。但您撤回授权的决定，不会影响我们此前基于您的授权而开展的个人信息处理。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">（四）注销账户</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">您可以通过以下方式申请注销您的账户：</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">1</span
            ><span style="font-family: 宋体; font-size: 10.5pt">、&nbsp; 在智采云网站“账号管理</span
            ><span style="font-family: Calibri; font-size: 10.5pt">-</span><span style="font-family: 宋体; font-size: 10.5pt">账号注销”或智采云客户端“设置</span
            ><span style="font-family: Calibri; font-size: 10.5pt">-</span><span style="font-family: 宋体; font-size: 10.5pt">账户与安全</span
            ><span style="font-family: Calibri; font-size: 10.5pt">-</span><span style="font-family: 宋体; font-size: 10.5pt">注销账户”提交账户注销申请；</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">2</span
            ><span style="font-family: 宋体; font-size: 10.5pt">、&nbsp; 通过客服联系，申请注销您的账户。</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt"
              >在您主动注销账户之后，我们将停止为您提供产品或服务，并根据适用法律的要求删除或匿名化处理您的个人信息。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">（五）约束信息系统自动决策</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt"
              >在某些业务功能中，我们可能仅依据算法在内的非人工自动决策机制做出决定。如果这些决定影响您的合法权益，您可以通过客服联系我们。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">（六）复制您的个人信息</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">您可以通过与客服联系向我们提出复制个人信息的请求，但法律法规另有规定除外。</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">（七）响应您的上述请求</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt"
              >对于您或可能的您的监护人、近亲属及其他有权主体向我们提出上述请求，以及中华人民共和国法律与其他适用法律规定的您的相关个人信息权利，您可以通过客服联系我们或直接向我们的个人信息保护专职部门发起投诉。我们将在</span
            ><span style="font-family: Calibri; font-size: 10.5pt">15</span><span style="font-family: 宋体; font-size: 10.5pt">天内做出答复。</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt"
              >为保障您的账户安全和您的个人信息安全，您向我们提出上述请求时，我们可能会先验证您的身份（如增加账户核验、要求您提供书面请求或其他合理方式），然后再处理您的请求。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt"
              >对于您合理的请求，我们原则上不收取费用，但对多次重复、超出合理限度的请求，我们将酌情收取一定费用。对于与您的身份不直接关联的信息、无合理理由重复申请的信息，或者需要过多技术手段（如需要开发新系统或从根本上改变现行惯例）、给他人合法权益带来风险或者不切实际的请求，我们可能会予以拒绝。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">五、信息的存储</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">（一）存储期限</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt"
              >我们只会在达成本政策所述目的所需的期限内保留您的个人信息，除非法律有强制的留存要求，例如《中华人民共和国电子商务法》要求商品和服务信息、交易信息保存时间自交易完成之日起不少于三年。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">我们判断个人信息的存储期限主要依据以下标准：</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">1</span
            ><span style="font-family: 宋体; font-size: 10.5pt">、&nbsp; 完成与您相关的交易目的、维护相应交易及业务记录，以应对您可能的查询或投诉；</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">2</span
            ><span style="font-family: 宋体; font-size: 10.5pt">、&nbsp; 保证我们为您提供服务的安全和质量；</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">3</span
            ><span style="font-family: 宋体; font-size: 10.5pt">、&nbsp; 您是否同意更长的留存期间；</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">4</span
            ><span style="font-family: 宋体; font-size: 10.5pt">、&nbsp; 保证我们在可能的诉讼案件中向法院进行举证；</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">5</span
            ><span style="font-family: 宋体; font-size: 10.5pt">、&nbsp; 是否存在关于保留期限的其他特别约定或法律法规规定。</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">在超出保留期间后，我们会根据适用法律的要求删除或匿名化处理您的个人信息。</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">（二）存储位置</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt"
              >我们在中华人民共和国境内运营中收集和产生的个人信息，将存储在中国境内。以下情形下，我们会在履行法律规定的义务后，向可能的境外实体提供您的个人信息：</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">1</span
            ><span style="font-family: 宋体; font-size: 10.5pt">、&nbsp; 适用的法律有明确规定；</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">2</span><span style="font-family: 宋体; font-size: 10.5pt">、&nbsp; 获得您的单独同意；</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">3</span
            ><span style="font-family: 宋体; font-size: 10.5pt">、&nbsp; 您作为一方当事人的跨境电子商务交易及其他类型合同订立和履行所必需的。</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">针对以上情形，我们会按照本政策依法保护您的个人信息安全。</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">（三）存储安全</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">1</span><span style="font-family: 宋体; font-size: 10.5pt">、 数据保护技术措施</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt"
              >我们已采取符合业界标准、合理可行的安全防护措施保护您的信息，防止个人信息遭到未经授权访问、公开披露、使用、修改、损坏或丢失。例如，我们会使用加密技术提高个人信息的安全性，在您的浏览器与服务器之间交换数据时受 </span
            ><span style="font-family: Calibri; font-size: 10.5pt">SSL</span><span style="font-family: 宋体; font-size: 10.5pt">协议加密保护，我们提供</span
            ><span style="font-family: Calibri; font-size: 10.5pt">HTTPS</span
            ><span style="font-family: 宋体; font-size: 10.5pt"
              >协议安全浏览方式；我们会使用受信赖的保护机制防止个人信息遭到恶意攻击；我们会部署访问控制机制，尽力确保只有授权人员才可访问个人信息。目前，我们的重要信息系统已经通过网络安全等级保护的三级以上测评。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">2</span><span style="font-family: 宋体; font-size: 10.5pt">、 数据保护管理组织措施</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt"
              >我们建立了行业内先进的以数据为核心、围绕数据生命周期进行的数据安全管理体系，从组织建设、制度设计、人员管理及产品技术的维度提升个人信息的安全性。我们已经设置了个人信息保护专职部门，。我们通过培训课程和考试，不断加强员工对于保护个人信息重要性的认识。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">3</span><span style="font-family: 宋体; font-size: 10.5pt">、 个人信息安全事件的响应</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt"
              >如果我们的物理、技术或管理防护设施遭到破坏，导致信息被非授权访问、公开披露、篡改或毁坏，导致您的合法权益受损的，我们会及时启动应急预案，采取合理必要的措施，以尽可能降低对您个人的影响。如发生个人信息安全事件，我们还将按照法律法规的要求向您告知安全事件的基本情况和可能的影响、我们已采取或将要采取的处置措施、您可自主防范和降低风险的建议、对您的补救措施。我们将以短信、电话、推送通知及其他合理渠道告知您，难以逐一告知的，我们会采取合理、有效的方式发布公告。同时，我们还将按照监管部门要求，上报个人信息安全事件的处置情况。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">4</span><span style="font-family: 宋体; font-size: 10.5pt">、 账户安全风险的防范</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt"
              >在使用智采云服务进行网上交易时，您不可避免地要向交易对方或潜在的交易对方披露自己的个人信息，如联络方式或联系地址。此外，您也可以通过我们的服务与第三方建立沟通、交流信息或分析内容。请您妥善保护自己的个人信息，仅在必要的情形下向他人提供，不轻信通过其他交易工具进行交易，以免信息被窃取甚至遭遇电信网络诈骗。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt"
              >如您担心自己的个人信息尤其是您的账户或密码发生泄露，请您立即联络【我们的客服】以便我们根据您的申请采取相应措施。您也可以在“我的</span
            ><span style="font-family: Calibri; font-size: 10.5pt">-</span><span style="font-family: 宋体; font-size: 10.5pt">设置</span
            ><span style="font-family: Calibri; font-size: 10.5pt">-</span
            ><span style="font-family: 宋体; font-size: 10.5pt">账户与安全”自主进行登陆密码修改。</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">六、政策的更新</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt"
              >为给您带来更好的产品和服务体验，我们持续努力改进我们的产品、服务及技术。在新的服务及业务流程变更时，我们可能会更新我们的隐私政策以告知您具体的变化。但未经您明确同意，我们不会限制您按照本政策所享有的权利。我们会在专门页面上发布对本政策所做的任何变更。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt"
              >对于重大变更，我们还会提供更为显著的通知（包括我们会通过智采云公示的方式进行通知或向您提供弹窗提示）。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">本政策所指的重大变更包括但不限于：</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">1</span
            ><span style="font-family: 宋体; font-size: 10.5pt"
              >、&nbsp; 产品的业务模式发生重大变化。如处理个人信息的目的、处理的个人信息类型、个人信息的使用方式；</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">2</span
            ><span style="font-family: 宋体; font-size: 10.5pt"
              >、&nbsp; 业务调整、交易并购引起的隐私政策的主体变更，新主体接收方变更原先的处理目的、处理方式；</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">3</span
            ><span style="font-family: 宋体; font-size: 10.5pt">、&nbsp; 个人信息共享或公开披露的主要对象发生变化；</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">4</span
            ><span style="font-family: 宋体; font-size: 10.5pt">、&nbsp; 用户个人信息权利及其行使方式发生重大变化；</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">5</span
            ><span style="font-family: 宋体; font-size: 10.5pt">、&nbsp; 处理个人信息保护负责人的联络方式及投诉渠道发生变化时；</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">6</span
            ><span style="font-family: 宋体; font-size: 10.5pt">、&nbsp; 个人信息保护影响评估报告表明产品存在对个人权益有重大影响时。</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">我们还会将本政策的旧版本在智采云专门页面存档，供您查阅。</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">七、未成年人保护</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt"
              >在电子商务活动中我们推定您具有相应的民事行为能力。如您为未成年人，我们要求您请您的父母或其他监护人仔细阅读本政策，并在征得您的父母或其他监护人同意的前提下使用我们的服务或向我们提供信息。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">八、联系我们</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">您可以通过以下方式与我们联系，我们将在</span
            ><span style="font-family: Calibri; font-size: 10.5pt">15</span><span style="font-family: 宋体; font-size: 10.5pt">天内回复您的请求：</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt"
              >如您对本政策内容有任何疑问、意见或建议，您可通过智采云客服及智采云服务中心在线客服与我们联系。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">附录：相关定义</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">智采云：指智采云网站及客户端。</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">智采云服务提供者：指智采云的互联网信息及软件技术服务提供者智采云（北京）科技有限公司。</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">支付公司：指提供支付服务的主体（中金支付有限公司）。</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">个人信息：以电子或者其他方式记录的与已识别或者可识别的自然人有关的各种信息</span
            ><span style="font-family: Calibri; font-size: 10.5pt">,</span><span style="font-family: 宋体; font-size: 10.5pt">不包括匿名化处理后的信息。</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt"
              >敏感个人信息：敏感个人信息是一旦泄露或者非法使用，容易导致自然人的人格尊严受到侵害或者人身、财产安全受到危害的个人信息，包括生物识别、宗教信仰、特定身份、医疗健康、金融账户、行踪轨迹信息，以及不满十四周岁未成年人的个人信息。</span
            >
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">儿童：指不满十四周岁的未成年人。</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">设备信息：包括设备标识符（</span><span style="font-family: Calibri; font-size: 10.5pt">IMEI</span
            ><span style="font-family: 宋体; font-size: 10.5pt">、</span><span style="font-family: Calibri; font-size: 10.5pt">IDFA</span
            ><span style="font-family: 宋体; font-size: 10.5pt">、</span><span style="font-family: Calibri; font-size: 10.5pt">Android ID</span
            ><span style="font-family: 宋体; font-size: 10.5pt">、</span><span style="font-family: Calibri; font-size: 10.5pt">MAC</span
            ><span style="font-family: 宋体; font-size: 10.5pt">、</span><span style="font-family: Calibri; font-size: 10.5pt">OAID</span
            ><span style="font-family: 宋体; font-size: 10.5pt">、</span><span style="font-family: Calibri; font-size: 10.5pt">IMSI</span
            ><span style="font-family: 宋体; font-size: 10.5pt"
              >及其他设备相关信息）、应用信息（应用崩溃信息、通知开关状态、应用安装列表及其他应用相关信息）、设备参数及系统信息（设备类型、设备型号、操作系统及硬件相关信息），设备网络环境信息（</span
            ><span style="font-family: Calibri; font-size: 10.5pt">IP</span><span style="font-family: 宋体; font-size: 10.5pt">地址，</span
            ><span style="font-family: Calibri; font-size: 10.5pt">WiFi</span
            ><span style="font-family: 宋体; font-size: 10.5pt">信息，基站信息及其他网络相关信息）。以产品实际采集情况为准。</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt"
              >服务日志信息：包括浏览记录、点击查看记录、搜索查询记录、收藏、添加至购物车、交易、售后、关注分享信息、发布信息，以及</span
            ><span style="font-family: Calibri; font-size: 10.5pt">IP</span
            ><span style="font-family: 宋体; font-size: 10.5pt">地址、浏览器类型、电信运营商、使用语言、访问日期和时间及您访问的网页记录。</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">去标识化：指个人信息经过处理，使其在不借助额外信息的情况下无法识别特定自然人的过程。</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: 宋体; font-size: 10.5pt">匿名化：指个人信息经过处理无法识别特定自然人且不能复原的过程。</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
          <p style="font-size: 10.5pt; line-height: 115%; margin: 0pt 0pt 10pt; orphans: 0; text-align: justify; widows: 0">
            <span style="font-family: Calibri; font-size: 10.5pt">&nbsp;</span>
          </p>
        </div>
      </template>
    </el-dialog-module>
  </div>
</template>
<script setup>
import { toRefs, reactive, onMounted, ref, nextTick } from 'vue'
const emits = defineEmits(['closeModel'])
const title = ref('修改密码')
const dialogButton = ref(['', '确定'])
const isShow = ref(false)

const onClose = () => {
  isShow.value = false
}
const init = () => {
  title.value = '智采云服务条款及隐私协议'
  isShow.value = true
}
defineExpose({
  init
})
</script>
<style lang="scss" scoped></style>
