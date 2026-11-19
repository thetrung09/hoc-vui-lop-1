// Tiếng Việt 1 – tập hai, phần LUYỆN TẬP TỔNG HỢP (8 chủ điểm) và Ôn tập cuối năm.
// Nhập từ ảnh trang sách (trang PDF = trang in + 1), tranh cắt theo tools/crops/tv2-lt*.json.
// Mỗi chủ điểm: 3 bài tập đọc (kèm câu hỏi, chính tả, tô chữ hoa) + 1 bài kể chuyện.
// Lời kể chuyện do app viết lại ngắn gọn theo tranh (sách chỉ có tranh và câu hỏi).
import { lesson, spellingQuiz as SQ } from './vietnamese.js';

const THEMES = ['Gia đình', 'Trường học', 'Thiên nhiên', 'Gia đình', 'Trường học', 'Thiên nhiên', 'Gia đình', 'Trường học'];

/** Bài luyện tập: chủ điểm `c`, bài thứ `k` trong chủ điểm. */
const LT = (c, k, t, p, spec) =>
  lesson('tv', {
    id: `tv-lt${c}-${k}`,
    num: `${c}.${k}`,
    n: 0,
    t,
    p,
    chapter: `Luyện tập tổng hợp – Chủ điểm ${c}: ${THEMES[c - 1]}`,
    short: t,
    title: `Chủ điểm ${THEMES[c - 1]}: ${spec.story ? 'Kể chuyện ' : ''}${t}`,
    sayTitle: `${spec.story ? 'Kể chuyện' : 'Bài đọc'}: ${t}`,
    readFirst: true,
    ...spec,
  });

/** Bài Ôn tập cuối năm thứ `k`. */
const OT = (k, t, p, spec) =>
  lesson('tv', {
    id: `tv-ckn${k}`,
    num: '★',
    n: 0,
    t,
    p,
    chapter: 'Ôn tập cuối năm',
    short: spec.short || t,
    title: `Ôn tập cuối năm: ${t}`,
    sayTitle: `Ôn tập cuối năm. ${t.replace(' – ', ', ')}`,
    readFirst: true,
    ...spec,
  });

/** Câu hỏi điền vần/âm: [câu có chỗ trống, đáp án đúng, đáp án sai...] → câu hỏi chọn chữ. */
const FILL = (name, items) => ({ name, q: items.map(([q, ...opts]) => [q, opts, 0]) });

export const TV3 = [
  // ───────────── Chủ điểm 1: Gia đình ─────────────
  LT(1, 1, 'Chuột con đáng yêu', 83, {
    read: {
      title: 'Chuột con đáng yêu', img: 'lt1-1-doc',
      text: 'Chú chuột nọ bé nhất lớp nên thường bị bạn trêu. Một hôm, chuột phụng phịu nói với mẹ: Ở trường, các bạn gọi con là Tí Teo. Con chả đi học nữa. Ngừng một lát, chú thở dài, nói thêm: Ước gì con to như bạn voi. Chuột mẹ dịu dàng: Họ nhà ta ai cũng bé nhỏ, con ạ. Nếu con to như voi thì làm sao mẹ bế được con? Chuột con nghe vậy, hiểu ra ngay. Nó dụi đầu vào lòng mẹ, nói: Vậy thì con thích là chuột con bé nhỏ của mẹ hơn.',
      q: [
        ['Vì sao chuột con thường bị bạn trêu?', ['Vì chú bé nhất lớp.', 'Vì chú chạy chậm nhất lớp.', 'Vì chú không chịu học bài.']],
        ['Chuột con ước gì?', ['Ước to như bạn voi.', 'Ước được nghỉ học.', 'Ước có nhiều bạn.']],
        ['Mẹ nói: Nếu con to như voi thì …', ['làm sao mẹ bế được con?', 'con sẽ rất khoẻ.', 'các bạn sẽ sợ con.']],
        ['Cuối cùng, chuột con thích điều gì?', ['Là chuột con bé nhỏ của mẹ.', 'To như bạn voi.', 'Ở nhà, không đi học nữa.']],
      ],
    },
    choose: [
      SQ([['ngừng', 'nghừng'], ['nghe', 'nge'], ['ngay', 'nghay']], 'Chữ nào phù hợp: ng hay ngh?'),
      FILL('Em chọn vần nào: uôn hay uôt, ương hay ước?', [
        ['Chuột con đến …', 'trường', 'trước'],
        ['Các bạn gọi … là Tí Teo.', 'chuột', 'chuộn'],
        ['Chuột ước … to như voi.', 'được', 'đượng'],
        ['Vì yêu mẹ, nó vẫn … làm chuột.', 'muốn', 'muốt'],
      ]),
    ],
    trace: ['Con mèo', 'cây cau'],
  }),
  LT(1, 2, 'Món quà quý nhất', 85, {
    read: {
      title: 'Món quà quý nhất', img: 'lt1-2-doc',
      text: 'Sinh nhật bà, bé Huệ mang tặng bà một món quà. Quà được đựng trong một chiếc hộp nhỏ. Bà mở hộp quà, ngạc nhiên: Bà không thấy gì ở bên trong, cháu à. Huệ đáp: Đây không phải là cái hộp rỗng đâu ạ. Cháu đã gửi rất nhiều nụ hôn vào đó, đến khi đầy ắp mới thôi. Bà cảm động, ôm cháu: Cháu ngoan quá! Quà của cháu là món quà quý nhất!',
      q: [
        ['Khi mở hộp quà, bà nói gì?', ['Bà không thấy gì ở bên trong, cháu à.', 'Quà đẹp quá, cháu ạ!', 'Bà cảm ơn cháu nhiều.']],
        ['Huệ trả lời thế nào?', ['Cháu đã gửi rất nhiều nụ hôn vào đó.', 'Cháu quên bỏ quà vào hộp.', 'Quà ở trong túi của cháu.']],
        ['Vì sao bà nói đó là món quà quý nhất?', ['Vì món quà đầy ắp tình cảm của cháu.', 'Vì chiếc hộp rất đắt tiền.', 'Vì trong hộp có vàng.']],
      ],
    },
    trace: ['A', 'Ă', 'Â', 'ngạc nhiên', 'dịu dàng'],
  }),
  LT(1, 3, 'Nắng', 86, {
    read: {
      title: 'Nắng', img: 'lt1-3-doc',
      poem: 'Nắng lên cao theo bố / Xây thẳng mạch tường vôi / Lại trải vàng sân phơi / Hong thóc khô cho mẹ. / Nắng chạy nhanh lắm nhé / Chẳng ai đuổi kịp đâu / Thoắt đã về vườn rau / Soi cho ông nhặt cỏ / Rồi xuyên qua cửa sổ / Nắng giúp bà xâu kim.',
      q: [
        ['Nắng giúp bố làm gì?', ['Xây nhà.', 'Nhặt cỏ.', 'Xâu kim.']],
        ['Nắng giúp mẹ làm gì?', ['Hong thóc khô.', 'Xâu kim.', 'Nhặt cỏ.']],
        ['Nắng giúp ông làm gì?', ['Soi cho ông nhặt cỏ.', 'Hong thóc khô.', 'Xây nhà.']],
        ['Nắng giúp bà làm gì?', ['Xâu kim.', 'Nhặt cỏ.', 'Hong thóc khô.']],
        ['Câu thơ nào cho thấy nắng rất nhanh nhẹn?', ['Chẳng ai đuổi kịp đâu', 'Hong thóc khô cho mẹ', 'Nắng giúp bà xâu kim']],
      ],
    },
    trace: ['B', 'trải vàng', 'đuổi kịp'],
  }),
  LT(1, 4, 'Cô bé quàng khăn đỏ', 89, {
    story: [
      ['lt1-4-t1', 'Vì sao cô bé được gọi là Khăn Đỏ? Khăn Đỏ được mẹ giao việc gì? Mẹ dặn em điều gì?', 'Cô bé hay quàng chiếc khăn đỏ nên mọi người gọi là Khăn Đỏ. Mẹ nhờ em mang bánh sang biếu bà, dặn em đi thẳng đường, không được la cà.'],
      ['lt1-4-t2', 'Khăn Đỏ thật thà kể cho sói biết điều gì? Sói nói gì để lừa Khăn Đỏ?', 'Trong rừng, Khăn Đỏ gặp sói. Em thật thà kể là đi thăm bà. Sói lừa em: Cháu hái hoa tặng bà đi, bà sẽ vui lắm.'],
      ['lt1-4-t3', 'Sói lên đến nhà bà và đã làm gì?', 'Sói chạy tắt đến nhà bà trước, nuốt chửng bà rồi nằm lên giường, giả làm bà.'],
      ['lt1-4-t4', 'Khăn Đỏ đến nhà bà và thấy gì? Cô bé nói gì?', 'Khăn Đỏ đến nơi, thấy bà lạ quá. Em hỏi: Sao tai bà to thế? Sao miệng bà to thế? Sói nhảy ra nuốt luôn cả Khăn Đỏ.'],
      ['lt1-4-t5', 'Bác thợ săn nghe thấy gì và đã làm gì?', 'Bác thợ săn đi qua, nghe tiếng ngáy to lạ thường. Bác vào nhà, thấy sói, liền cứu bà và Khăn Đỏ ra.'],
      ['lt1-4-t6', 'Qua câu chuyện, Khăn Đỏ đã hiểu ra điều gì?', 'Bà và Khăn Đỏ ôm nhau mừng rỡ. Khăn Đỏ hiểu ra: phải nghe lời mẹ, không được la cà, không nói chuyện với người lạ.'],
    ],
    q: [['Câu chuyện khuyên em điều gì?', ['Phải nghe lời mẹ, không la cà dọc đường.', 'Nên hái thật nhiều hoa.', 'Nên đi chơi trong rừng một mình.']]],
  }),

  // ───────────── Chủ điểm 2: Trường học ─────────────
  LT(2, 1, 'Thầy giáo', 92, {
    read: {
      title: 'Thầy giáo', img: 'lt2-1-doc',
      text: 'Ngay từ buổi học đầu tiên, chúng tôi đã rất thích thầy giáo của mình. Giờ chính tả, thầy vừa đọc vừa đi giữa các dãy bàn. Thấy một bạn mặt đỏ ửng, thầy ngừng đọc, sờ trán xem bạn có sốt không. Giữa lúc đó, một bạn ở sau lưng thầy đứng lên ghế, múa may. Thầy quay lại, bạn ấy vội ngồi xuống, cúi gằm mặt. Thầy nhẹ nhàng: Đừng làm thế nữa nhé! Chuông báo hết giờ. Chúng tôi ra về. Bạn lúc nãy bước lại gần thầy, rụt rè: Em xin lỗi thầy. Thầy giáo mỉm cười: Em biết lỗi là tốt rồi. Em về đi.',
      q: [
        ['Vì sao các bạn học sinh rất thích thầy giáo của mình?', ['Vì thầy rất quan tâm tới học sinh.', 'Vì thầy cho cả lớp đi chơi.', 'Vì thầy không giao bài tập.']],
        ['Khi học trò nghịch ngợm, thầy làm gì?', ['Thầy dịu dàng bảo ban.', 'Thầy mắng thật to.', 'Thầy không nói gì.']],
        ['Bạn nhỏ mắc lỗi nói gì với thầy?', ['Em xin lỗi thầy.', 'Em chào thầy ạ.', 'Em cảm ơn thầy.']],
      ],
    },
    choose: [SQ([['ghế', 'gế'], ['gằm', 'ghằm'], ['gần', 'ghần']], 'Em chọn chữ nào: g hay gh?')],
    sort: { name: 'Tiếng nào có vần ai? Tiếng nào có vần ay?', keys: ['ai', 'ay'], items: [[null, 'lại', 'ai'], [null, 'dãy', 'ay'], [null, 'may', 'ay'], [null, 'con nai', 'ai']] },
    trace: ['Cô giáo', 'mùa thu'],
  }),
  LT(2, 2, 'Kiến em đi học', 94, {
    read: {
      title: 'Kiến em đi học', img: 'lt2-2-doc',
      text: 'Kiến em muốn đi học. Bố mẹ mua cho nó nào cặp, nào vở, nào bảng, nào bút. Nhưng từ trường về nhà, kiến em có vẻ buồn lắm. Thấy vậy, kiến anh hỏi: Em không làm được bài à? Kiến anh vừa hỏi, kiến em đã oà lên, nức nở: Em không biết ạ. Thầy chê chữ em nhỏ quá. Thầy nằm sát đất, giương kính lên cũng không đọc được. Thế thầy giáo em là ai? Là thầy voi ạ.',
      q: [
        ['Vì sao từ trường trở về, kiến em rất buồn?', ['Vì thầy voi chê chữ kiến em nhỏ quá.', 'Vì kiến em bị mất cặp.', 'Vì kiến em bị bạn trêu.']],
        ['Thầy giáo của kiến em là ai?', ['Thầy voi.', 'Thầy kiến.', 'Thầy gấu.']],
        ['Nếu là kiến anh, em sẽ làm gì?', ['Xin mẹ cho kiến em sang lớp của thầy kiến.', 'Mắng kiến em vì học kém.', 'Bảo kiến em nghỉ học.']],
      ],
    },
    trace: ['C', 'buồn bã', 'nức nở'],
  }),
  LT(2, 3, 'Đi học', 95, {
    read: {
      title: 'Đi học', img: 'lt2-3-doc',
      poem: 'Hôm qua em tới trường / Mẹ dắt tay từng bước / Hôm nay mẹ lên nương / Một mình em tới lớp. / Trường của em be bé / Nằm lặng giữa rừng cây / Cô giáo em tre trẻ / Dạy em hát rất hay. / Hương rừng thơm đồi vắng / Nước suối trong thầm thì / Cọ xoè ô che nắng / Râm mát đường em đi.',
      q: [
        ['Hôm nay, bạn nhỏ tới lớp với ai?', ['Một mình.', 'Với mẹ.', 'Với bố.']],
        ['Trường của bạn nhỏ nằm ở đâu?', ['Giữa rừng cây.', 'Bên bờ biển.', 'Giữa thành phố.']],
        ['Cô giáo của bạn nhỏ thế nào?', ['Tre trẻ, dạy hát rất hay.', 'Già và nghiêm khắc.', 'Không biết hát.']],
        ['Cái gì xoè ô che nắng cho bạn nhỏ?', ['Cây cọ.', 'Cây chuối.', 'Đám mây.']],
      ],
    },
    trace: ['D', 'Đ', 'rừng cây', 'đồi vắng'],
  }),
  LT(2, 4, 'Ba món quà', 98, {
    story: [
      ['lt2-4-t1', 'Người cha gọi ba con trai lại và nói gì? Các con nghe lời cha, đã làm gì?', 'Người cha gọi ba con trai lại, bảo: Các con hãy đi xa một năm, rồi mang về cho cha mẹ một món quà quý nhất. Ba anh em nghe lời cha, mỗi người đi một ngả.'],
      ['lt2-4-t2', 'Năm sau trở về, người em út tặng cha mẹ quà gì? Người cha nói thế nào về món quà đó?', 'Năm sau, người em út trở về với một xe đầy hàng hoá. Người cha nói: Đây là của cải con làm ra, nhưng rồi sẽ có ngày tiêu hết.'],
      ['lt2-4-t3', 'Anh thứ hai tặng cha mẹ quà gì? Người cha nói thế nào về món quà của anh?', 'Anh thứ hai tặng cha mẹ một hộp vàng bạc, châu báu. Người cha nói: Vàng bạc quý thật, nhưng cũng không giữ được mãi.'],
      ['lt2-4-t4', 'Quà của người anh cả có gì lạ? Trước khi mở quà, anh làm gì?', 'Người anh cả mang về một cái bọc to, trông rất lạ. Trước khi mở quà, anh xin cha mẹ tha lỗi vì món quà không đắt tiền.'],
      ['lt2-4-t5', 'Món quà của anh cả là gì mà khiến mọi người sửng sốt? Người cha nói thế nào về món quà đó?', 'Mở ra, mọi người sửng sốt: trong bọc toàn là sách. Người cha vui mừng nói: Sách mang lại hiểu biết. Đây mới là món quà quý nhất.'],
    ],
    q: [['Vì sao người cha cho rằng sách là món quà quý nhất?', ['Vì sách mang lại hiểu biết.', 'Vì sách rất đắt tiền.', 'Vì sách rất nặng.']]],
  }),

  // ───────────── Chủ điểm 3: Thiên nhiên ─────────────
  LT(3, 1, 'Sơn ca, nai và ếch', 101, {
    read: {
      title: 'Sơn ca, nai và ếch', img: 'lt3-1-doc',
      text: 'Sơn ca, nai và ếch thân nhau. Ba bạn thường gặp nhau, kể cho nhau nghe những câu chuyện thú vị. Sơn ca kể về bầu trời. Ếch kể chuyện dưới nước. Nai kể chuyện rừng sâu. Một hôm, ba bạn quyết định đổi việc cho nhau. Sơn ca thử lao mình xuống nước, suýt nữa thì chết đuối. Nai leo lên mỏm đá tập bay. Nhưng nó vừa tung mình lên thì rơi huỵch xuống đất, đau điếng. Còn ếch thì thấy rừng rậm thật khủng khiếp. Gặp lại nhau, ba bạn đồng thanh nói: Chúng ta không chơi trò dại dột như vậy nữa!',
      q: [
        ['Sơn ca thử làm gì?', ['Lao mình xuống nước.', 'Leo lên mỏm đá.', 'Vào rừng rậm.']],
        ['Nai thử làm gì?', ['Leo lên mỏm đá tập bay.', 'Lặn xuống nước.', 'Hát trên cành cây.']],
        ['Ba bạn không đổi việc cho nhau nữa vì đã hiểu:', ['Mỗi loài có một cách sống; đổi việc là dại dột.', 'Muốn đổi việc thì phải luyện tập rất nhiều.']],
      ],
    },
    pick: [{
      name: 'Con người đã làm thế nào?',
      options: ['lt3-1-may-bay', 'lt3-1-lan', 'lt3-1-leu'],
      rounds: [
        ['bay lên bầu trời', 'lt3-1-may-bay', 'Con người làm thế nào để bay lên bầu trời?'],
        ['lặn dưới nước', 'lt3-1-lan', 'Con người làm thế nào để lặn dưới nước?'],
        ['sống trong rừng sâu', 'lt3-1-leu', 'Con người làm thế nào để sống trong rừng sâu?'],
      ],
    }],
    choose: [
      FILL('Em chọn vần nào: uyt hay uych?', [
        ['Sơn ca thử lao mình xuống nước, … chết đuối.', 'suýt', 'suých'],
        ['Nai leo lên mỏm đá tập bay thì rơi … xuống đất.', 'huỵch', 'huỵt'],
      ]),
      SQ([['kể', 'cể'], ['câu', 'kâu'], ['kính', 'cính'], ['con', 'kon']], 'Chữ nào phù hợp: c hay k?'),
    ],
  }),
  LT(3, 2, 'Chuyện trong vườn', 103, {
    read: {
      title: 'Chuyện trong vườn', img: 'lt3-2-doc',
      text: 'Sáng sớm, Mai ra vườn đã thấy bà đang tưới hoa. Em gọi: Bà ơi! Cháu dậy rồi à? Đi cẩn thận kẻo ngã nhé! Mai chạy về phía bà. Bỗng em vấp phải một mô đất, ngã sóng soài, làm gãy một cành hồng. Bà vội chạy lại đỡ cháu rồi hỏi: Cháu có đau không? Mai đau nhưng vẫn nói: Không sao ạ! Nhìn cành hoa gãy đang ứa nhựa, Mai nghĩ: Chắc hoa cũng đau lắm, nó đang khóc. Chỉ tại Mai chạy vội mà hoa bị đau.',
      q: [
        ['Thấy Mai ra vườn, bà nhắc Mai điều gì?', ['Đi cẩn thận kẻo ngã nhé!', 'Tưới hoa giúp bà nhé!', 'Vào ăn sáng đi cháu!']],
        ['Vì sao Mai nghĩ là hoa đang khóc?', ['Vì cành hoa gãy đang ứa nhựa.', 'Vì trời đang mưa.', 'Vì bà tưới nước lên hoa.']],
        ['Em chọn cho Mai một cái tên:', ['Cô bé nhân hậu.', 'Cô bé vụng về.', 'Cô bé hay khóc.']],
      ],
    },
    trace: ['E', 'Ê', 'kể chuyện', 'quen thuộc'],
  }),
  LT(3, 3, 'Kể cho bé nghe', 104, {
    read: {
      title: 'Kể cho bé nghe', img: 'lt3-3-vit',
      poem: 'Hay nói ầm ĩ / Là con vịt bầu. / Hay hỏi đâu đâu / Là con chó vện. / Hay chăng dây điện / Là con nhện con. / Ăn no quay tròn / Là cối xay lúa. / Mồm thở ra gió / Là cái quạt hòm. / Không thèm cỏ non / Là con trâu sắt. / Rồng phun nước bạc / Là chiếc máy bơm. / Dùng miệng nấu cơm / Là cua là cáy.',
    },
    pick: [
      {
        name: 'Hỏi đáp theo bài đọc',
        rounds: [
          ['Hay nói ầm ĩ', 'lt3-3-vit', 'Hay nói ầm ĩ là con gì?'],
          ['Hay hỏi đâu đâu', 'lt3-3-cho', 'Hay hỏi đâu đâu là con gì?'],
          ['Hay chăng dây điện', 'lt3-3-nhen', 'Hay chăng dây điện là con gì?'],
          ['Dùng miệng nấu cơm', 'lt3-3-cua', 'Dùng miệng nấu cơm là con gì?'],
        ],
      },
      {
        name: 'Hỏi đáp theo bài đọc',
        rounds: [
          ['Ăn no quay tròn', 'lt3-3-coi', 'Ăn no quay tròn là cái gì?'],
          ['Mồm thở ra gió', 'lt3-3-quat', 'Mồm thở ra gió là cái gì?'],
          ['Không thèm cỏ non', 'lt3-3-trau-sat', 'Không thèm cỏ non là cái gì?'],
          ['Rồng phun nước bạc', 'lt3-3-may-bom', 'Rồng phun nước bạc là cái gì?'],
        ],
      },
    ],
    trace: ['G', 'H', 'vịt bầu', 'máy bơm'],
  }),
  LT(3, 4, 'Chuyện của hoa hồng', 107, {
    story: [
      ['lt3-4-t1', 'Cây hoa hồng sống ở đâu? Sáng ấy, hoa hồng nhìn thấy gì? Nó đã nói gì?', 'Cây hoa hồng sống trong vườn, cạnh gốc cây to. Sáng ấy, nó thấy chú giun đất bò lên, liền chê: Giun xấu xí quá, đi chỗ khác đi!'],
      ['lt3-4-t2', 'Mẹ đất giải thích với hoa hồng thế nào? Hoa hồng trả lời mẹ ra sao?', 'Mẹ Đất bảo: Bạn giun xới đất cho tơi xốp để con lớn lên đấy. Hoa hồng không nghe, nói: Con chỉ cần ông Mặt Trời thôi.'],
      ['lt3-4-t3', 'Sau đó hoa hồng đã làm gì? Nó nhìn thấy gì?', 'Hoa hồng vươn mình thật cao để đón nắng. Nó thấy ông Mặt Trời đang toả nắng rực rỡ.'],
      ['lt3-4-t4', 'Điều gì xảy ra khi Mặt Trời lên cao? Hoa hồng nói gì với ông Mặt Trời? Ông trả lời ra sao?', 'Mặt Trời lên cao, nắng gắt, hoa hồng héo rũ. Nó xin ông bớt nóng. Ông Mặt Trời bảo: Không có mẹ Đất và bạn giun, con không sống được đâu.'],
      ['lt3-4-t5', 'Hoa hồng cảm thấy thế nào khi trở về với mẹ đất? Nó đã làm gì để thể hiện sự hối lỗi?', 'Hoa hồng trở về với mẹ Đất, thấy rất hối hận. Nó xin lỗi mẹ Đất và bạn giun, hứa không chê bai ai nữa.'],
    ],
    q: [['Câu chuyện khuyên em điều gì?', ['Không được chê bai, coi thường người khác.', 'Chỉ cần ông Mặt Trời là đủ.', 'Nên đứng dưới nắng thật lâu.']]],
  }),

  // ───────────── Chủ điểm 4: Gia đình ─────────────
  LT(4, 1, 'Ông giẳng ông giăng', 110, {
    read: {
      title: 'Ông giẳng ông giăng', img: 'lt4-1-doc', name: 'Đọc đồng dao',
      poem: 'Ông giẳng ông giăng / Xuống chơi nhà tôi / Có bầu có bạn / Có ván cơm xôi / Có nồi cơm nếp / Có đệp bánh chưng / Có lưng hũ rượu / Có khướu đánh đu / Thằng cu vỗ chài / Bắt trai bỏ giỏ / Cái đỏ ẵm em / Đi xem đánh cá / Có rá vo gạo / Có gáo múc nước / Cái lược chải đầu / Con trâu cày chiêm / Cái liềm cắt lá…',
    },
    sort: {
      name: 'Đố nhau: Nhà bạn nhỏ có những gì?', ask: 'thuộc nhóm nào?', keys: ['người', 'đồ vật', 'con vật', 'đồ ăn'],
      items: [
        ['lt4-1-em-be', 'em bé', 'người'], ['lt4-1-noi', 'cái nồi', 'đồ vật'], ['lt4-1-ra', 'cái rá', 'đồ vật'], ['lt4-1-luoc', 'cái lược', 'đồ vật'],
        ['lt4-1-khuou', 'chim khướu', 'con vật'], ['lt4-1-trau', 'con trâu', 'con vật'], ['lt4-1-banh-chung', 'bánh chưng', 'đồ ăn'], ['lt4-1-ru', 'hũ rượu', 'đồ ăn'],
      ],
    },
    choose: [
      FILL('Tìm tiếng còn thiếu', [
        ['Cái … cắt lá', 'liềm', 'quýt', 'vẩy'],
        ['Con cá có …', 'vẩy', 'liềm', 'bánh'],
        ['Quả … quả cam', 'quýt', 'vẩy', 'liềm'],
        ['Chè lam … khảo', 'bánh', 'quýt', 'vẩy'],
      ]),
      FILL('Em chọn chữ nào: r, d hay gi?', [
        ['Nhện con hay chăng … điện.', 'dây', 'giây', 'rây'],
        ['Cái quạt hòm mồm thở ra …', 'gió', 'dó', 'ró'],
        ['Máy bơm phun nước bạc như …', 'rồng', 'dồng', 'giồng'],
        ['Cua cáy … miệng nấu cơm.', 'dùng', 'giùng', 'rùng'],
      ]),
    ],
  }),
  LT(4, 2, 'Sẻ anh, sẻ em', 112, {
    read: {
      title: 'Sẻ anh, sẻ em', img: 'lt4-2-doc',
      text: 'Trong vườn có một tổ chim sẻ. Trời rét, hai chú chim nhỏ nằm co ro. Thương em, sẻ anh cố sức kéo những cọng rơm nhỏ trong tổ che cho em. Gần trưa, sẻ mẹ bay về: Mẹ chỉ tìm được một con sâu. Sẻ em ăn trước nhé! Sẻ anh vui vẻ: Vâng ạ. Nhưng sẻ em lắc đầu: Mẹ đưa anh ăn trước đi. Sẻ mẹ bèn chia cho mỗi con một phần. Thế là hai anh em cùng ăn ngon lành. Thấy các con thương yêu nhau, sẻ mẹ quên cả mệt, lại bay đi kiếm mồi.',
      q: [
        ['Trời rét, sẻ anh làm gì cho em?', ['Kéo cọng rơm che cho em.', 'Bay đi kiếm mồi.', 'Hát cho em nghe.']],
        ['Sẻ mẹ tìm được mấy con sâu?', ['Một con sâu.', 'Hai con sâu.', 'Rất nhiều sâu.']],
        ['Vì sao sẻ mẹ quên cả mệt?', ['Vì sẻ mẹ thấy các con rất thương yêu nhau.', 'Vì sẻ mẹ kiếm được nhiều thức ăn cho các con.']],
      ],
    },
    trace: ['I', 'K', 'ngoan ngoãn', 'nhường nhịn'],
  }),
  LT(4, 3, 'Ngoan', 114, {
    read: {
      title: 'Ngoan', img: 'lt4-3-doc',
      poem: 'Trăng ngoan trăng sáng sân nhà / Đèn ngoan đèn thắp cho bà ngồi may / Nước ngoan rửa trắng bàn tay / Lửa ngoan giúp mẹ thổi đầy nồi cơm / Trái ngoan trái chín đỏ vườn / Gió ngoan gió quạt hương thơm khắp nhà / Biết vâng lời mẹ lời cha / Yêu cô, yêu bạn, ấy là bé ngoan.',
      q: [
        ['Đèn ngoan …', ['thắp cho bà ngồi may.', 'rửa trắng bàn tay.', 'quạt hương thơm khắp nhà.']],
        ['Nước ngoan …', ['rửa trắng bàn tay.', 'thắp cho bà ngồi may.', 'quạt hương thơm khắp nhà.']],
        ['Gió ngoan …', ['quạt hương thơm khắp nhà.', 'rửa trắng bàn tay.', 'thắp cho bà ngồi may.']],
        ['Thế nào là bé ngoan?', ['Biết vâng lời mẹ cha, yêu cô, yêu bạn.', 'Chỉ thích đi chơi.', 'Không nghe lời ai.']],
      ],
    },
    trace: ['L', 'bàn tay', 'hương thơm'],
  }),
  LT(4, 4, 'Ba cô con gái', 116, {
    story: [
      ['lt4-4-t1', 'Bà mẹ có mấy cô con gái? Vì sao bà phải ở một mình?', 'Ngày xưa, có một bà mẹ nuôi ba cô con gái. Lớn lên, các cô đi lấy chồng ở xa, bà mẹ phải sống một mình.'],
      ['lt4-4-t2', 'Khi bị ốm, bà mẹ nhờ ai đưa thư cho các con?', 'Một hôm, bà mẹ bị ốm nặng. Bà nhờ bạn sóc đưa thư báo tin cho các con.'],
      ['lt4-4-t3', 'Khi sóc đưa thư cho cô cả, cô cả nói gì? Sau đó, chuyện gì đã xảy ra?', 'Cô cả đang giặt đồ, nói: Chị bận lắm, chưa về được. Cô vừa nói xong thì hai chiếc chậu úp vào người, cô biến thành con rùa.'],
      ['lt4-4-t4', 'Khi sóc đưa thư cho cô hai, cô hai nói gì? Sau đó, chuyện gì đã xảy ra?', 'Cô hai đang dệt vải, cũng nói: Chị bận lắm, chưa về được. Thế là cô biến thành con nhện, suốt ngày giăng tơ.'],
      ['lt4-4-t5', 'Khi sóc đưa thư cho cô út, cô út nói gì? Sóc nói gì với cô?', 'Cô út đang nhào bột, nghe tin mẹ ốm liền bỏ hết công việc, chạy về chăm mẹ. Sóc nói: Cô thật hiếu thảo, mọi người sẽ yêu quý cô.'],
      ['lt4-4-t6', 'Câu chuyện kết thúc thế nào?', 'Được cô út chăm sóc, bà mẹ khoẻ lại. Cô út sống vui vẻ bên mẹ, được mọi người yêu thương.'],
    ],
    q: [['Câu chuyện khuyên em điều gì?', ['Phải biết yêu thương, chăm sóc cha mẹ.', 'Công việc quan trọng hơn cha mẹ.', 'Nên nuôi một con sóc.']]],
  }),

  // ───────────── Chủ điểm 5: Trường học ─────────────
  LT(5, 1, 'Cái kẹo và con cánh cam', 119, {
    read: {
      title: 'Cái kẹo và con cánh cam', img: 'lt5-1-doc',
      text: 'Hôm nay có tiết luyện nói. Cô giáo hỏi: Khi đi học, em mang những gì? Trung thấy khó nói. Bởi vì em đi học còn mang theo hôm thì cái kẹo, hôm thì con cánh cam. Cô và các bạn đều không biết. Nhưng Trung không muốn nói dối. Em kể ra các đồ dùng học tập, rồi nói thêm: Em còn mang kẹo và con cánh cam nữa ạ. Cô giáo cười, khen: Trung rất thật thà. Nhưng kẹo thì nên ăn ngoài sân. Con cánh cam thì nên để ở nhà. Cô và cả lớp thưởng cho Trung một tràng vỗ tay.',
      q: [
        ['Cô giáo hỏi cả lớp câu gì?', ['Khi đi học, em mang những gì?', 'Em thích ăn kẹo không?', 'Em có nuôi cánh cam không?']],
        ['Ngoài đồ dùng học tập, Trung còn mang gì đến lớp?', ['Cái kẹo và con cánh cam.', 'Quả bóng và con búp bê.', 'Cái bánh và con mèo.']],
        ['Vì sao cô giáo và cả lớp vỗ tay khen Trung?', ['Vì Trung rất thật thà.', 'Vì Trung nói rất hay.']],
      ],
    },
    sort: {
      name: 'Bạn Trung mang gì đi học? Đồ nào là đồ dùng học tập?', ask: 'có phải đồ dùng học tập không?', keys: ['phải', 'không phải'],
      items: [['lt5-1-bang', 'bảng con', 'phải'], ['lt5-1-thuoc', 'thước kẻ', 'phải'], ['lt5-1-cap', 'cặp sách', 'phải'], ['lt5-1-keo', 'cái kẹo', 'không phải'], ['lt5-1-cai-keo', 'cái kéo', 'phải'], ['lt5-1-canh-cam', 'con cánh cam', 'không phải']],
    },
    trace: ['Cô và mẹ', 'mẹ hiền'],
  }),
  LT(5, 2, 'Giờ học vẽ', 121, {
    read: {
      title: 'Giờ học vẽ', img: 'lt5-2-doc',
      text: 'Hiếu làm bài tập tô màu. Em lấy bút màu xanh tô vườn cây, màu nâu tô mặt đất, màu vàng tô Mặt Trời… chỉ thiếu màu đỏ. Nhìn mái nhà của Hiếu chỉ có khung trống, cô giáo ngạc nhiên. Hiếu nói: Em không có bút màu đỏ. Em để mái nhà màu trắng, được không ạ? Cả lớp cười ồ. Quế đưa cho Hiếu bút màu đỏ. Hiếu cảm ơn bạn và bảo: Bạn cần màu gì, bảo tớ nhé. Tớ chỉ thiếu màu đỏ. Cô giáo bảo: Các em nên đổi bút màu cho nhau để tranh đẹp hơn. Hết giờ, tranh của Hiếu và Quế đều được cô khen.',
      q: [
        ['Hiếu thiếu bút màu gì?', ['Màu đỏ.', 'Màu xanh.', 'Màu vàng.']],
        ['Ai cho Hiếu mượn bút màu đỏ?', ['Bạn Quế.', 'Cô giáo.', 'Bạn Trung.']],
        ['Cô giáo khuyên học sinh điều gì?', ['Đổi bút màu cho nhau để tô.', 'Không cần tô, để mái nhà màu trắng.']],
      ],
    },
    trace: ['M', 'N', 'màu đỏ', 'màu xanh'],
  }),
  LT(5, 3, 'Quyển vở của em', 122, {
    read: {
      title: 'Quyển vở của em', img: 'lt5-3-doc',
      poem: 'Quyển vở này mở ra / Bao nhiêu trang giấy trắng / Từng dòng kẻ ngay ngắn / Như chúng em xếp hàng. / Lật từng trang, từng trang / Giấy trắng sờ mát rượi / Thơm tho mùi giấy mới / Nắn nót bàn tay xinh. / Ơi quyển vở mới tinh / Em viết cho sạch, đẹp / Chữ đẹp là tính nết / Của những người trò ngoan.',
      q: [
        ['Mở vở ra, bạn nhỏ thấy gì trên trang giấy trắng?', ['Từng dòng kẻ ngay ngắn.', 'Những bức tranh đẹp.', 'Nhiều chữ nguệch ngoạc.']],
        ['Từng dòng kẻ ngay ngắn như …', ['chúng em xếp hàng.', 'đàn kiến bò.', 'những con sóng.']],
        ['Bạn nhỏ hứa viết vào vở thế nào?', ['Viết cho sạch, đẹp.', 'Viết thật nhanh.', 'Vẽ thật nhiều.']],
      ],
    },
    trace: ['O', 'Ô', 'Ơ', 'quyển vở', 'mát rượi'],
  }),
  LT(5, 4, 'Đi tìm vần êm', 125, {
    sayTitle: 'Kể chuyện: Đi tìm vần êm',
    story: [
      ['lt5-4-t1', 'Hôm nay, lớp Tết học vần gì? Cô giáo cho các tổ làm gì? Các bạn phát biểu thế nào?', 'Hôm nay, lớp Tết học vần mới. Cô giáo cho các tổ thi tìm tiếng có vần vừa học. Các bạn giơ tay phát biểu rất sôi nổi.'],
      ['lt5-4-t2', 'Cô dặn ngày mai học vần gì? Các tổ hẹn nhau về nhà làm gì?', 'Cô dặn: Ngày mai, lớp mình học vần êm. Các tổ hẹn nhau về nhà tìm thật nhiều tiếng có vần êm.'],
      ['lt5-4-t3', 'Về nhà, Tết chạy ra vườn tìm bà ngoại làm gì? Bà tìm ra tiếng gì?', 'Về nhà, Tết chạy ra vườn nhờ bà ngoại tìm giúp. Bà chỉ đám rau non, bảo: Rau này mềm lắm. Có tiếng mềm đấy, cháu ạ.'],
      ['lt5-4-t4', 'Sau đó, Tết vào bếp tìm ai? Kết quả thế nào?', 'Tết vào bếp tìm má. Má đang nấu canh, nếm thử rồi cười: Má vừa nếm canh. Có tiếng nếm rồi nhé!'],
      ['lt5-4-t5', 'Hai má con lên phòng của ba làm gì?', 'Hai má con lên phòng của ba, giở sách ra tìm thêm. Mải tìm, hai má con quên cả nồi canh.'],
      ['lt5-4-t6', 'Chuyện gì xảy ra giúp má tìm được vần êm?', 'Bỗng có mùi khét bay lên. Má vội chạy xuống bếp, nồi canh đã cạn. Má cười: Mải tìm vần êm, má quên cả nồi canh! Ngoài trời đã tối, má bảo: Đêm rồi, có thêm tiếng đêm đấy. Tết vui lắm vì tìm được nhiều tiếng có vần êm.'],
    ],
    q: [['Tiếng nào có vần êm?', ['mềm', 'mưa', 'mèo']], ['Tiếng nào có vần êm?', ['nếm', 'nấm', 'nằm']]],
  }),

  // ───────────── Chủ điểm 6: Thiên nhiên ─────────────
  LT(6, 1, 'Cuộc thi không thành', 128, {
    read: {
      title: 'Cuộc thi không thành', img: 'lt6-1-doc',
      text: 'Tôm, cá và cua thi chạy. Bác rùa làm trọng tài. Khi chuẩn bị xuất phát thì sinh chuyện rắc rối. Tôm bảo: Hai cậu phải quay đuôi về đích như mình! Cá ngúng nguẩy: Không, hai cậu phải quay đầu về đích như tớ! Cua lại nói: Hai cậu phải quay ngang như tớ! Chúng cãi nhau vì tôm chỉ quen bơi giật lùi, cá chỉ biết phóng thẳng, cua chỉ bò ngang. Ai cũng cho là mình đúng. Bác rùa khuyên bảo, chúng chẳng nghe. Thế là cuộc thi không thành, mất cả vui.',
      q: [
        ['Tôm, cá và cua định làm gì?', ['Thi chạy.', 'Thi hát.', 'Thi bơi lội.']],
        ['Vì sao cuộc thi của ba bạn không thành?', ['Vì bạn nào cũng đòi bạn khác chạy theo cách của mình.', 'Vì mỗi bạn chạy theo một cách riêng.']],
        ['Tôm …', ['bơi giật lùi.', 'phóng thẳng.', 'bò ngang.']],
        ['Cá …', ['phóng thẳng.', 'bơi giật lùi.', 'bò ngang.']],
        ['Cua …', ['bò ngang.', 'phóng thẳng.', 'bơi giật lùi.']],
      ],
    },
    choose: [SQ([['ngang', 'nghang'], ['nghe', 'nge'], ['ngay', 'nghay'], ['ngắn', 'nghắn']], 'Em chọn chữ nào: ng hay ngh?')],
    sort: { name: 'Tiếng nào có vần uôi? Tiếng nào có vần uây?', keys: ['uôi', 'uây'], items: [[null, 'đuôi', 'uôi'], [null, 'nguẩy', 'uây'], [null, 'chuối', 'uôi'], [null, 'khuấy', 'uây']] },
    trace: ['Rùa con', 'đi chợ'],
  }),
  LT(6, 2, 'Anh hùng biển cả', 130, {
    read: {
      title: 'Anh hùng biển cả', img: 'lt6-2-doc',
      text: 'Cá heo sống dưới nước nhưng không đẻ trứng như cá. Nó sinh con và nuôi con bằng sữa. Cá heo là tay bơi giỏi nhất của biển. Nó có thể bơi nhanh vun vút như tên bắn. Cá heo rất thông minh. Có thể dạy nó canh gác bờ biển, dẫn tàu thuyền vào ra các cảng, dò mìn, săn lùng tàu thuyền giặc. Một chú cá heo ở Biển Đen từng được thưởng huân chương vì đã cứu sống một phi công. Nó giúp anh thoát khỏi lũ cá mập khi anh nhảy dù xuống biển vì máy bay bị hỏng.',
      q: [
        ['Cá heo có đặc điểm gì khác loài cá?', ['Sinh con và nuôi con bằng sữa.', 'Đẻ trứng dưới nước.', 'Sống trên cạn.']],
        ['Cá heo bơi thế nào?', ['Nhanh vun vút như tên bắn.', 'Chậm như rùa.', 'Bơi giật lùi.']],
        ['Vì sao cá heo được gọi là anh hùng biển cả?', ['Vì nó thông minh, đã cứu sống một phi công.', 'Vì nó to nhất biển.', 'Vì nó ăn thịt cá mập.']],
      ],
    },
    trace: ['P', 'Q', 'cá heo', 'vun vút'],
  }),
  LT(6, 3, 'Hoa kết trái', 131, {
    read: {
      title: 'Hoa kết trái', img: 'lt6-3-ca',
      poem: 'Hoa cà tim tím / Hoa mướp vàng vàng / Hoa lựu chói chang / Đỏ như đốm lửa / Hoa vừng nho nhỏ / Hoa đỗ xinh xinh / Hoa mận trắng tinh / Rung rinh trong gió / Này các bạn nhỏ / Đừng hái hoa tươi / Hoa yêu mọi người / Nên hoa kết trái.',
      q: [['Vì sao các bạn nhỏ không nên hái hoa tươi?', ['Vì hoa sẽ kết trái cho mọi người.', 'Vì hoa có gai.', 'Vì hoa không thơm.']]],
    },
    pick: [{
      name: 'Tìm đúng loài hoa',
      options: ['lt6-3-ca', 'lt6-3-muop', 'lt6-3-luu', 'lt6-3-vung', 'lt6-3-do', 'lt6-3-man'],
      rounds: [
        ['Hoa cà tim tím', 'lt6-3-ca'],
        ['Hoa mướp vàng vàng', 'lt6-3-muop'],
        ['Hoa lựu đỏ như đốm lửa', 'lt6-3-luu'],
        ['Hoa mận trắng tinh', 'lt6-3-man'],
      ],
    }],
    trace: ['R', 'S', 'trắng tinh', 'cánh diều'],
  }),
  LT(6, 4, 'Cuộc phiêu lưu của giọt nước tí hon', 134, {
    short: 'Giọt nước tí hon',
    story: [
      ['lt6-4-t1', 'Giọt nước tí hon là con của ai?', 'Giọt nước tí hon là con của mẹ Biển. Nó sống vui vẻ cùng các bạn giữa biển xanh.'],
      ['lt6-4-t2', 'Vì sao giọt nước theo thuyền đi vào đất liền? Nó làm thế nào để đi theo thuyền?', 'Giọt nước muốn biết đất liền ra sao. Nó nhảy lên, bám vào mạn một chiếc thuyền buồm để theo thuyền vào bờ.'],
      ['lt6-4-t3', 'Đất liền rất đẹp, có bánh ngọt, hoa thơm nhưng vì sao giọt nước lại khóc?', 'Đất liền rất đẹp, có bánh ngọt, có hoa thơm. Nhưng giọt nước vẫn khóc vì nhớ mẹ Biển.'],
      ['lt6-4-t4', 'Ông sấm muốn giúp giọt nước, bảo nó phải làm gì? Vì sao khi đã xuống đất, giọt nước vẫn khóc?', 'Ông sấm bảo giọt nước hãy theo mưa rơi xuống đất. Nhưng xuống đất rồi, giọt nước vẫn khóc vì chưa tìm thấy mẹ.'],
      ['lt6-4-t5', 'Chị suối, bà sông giúp giọt nước như thế nào để đưa nó về với mẹ?', 'Chị suối đưa giọt nước ra sông. Bà sông cõng giọt nước chảy mãi, chảy mãi ra biển.'],
      ['lt6-4-t6', 'Hai mẹ con giọt nước gặp nhau như thế nào?', 'Về đến biển, giọt nước ôm chầm lấy mẹ. Hai mẹ con vui mừng khôn xiết.'],
    ],
    q: [['Ai đã đưa giọt nước về với mẹ Biển?', ['Chị suối và bà sông.', 'Ông Mặt Trời.', 'Chiếc thuyền buồm.']]],
  }),

  // ───────────── Chủ điểm 7: Gia đình ─────────────
  LT(7, 1, 'Ngôi nhà ấm áp', 137, {
    read: {
      title: 'Ngôi nhà ấm áp', img: 'lt7-1-doc',
      text: 'Chủ nhật, thỏ bố và thỏ mẹ chơi cờ. Thỏ mẹ giao hẹn: Ai thắng nấu ăn, ai thua làm vườn nhé! Hết ván cờ, thỏ mẹ vào bếp nấu ăn, thỏ bố ra vườn chăm cây. Thỏ con vào bếp giúp mẹ nhưng cứ nhìn ra chỗ bố. Rồi nó ra vườn giúp bố nhưng lại ngó vào chỗ mẹ. Cuối cùng nó thỏ thẻ: Bố mẹ ơi, cả nhà làm việc cùng nhau đi! Bố mẹ cười, gật đầu. Thỏ con thích lắm, vì cả nhà làm việc bên nhau rất vui. Trong bữa ăn, thỏ con vui vẻ nói: Nhà mình thật ấm áp, bố mẹ nhỉ!',
      q: [
        ['Ai thắng ván cờ?', ['Thỏ mẹ thắng.', 'Thỏ bố thắng.']],
        ['Vì sao thỏ con nói: Nhà mình thật ấm áp?', ['Vì cả nhà yêu thương nhau.', 'Vì căn nhà rất ấm.']],
      ],
    },
    pick: [{
      name: 'Thỏ con muốn gì? Chọn tranh thích hợp',
      options: ['lt7-1-nau', 'lt7-1-cham', 'lt7-1-cung-nau', 'lt7-1-cung-cham'],
      rounds: [
        ['Cả nhà cùng nấu ăn', 'lt7-1-cung-nau', 'Thỏ con muốn cả nhà cùng nấu ăn.'],
        ['Cả nhà cùng chăm cây', 'lt7-1-cung-cham', 'Thỏ con muốn cả nhà cùng chăm cây.'],
      ],
    }],
    choose: [
      FILL('Em chọn chữ nào: r, d hay gi?', [
        ['Thỏ mẹ … hẹn: Ai thắng nấu ăn, ai thua làm vườn.', 'giao', 'dao', 'rao'],
        ['Hai mẹ con thỏ cùng … vườn giúp bố chăm cây.', 'ra', 'da', 'gia'],
        ['Hai bố con thỏ cùng vào bếp … mẹ nấu ăn.', 'giúp', 'dúp', 'rúp'],
        ['Thỏ con rất … thương.', 'dễ', 'giễ', 'rễ'],
      ]),
      FILL('Tìm vần phù hợp: an, ang hay oan, anh?', [
        ['Thỏ con … ngoãn.', 'ngoan', 'ngan', 'nganh'],
        ['Thỏ con … yêu.', 'đáng', 'đán', 'đoán'],
        ['Ngôi nhà … ngập hạnh phúc.', 'tràn', 'tràng', 'trành'],
        ['Ngôi nhà tràn ngập … phúc.', 'hạnh', 'hạn', 'hạng'],
      ]),
    ],
  }),
  LT(7, 2, 'Em nhà mình là nhất', 139, {
    read: {
      title: 'Em nhà mình là nhất', img: 'lt7-2-doc',
      text: 'Bố đưa mẹ đi sinh em bé. Nam giao hẹn: Mẹ sinh em trai để em đá bóng với con nhé! Hôm sau, bố đón mẹ và em bé về nhà. Nam mừng quýnh. Mẹ gọi: Nam ơi, vào đây với em. Em gái con xinh lắm! Nam vùng vằng: Con bảo mẹ sinh em trai cơ mà! Bố đùa: Hay mình đổi em gái lấy em trai nhà cô Cúc nhé? Nghe vậy, Nam kêu toáng lên: Con không đổi đâu! Bố cười: Nhưng con không thích em gái mà? Nam quả quyết: Em gái cũng đá bóng được. Em nhà mình là nhất! Con không đổi đâu!',
      q: [
        ['Mẹ Nam sinh em trai hay em gái?', ['Em gái.', 'Em trai.']],
        ['Vì sao Nam không vui khi mẹ gọi vào với em?', ['Vì Nam thích em trai.', 'Vì Nam không thích có em.']],
        ['Vì sao Nam không muốn đổi em gái?', ['Vì Nam yêu em mình.', 'Vì Nam không thích đá bóng nữa.']],
      ],
    },
    trace: ['T', 'mừng quýnh', 'quả quyết'],
  }),
  LT(7, 3, 'Làm anh', 141, {
    read: {
      title: 'Làm anh', img: 'lt7-3-doc',
      poem: 'Làm anh khó đấy / Phải đâu chuyện đùa / Với em gái bé / Phải “người lớn” cơ. / Khi em bé khóc / Anh phải dỗ dành / Nếu em bé ngã / Anh nâng dịu dàng. / Mẹ cho quà bánh / Chia em phần hơn / Có đồ chơi đẹp / Cũng nhường em luôn. / Làm anh thật khó / Nhưng mà thật vui / Ai yêu em bé / Thì làm được thôi.',
      q: [
        ['Làm anh dễ hay khó?', ['Làm anh khó nhưng thật vui.', 'Làm anh rất dễ.']],
        ['Khi em bé khóc …', ['anh phải dỗ dành.', 'anh nâng dịu dàng.', 'chia em phần hơn.']],
        ['Nếu em bé ngã …', ['anh nâng dịu dàng.', 'anh phải dỗ dành.', 'cũng nhường em luôn.']],
        ['Mẹ cho quà bánh …', ['chia em phần hơn.', 'cũng nhường em luôn.', 'anh phải dỗ dành.']],
        ['Có đồ chơi đẹp …', ['cũng nhường em luôn.', 'chia em phần hơn.', 'anh nâng dịu dàng.']],
      ],
    },
    trace: ['U', 'Ư', 'dỗ dành', 'tràn ngập'],
  }),
  LT(7, 4, 'Hai tiếng kì lạ', 143, {
    story: [
      ['lt7-4-t1', 'Vì sao cậu bé ngồi trước nhà cau có?', 'Cậu bé ngồi trước nhà, mặt cau có. Cậu giận vì không ai trong nhà chịu chiều theo ý mình.'],
      ['lt7-4-t2', 'Bà cụ nói gì với cậu?', 'Một bà cụ đi qua, ghé tai cậu nói nhỏ: Bà mách cháu hai tiếng kì lạ. Khi nhờ ai việc gì, cháu hãy nhìn thẳng vào mắt người đó và nói: làm ơn.'],
      ['lt7-4-t3', 'Cậu bé chạy vào nhà làm gì? Chị cậu làm gì khi thấy cậu?', 'Cậu bé chạy vào nhà, muốn mượn bút màu của chị. Thấy cậu, chị vội ôm hộp bút màu vào lòng.'],
      ['lt7-4-t4', 'Vì sao sau đó chị cậu cho cậu mượn bút màu?', 'Cậu nhìn vào mắt chị, nói nhỏ nhẹ: Chị làm ơn cho em mượn bút màu nhé! Chị ngạc nhiên, vui vẻ cho cậu mượn ngay.'],
      ['lt7-4-t5', 'Muốn thử tiếp phép mầu, cậu bé đã tìm gặp ai? Kết quả ra sao?', 'Cậu chạy đi tìm bố, lễ phép nói: Bố làm ơn cho con đi chơi cùng bố nhé! Bố cười, nắm tay cậu đồng ý ngay.'],
      ['lt7-4-t6', 'Hai tiếng kì lạ đó là gì? Cậu bé cảm ơn ai?', 'Hai tiếng kì lạ đó là: làm ơn. Cậu bé chạy đi tìm bà cụ để nói lời cảm ơn bà.'],
    ],
    q: [['Hai tiếng kì lạ là gì?', ['làm ơn', 'đi chơi', 'bút màu']]],
  }),

  // ───────────── Chủ điểm 8: Trường học ─────────────
  LT(8, 1, 'Ve con đi học', 146, {
    read: {
      title: 'Ve con đi học', img: 'lt8-1-doc',
      text: 'Ve con rất ham chơi. Một hôm, ve bố bảo: Mai con đi học nhé! Sáng hôm sau, mẹ gọi mãi, ve con mới dậy. Nó vội ăn sáng rồi chạy tới trường. Trong lớp, thầy giáo đang dạy chữ e. Ve vội viết chữ e vào vở rồi chạy ra vườn. Nó reo: E… e… e… Mình biết chữ rồi! Từ đó, ve trốn học đi chơi, không học thêm được chữ nào. Đến bây giờ nó vẫn chỉ đọc được mỗi chữ e. Nhưng nó tưởng mình giỏi, suốt ngày đọc e… e… để khoe tài.',
      q: [
        ['Vì sao ve con chỉ biết đọc chữ e?', ['Vì mới học được chữ e, ve con đã bỏ học đi chơi.', 'Vì thầy giáo chỉ dạy chữ e, không dạy chữ khác.']],
        ['Ve con suốt ngày đọc e… e… để làm gì?', ['Để khoe tài.', 'Để thuộc bài.']],
        ['Nếu ve hiểu trốn học là sai, ve sẽ nói gì với bố mẹ?', ['Con xin lỗi bố mẹ, con sẽ chăm học.', 'Con biết hết chữ rồi.', 'Con không đi học nữa.']],
      ],
    },
    choose: [
      FILL('Chọn chữ phù hợp: g hay gh?', [
        ['Ve mẹ … mãi, ve con mới dậy đi học.', 'gọi', 'ghọi'],
        ['Ve con … ai cũng khoe.', 'gặp', 'ghặp'],
        ['Tớ giỏi … !', 'ghê', 'gê'],
      ]),
      FILL('Chọn vần phù hợp: eo hay oe?', [
        ['Suốt mùa hè, ve con … tài ca hát.', 'khoe', 'kheo'],
        ['Được cô khen, dế con nhảy nhót … mừng.', 'reo', 'roe'],
      ]),
    ],
    trace: ['Dàn đồng ca', 'mùa hạ'],
  }),
  LT(8, 2, 'Sử dụng đồ dùng học tập an toàn', 148, {
    short: 'Đồ dùng an toàn',
    read: {
      title: 'Sử dụng đồ dùng học tập an toàn', img: 'lt8-2-doc',
      text: 'Thước, bút, kéo, dao… là những đồ dùng rất có ích. Nhưng em cần biết cách sử dụng chúng cho an toàn. Cần chú ý: Cẩn thận khi dùng dao, kéo và những đồ dùng sắc nhọn khác để tránh gây thương tích cho bản thân và người khác. Không cắn hay ngậm đầu bút vào miệng. Khi dùng xong bút sáp hoặc bút chì, nên rửa tay sạch sẽ để tránh chất độc hại. Không làm gãy thước kẻ để tránh tạo thành vật nhọn, gây thương tích.',
      q: [
        ['Vì sao khi dùng những vật sắc nhọn, em phải cẩn thận?', ['Để tránh gây thương tích cho mình và người khác.', 'Để đồ dùng không bị bẩn.', 'Để cô giáo khen.']],
        ['Khi dùng bút, em cần chú ý điều gì?', ['Không cắn hay ngậm đầu bút vào miệng.', 'Ngậm bút cho khỏi rơi.', 'Không cần rửa tay.']],
        ['Vì sao không nên làm gãy thước kẻ?', ['Vì thước gãy thành vật nhọn, gây thương tích.', 'Vì thước sẽ dài hơn.', 'Vì thước sẽ đẹp hơn.']],
      ],
    },
    trace: ['V', 'X', 'trôi chảy', 'lưu loát'],
  }),
  LT(8, 3, 'Chuyện ở lớp', 149, {
    read: {
      title: 'Chuyện ở lớp', img: 'lt8-3-doc',
      poem: 'Mẹ có biết ở lớp / Bạn Hoa không học bài / Sáng nay cô giáo gọi / Đứng dậy đỏ bừng tai… / Mẹ có biết ở lớp / Bạn Hùng cứ trêu con / Bạn Mai tay đầy mực / Còn bôi bẩn ra bàn… / Vuốt tóc con, mẹ bảo: / Mẹ chẳng nhớ nổi đâu / Nói mẹ nghe ở lớp / Con đã ngoan thế nào?',
      q: [
        ['Bạn Hoa …', ['không học bài.', 'trêu bạn trong lớp.', 'bôi bẩn ra bàn.']],
        ['Bạn Hùng …', ['trêu bạn trong lớp.', 'không học bài.', 'bôi bẩn ra bàn.']],
        ['Bạn Mai …', ['bôi bẩn ra bàn.', 'trêu bạn trong lớp.', 'không học bài.']],
        ['Mẹ muốn bạn nhỏ kể chuyện gì?', ['Ở lớp, con đã ngoan thế nào.', 'Bạn nào không học bài.', 'Bạn nào hay trêu con.']],
      ],
    },
    trace: ['Y', 'Yêu trẻ', 'cẩn thận'],
  }),
  LT(8, 4, 'Chuyện của thước kẻ', 152, {
    story: [
      ['lt8-4-t1', 'Thước kẻ và các bạn làm việc cùng nhau như thế nào?', 'Thước kẻ cùng bút mực, bút chì và tẩy làm việc rất vui vẻ. Nhờ có thước kẻ, các bạn bút kẻ được những đường thẳng tắp.'],
      ['lt8-4-t2', 'Vì sao thước kẻ bị cong?', 'Được khen nhiều, thước kẻ sinh ra kiêu ngạo. Nó cứ ưỡn ngực lên mãi, thế là người nó bị cong.'],
      ['lt8-4-t3', 'Bút mực và bút chì phàn nàn điều gì?', 'Bút mực và bút chì phàn nàn: Thước cong rồi, chúng tớ kẻ đường nào cũng bị cong!'],
      ['lt8-4-t4', 'Thước kẻ nói gì khi thấy mình trong gương?', 'Thước kẻ soi gương, thấy mình cong mà vẫn tưởng mình đẹp. Nó nói: Mình đẹp thế này, các bạn chỉ ghen tị thôi! Rồi nó bỏ đi.'],
      ['lt8-4-t5', 'Điều gì xảy ra khi thước kẻ bỏ đi? Bác thợ mộc nói gì với bà cụ?', 'Thước kẻ nằm lăn lóc ngoài đường. Một bà cụ nhặt về định đun bếp. Bác thợ mộc thấy, bảo: Đây là cái thước kẻ, để cháu sửa lại cho thẳng.'],
      ['lt8-4-t6', 'Sau khi được sửa lại, hình dáng và tính nết của thước kẻ có gì thay đổi?', 'Được sửa lại, thước kẻ thẳng tắp như xưa. Nó không còn kiêu ngạo nữa mà chăm chỉ làm việc cùng các bạn.'],
    ],
    q: [['Câu chuyện khuyên em điều gì?', ['Không nên kiêu ngạo.', 'Nên soi gương thật nhiều.', 'Nên bỏ đi khi bị chê.']]],
  }),

  // ───────────── Ôn tập cuối năm ─────────────
  OT(1, 'Buổi học cuối năm', 155, {
    read: {
      title: 'Buổi học cuối năm', img: 'ot-1-doc',
      text: 'Cả lớp tíu tít chuẩn bị cho buổi học cuối năm. Thầy giáo treo lên tường những bức ảnh ngộ nghĩnh thầy chụp chúng tôi. Còn chúng tôi hí húi làm những chiếc túi bí mật của mình. Tôi đặt vào túi những gì tốt nhất mình đã làm trong năm. Thầy đặt thêm vào đó bản nhận xét của thầy. Đó sẽ là quà tặng khi cha mẹ chúng tôi đến dự buổi học. Thế rồi buổi học ấy cũng đến. Thầy giáo tạm biệt từng đứa chúng tôi. Mắt ai cũng đỏ hoe. Có bạn oà lên nức nở. Chúng tôi hứa viết thư cho thầy để thầy không thấy thiếu chúng tôi trong mấy tháng hè.',
      q: [
        ['Các bạn nhỏ chuẩn bị gì cho buổi học cuối năm?', ['Những chiếc túi bí mật.', 'Những chiếc bánh ngọt.', 'Những bó hoa tươi.']],
        ['Vì sao khi tạm biệt thầy giáo, mắt bạn nào cũng đỏ hoe?', ['Vì các bạn buồn khi phải xa thầy.', 'Vì các bạn không thể gửi thư cho thầy.']],
      ],
    },
    choose: [
      FILL('Chọn chữ: ng hay ngh?', [
        ['Chúng tôi thích thú … những bức ảnh thầy giáo chụp.', 'ngắm', 'nghắm'],
        ['Trong ảnh, nhìn ai cũng vui và ngộ …', 'nghĩnh', 'ngĩnh'],
        ['Hôm ấy là … tràn ngập niềm vui.', 'ngày', 'nghày'],
      ]),
      FILL('Chọn vần: ui hay uy?', [
        ['Chúng tôi hí … làm những chiếc túi bí mật.', 'húi', 'húy'],
        ['Chúng tôi làm những chiếc … bí mật để tặng cha mẹ.', 'túi', 'túy'],
        ['… bận rộn nhưng chúng tôi rất vui.', 'Tuy', 'Tui'],
      ]),
    ],
    trace: ['Cả nhà đi học', 'vui thay'],
  }),
  OT(2, 'Vẽ ngựa – Em yêu mùa hè', 157, {
    short: 'Vẽ ngựa',
    reads: [
      {
        title: 'Vẽ ngựa', img: 'ot-2-ngua',
        text: 'Bé kể với chị: Chị ơi, bà chưa nhìn thấy con ngựa bao giờ đâu! Chị hỏi: Sao em biết? Đây này, em vẽ tranh con ngựa. Vậy mà bà lại hỏi: Cháu vẽ con gì thế? Ồ! Nếu em không nói thì chị cũng không biết em vẽ con gì đâu.',
        q: [['Vì sao bà hỏi: Cháu vẽ con gì thế?', ['Vì bé vẽ chưa giống con ngựa.', 'Vì bà chưa thấy con ngựa bao giờ.', 'Vì bà không đeo kính.']]],
      },
      {
        title: 'Em yêu mùa hè', img: 'ot-2-he',
        poem: 'Em yêu mùa hè / Có hoa sim tím / Mọc trên đồi quê / Rung rinh bướm lượn. / Thong thả dắt trâu / Trong chiều nắng xế / Em hái sim ăn / Sao mà ngọt thế! / Gió mát lưng đồi / Ve ngân ra rả / Trên cao lưng trời / Diều ai vừa thả.',
        q: [['Mùa hè, trên đồi quê có hoa gì?', ['Hoa sim tím.', 'Hoa hồng đỏ.', 'Hoa cúc vàng.']]],
      },
    ],
  }),
  OT(3, 'Xóm chuồn chuồn', 158, {
    read: {
      title: 'Xóm chuồn chuồn', img: 'ot-3-doc',
      text: 'Xóm ấy trú ngụ họ chuồn chuồn. Chuồn chuồn chúa trông dữ tợn, hùng hổ nhưng đôi mắt lại rất hiền. Chuồn chuồn ngô nhanh thoăn thoắt, chao cánh một cái đã biến mất. Chuồn chuồn ớt rực rỡ trong bộ quần áo đỏ chói giữa ngày hè chói chang. Chuồn chuồn tương có đôi cánh kép vàng điểm đen. Chú kìm kim có cái đuôi bằng cái tăm dài nghêu, đôi mắt lồi to hơn đầu. Suốt năm, chuồn chuồn đi miên man, nhưng hễ trời sắp dông gió thì lại bay qua đồng hoa cỏ may, tìm về tránh mưa trong chân cỏ.',
      q: [
        ['Chuồn chuồn nào có bộ quần áo đỏ chói?', ['Chuồn chuồn ớt.', 'Chuồn chuồn ngô.', 'Chuồn chuồn tương.']],
        ['Chuồn chuồn ngô thế nào?', ['Nhanh thoăn thoắt.', 'Có đôi cánh vàng điểm đen.', 'Có đuôi dài nghêu.']],
        ['Khi trời sắp dông gió, chuồn chuồn làm gì?', ['Tìm về tránh mưa trong chân cỏ.', 'Bay lên thật cao.', 'Bay ra biển.']],
      ],
    },
  }),
  OT(4, 'Hoàng tử ếch', 159, {
    read: {
      title: 'Hoàng tử ếch', img: 'ot-4-a',
      text: 'Ngày xưa có một nàng công chúa rất xinh đẹp nhưng ích kỉ và chỉ thích làm đẹp, thích đồ đẹp thôi. Một hôm, vua cha cho nàng một quả bóng bằng vàng. Công chúa thích lắm. Hằng ngày, nàng chơi với quả bóng trong khu vườn của lâu đài. Một chiều, công chúa đang chơi bóng, đột nhiên quả bóng tuột khỏi tay nàng, lăn xuống giếng. Công chúa oà khóc. Chợt có một con ếch nhảy đến trước mặt nàng. Ếch hứa lấy trái bóng từ dưới giếng lên cho nàng, chỉ cần nàng đồng ý làm bạn nó, cho nó ăn cùng, ở cùng. Công chúa thấy ếch xấu xí, không bằng lòng. Nhưng không đồng ý thì ếch không lấy bóng cho. Nghĩ đi nghĩ lại, nàng đành hứa với ếch. Ếch nhảy tùm xuống giếng. Một lúc sau, nó mang quả bóng lên. Công chúa mừng rỡ cầm bóng chạy về, quên cả ếch đang đứng đó.',
    },
    reads: [{
      title: 'Hoàng tử ếch (tiếp)', img: 'ot-4-b',
      text: 'Tối hôm ấy, khi công chúa đang ăn với nhà vua thì có tiếng gọi cửa. Công chúa nhận ra tiếng ếch. Nàng đành kể với vua cha về chuyện nàng đã hứa với ếch. Nhà vua giận dữ: Con là công chúa, không thể nuốt lời hứa được. Hãy mở cửa ra! Công chúa đành ra mở cửa. Ếch nhảy đến bàn, ngồi ăn cạnh nàng. Công chúa đành phải đưa ếch vào phòng của mình. Ếch nhảy tót lên giường. Công chúa tức giận, lấy một cái gối to, ném thẳng vào nó. Bỗng có một luồng sáng loé lên, ếch biến thành một chàng trai khôi ngô, tuấn tú. Hoá ra đó là hoàng tử con vua nước láng giềng, bị phù thuỷ biến thành con ếch xấu xí. Hoàng tử nói: Ta sẵn sàng tha thứ nếu nàng hứa với ta: Từ nay, nàng không bao giờ đánh giá người khác qua vẻ ngoài nữa. Công chúa đã nhận được một bài học. Từ đó, nàng luôn tử tế và nhã nhặn với mọi người.',
      q: [
        ['Ếch giúp công chúa việc gì?', ['Lấy quả bóng vàng từ dưới giếng lên.', 'Dọn dẹp lâu đài.', 'Hát cho công chúa nghe.']],
        ['Vì sao nhà vua bắt công chúa mở cửa cho ếch?', ['Vì công chúa không thể nuốt lời hứa.', 'Vì ếch là bạn của vua.', 'Vì trời đang mưa.']],
        ['Công chúa đã nhận được bài học gì?', ['Không đánh giá người khác qua vẻ ngoài.', 'Không nên chơi bóng gần giếng.', 'Phải ăn cơm đúng giờ.']],
      ],
    }],
  }),
  OT(5, 'Gửi lời chào lớp Một', 161, {
    pick: [{
      name: 'Nối đúng',
      options: ['ot-5-trang', 'ot-5-hong', 'ot-5-song', 'ot-5-bo'],
      rounds: [
        ['Vầng trăng vằng vặc giữa trời', 'ot-5-trang'],
        ['Vườn hồng toả hương thơm ngát', 'ot-5-hong'],
        ['Dòng sông trôi êm ả giữa đôi bờ', 'ot-5-song'],
        ['Đàn bò gặm cỏ trên đồi', 'ot-5-bo'],
      ],
    }],
    read: {
      title: 'Gửi lời chào lớp Một', img: 'ot-5-doc',
      poem: 'Lớp Một ơi! Lớp Một! / Đón em vào năm trước / Nay giờ phút chia tay / Gửi lời chào tiến bước! / Chào bảng đen, cửa sổ / Chào chỗ ngồi thân quen / Tất cả! Chào ở lại / Đón các bạn nhỏ lên. / Chào cô giáo kính mến / Cô sẽ xa chúng em… / Làm theo lời cô dạy / Cô sẽ luôn ở bên. / Lớp Một ơi! Lớp Một! / Đón em vào năm trước / Nay giờ phút chia tay / Gửi lời chào tiến bước!',
      q: [
        ['Chia tay lớp Một, các bạn nhỏ phải xa những đồ vật nào?', ['Bảng đen, cửa sổ, chỗ ngồi.', 'Bút, thước, cặp sách.', 'Bàn ăn, giường ngủ.']],
        ['Các em làm theo lời cô dạy, cô sẽ …', ['luôn ở bên.', 'đi xa mãi.', 'quên các em.']],
      ],
    },
    choose: [SQ([['gửi', 'ghửi'], ['cửa', 'kửa'], ['cô', 'kô'], ['kính', 'cính'], ['ghi', 'gi']], 'Điền c hoặc k, g hoặc gh')],
    trace: ['Lớp Một', 'tiến bước'],
  }),
];
