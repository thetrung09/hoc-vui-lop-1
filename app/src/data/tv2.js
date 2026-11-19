// Tiếng Việt 1 – tập hai. Nhập từ ảnh trang sách (trang PDF = trang in + 1), tranh cắt theo tools/crops/tv2-*.json.
import { lesson, spellingQuiz as SQ } from './vietnamese.js';

const L = (spec) => lesson('tv', { chapter: 'Tập hai: Học vần (tiếp theo)', ...spec });

export const TV2 = [
  L({
    n: 94, t: 'anh – ach', p: 4,
    intro: [['b94-chanh', 'quả chanh'], ['b94-sach', 'cuốn sách']],
    spell: [['anh', ['a', 'nh']], ['ach', ['a', 'ch']], ['chanh', ['ch', 'anh']], ['sách', ['s', 'ách'], 'sờ, ách, sách', ['ach', 'anh']]],
    sort: {
      keys: ['anh', 'ach'],
      items: [['b94-gach', 'viên gạch', 'ach'], ['b94-tach', 'tách trà', 'ach'], ['b94-banh-chung', 'bánh chưng', 'anh'], ['b94-tranh', 'bức tranh', 'anh'], ['b94-khach-san', 'khách sạn', 'ach']],
    },
    read: {
      title: 'Tủ sách của Thanh', img: 'b94-doc', text: 'Từ khi Thanh còn bé, ba má đã mua cho em những cuốn sách có tranh ảnh đẹp. Thanh chưa biết chữ nên chỉ xem tranh. Tranh thì vẽ bạn sóc hiền lành. Tranh thì vẽ cô gà cục tác, chú lợn ủn ỉn. Giờ thì Thanh đã có một tủ sách. Nhờ có sách, em học đọc rất nhanh.',
      q: [['Những cuốn sách đó …', ['có tranh ảnh đẹp.', 'Thanh học đọc rất nhanh.']], ['Nhờ có sách, …', ['Thanh học đọc rất nhanh.', 'có tranh ảnh đẹp.']]],
    },
    trace: ['anh', 'quả chanh', 'ach', 'cuốn sách'],
  }),
  L({
    n: 95, t: 'ênh – êch', p: 6,
    intro: [['b95-kenh', 'dòng kênh'], ['b95-ech', 'con ếch']],
    spell: [['ênh', ['ê', 'nh']], ['êch', ['ê', 'ch']], ['kênh', ['k', 'ênh']], ['ếch', ['ếch'], 'ếch']],
    sort: {
      keys: ['ênh', 'êch'],
      items: [['b95-mat-xech', 'mắt xếch', 'êch'], ['b95-chenh-lech', 'chênh lệch', 'ênh'], ['b95-kham-benh', 'khám bệnh', 'ênh'], ['b95-bap-benh', 'bập bênh', 'ênh']],
    },
    read: {
      title: 'Mưa', img: 'b95-doc', text: 'Mưa đổ xuống. Các con vật tìm chỗ trú mưa. Bọ dừa trốn mưa nhờ đám lá dừa. Cánh cam tránh mưa ở khóm lúa. Chim sẻ nấp ở cành chanh. Kiến nép bên gốc nấm. Nấm như một chiếc ô che cho nó. Ếch và ễnh ương không sợ mưa.',
    },
    pick: [{ name: 'Các con vật trú mưa ở đâu?', rounds: [['bọ dừa', 'b95-la-dua', 'Bọ dừa trú mưa ở đâu?'], ['cánh cam', 'b95-lua', 'Cánh cam trú mưa ở đâu?'], ['chim sẻ', 'b95-chanh', 'Chim sẻ trú mưa ở đâu?'], ['kiến', 'b95-nam', 'Kiến trú mưa ở đâu?']] }],
    trace: ['ênh', 'dòng kênh', 'êch', 'con ếch'],
  }),
  L({
    n: 96, t: 'inh – ich', p: 8,
    intro: [['b96-kinh', 'kính mắt'], ['b96-lich', 'lịch bàn']],
    spell: [['inh', ['i', 'nh']], ['ich', ['i', 'ch']], ['kính', ['k', 'ính'], 'ca, inh, kinh, sắc, kính', ['inh', 'ich']], ['lịch', ['l', 'ịch'], 'lờ, ích, lích, nặng, lịch', ['ich', 'inh']]],
    sort: {
      keys: ['inh', 'ich'],
      items: [['b96-am-tich', 'ấm tích', 'ich'], ['b96-chim-chich', 'chim chích', 'ich'], ['b96-ban-tinh', 'bàn tính', 'inh'], ['b96-phich', 'phích nước', 'ich'], ['b96-vinh', 'vịnh Hạ Long', 'inh'], ['b96-dien-kich', 'diễn kịch', 'ich']],
    },
    read: {
      title: 'Lịch bàn', img: 'b96-doc', text: 'Trên bàn học của Bích có cuốn lịch bàn. Đó là một cuốn lịch rất đẹp. Bìa lịch in hình vịnh Hạ Long. Cuốn lịch vừa giúp Bích biết năm tháng vừa trang trí cho bàn học của em. Cuốn lịch nhắc Bích chăm chỉ học hành, không để thì giờ lãng phí.',
      q: [['Bìa lịch in hình …', ['vịnh Hạ Long.', 'con mèo.']], ['Cuốn lịch nhắc Bích …', ['chăm chỉ học hành.', 'đi ngủ sớm.']]],
    },
    trace: ['inh', 'kính mắt', 'ich', 'lịch bàn'],
  }),
  L({
    n: 97, t: 'ai – ay', p: 10,
    intro: [['b97-ga-mai', 'gà mái'], ['b97-may-bay', 'máy bay']],
    spell: [['ai', ['a', 'i']], ['ay', ['a', 'y']], ['mái', ['m', 'ái'], 'mờ, ai, mai, sắc, mái', ['ai', 'ay']], ['bay', ['b', 'ay']]],
    sort: {
      keys: ['ai', 'ay'],
      items: [['b97-nai', 'con nai', 'ai'], ['b97-vay', 'váy đầm', 'ay'], ['b97-vai', 'chùm vải', 'ai'], ['b97-may-cay', 'máy cày', 'ay'], ['b97-chai', 'cái chai', 'ai'], ['b97-nhay-mua', 'nhảy múa', 'ay']],
    },
    read: {
      title: 'Chú gà quan trọng', img: 'b97-doc', text: 'Sáng sáng, gà trống gáy vang. Nghe tiếng gáy, ai cũng tỉnh giấc. Vì thế, gà trống cho là mình rất quan trọng. Chú ưỡn ngực, đi đi lại lại. Chú ra lệnh cho gà mái mơ: Cô dọn cái rác này đi! Tiếp đó, lại quay sang gà mái vàng: Chị đã cho bọn trẻ ăn chưa? Cứ thế, chú sai khiến, dạy dỗ tất cả.',
      q: [['Ý nào đúng?', ['Gà trống cho là mình rất quan trọng.', 'Lũ gà mái ưỡn ngực, đi đi lại lại.']], ['Ý nào đúng?', ['Gà trống sai khiến, dạy dỗ tất cả.', 'Lũ gà mái ưỡn ngực, đi đi lại lại.']]],
    },
    trace: ['ai', 'gà mái', 'ay', 'máy bay'],
  }),
  L({
    n: 98, t: 'Ong mật và ong bầu', p: 12,
    story: [
      ['b98-t1', 'Ong mật, ong bầu mang thùng mật đến nhờ ong vò vẽ làm gì?', 'Ong mật và ong bầu cùng nhận một thùng mật là của mình. Chúng mang thùng mật đến nhờ ong vò vẽ phân xử.'],
      ['b98-t2', 'Ong vò vẽ có biết thùng mật là của ai không?', 'Ong vò vẽ không biết thùng mật là của ai, bèn mời các bạn đến giúp.'],
      ['b98-t3', 'Bướm vàng nói gì trong cuộc phân xử?', 'Bướm vàng nói: Tôi thấy cả hai bạn đều bay qua đây, không biết ai làm ra mật.'],
      ['b98-t4', 'Kiến muốn nhờ ai phân xử giúp?', 'Kiến muốn nhờ bác gấu phân xử giúp, vì bác gấu rất thích mật.'],
      ['b98-t5', 'Ong mật đề nghị phân xử thế nào? Thái độ của ong bầu ra sao?', 'Ong mật đề nghị: Ai làm ra được mật ngọt thì thùng mật là của người đó. Ong bầu ấp úng, lảng đi.'],
      ['b98-t6', 'Vì sao ong vò vẽ kết luận thùng mật là của ong mật?', 'Ong mật chăm chỉ làm ra mật thơm ngon. Ong vò vẽ kết luận: Thùng mật là của ong mật.'],
    ],
    q: [['Vì sao thùng mật là của ong mật?', ['Vì ong mật làm ra được mật', 'Vì ong mật to nhất', 'Vì ong mật đến trước']]],
  }),
  L({
    n: 99, t: 'Ôn tập', p: 13, short: 'Ôn tập',
    read: {
      title: 'Chú gà quan trọng (2)', img: 'b99-doc', text: 'Một hôm, lũ gà mái trốn sạch. Gà trống không có ai để ra lệnh, rất buồn. Nhìn bác chó đang nghếch mõm, nằm dài trên sân tắm nắng, chú bèn lại gần, lay lay: Đi làm đi! Bác chó tức mình, tợp cho một cái. Gà trống sợ hết hồn, chạy mất. Từ đó, chú chả dám hạch sách ai nữa.',
      q: [['Bác chó làm gì gà trống?', ['Tợp cho một cái', 'Cho gà trống ăn', 'Rủ gà trống đi chơi']], ['Từ đó, gà trống …', ['chả dám hạch sách ai nữa.', 'càng ra lệnh nhiều hơn.']]],
    },
    choose: [SQ([['nghếch mõm', 'ngếch mõm']], 'Tìm chữ ng hay ngh')],
    trace: ['Bác chó', 'tắm nắng'],
  }),
  L({
    n: 100, t: 'oi – ây', p: 14,
    intro: [['b100-voi', 'con voi'], ['b100-cay-dua', 'cây dừa']],
    spell: [['oi', ['o', 'i']], ['ây', ['â', 'y']], ['voi', ['v', 'oi']], ['cây', ['c', 'ây']]],
    sort: {
      keys: ['oi', 'ây'],
      items: [['b100-nha-ngoi', 'nhà ngói', 'oi'], ['b100-cho-soi', 'chó sói', 'oi'], ['b100-cay-lua', 'cấy lúa', 'ây'], ['b100-may', 'đám mây', 'ây'], ['b100-coi', 'cái còi', 'oi'], ['b100-nhay-day', 'nhảy dây', 'ây']],
    },
    read: {
      title: 'Sói và dê', img: 'b100-doc', text: 'Dê con đang gặm cỏ, bỗng thấy sói ở ngay trước mặt. Dù rất sợ, dê vẫn bình tĩnh nói: Để bác ngon miệng, con hát tặng bác một bài nhé? Sói đồng ý. Dê con bèn lấy hết sức hét: Be… be… Ông chủ đang ở gần đó nghe thấy, liền vác gậy chạy lại, nện sói một trận nên thân.',
    },
    order: ['b100-x1', 'b100-x2', 'b100-x4', 'b100-x3'],
    trace: ['oi', 'con voi', 'ây', 'cây dừa'],
  }),
  L({
    n: 101, t: 'ôi – ơi', p: 16,
    intro: [['b101-oi', 'trái ổi'], ['b101-boi', 'bơi lội']],
    spell: [['ôi', ['ô', 'i']], ['ơi', ['ơ', 'i']], ['ổi', ['ổi'], 'ổi'], ['bơi', ['b', 'ơi']]],
    pick: [{ name: 'Ghép chữ với hình cho đúng', rounds: [['rối nước', 'b101-roi-nuoc'], ['đĩa xôi', 'b101-xoi'], ['cái chổi', 'b101-choi'], ['đồ chơi', 'b101-do-choi'], ['cái nồi', 'b101-noi'], ['phơi thóc', 'b101-phoi-thoc']] }],
    read: {
      title: 'Ong và bướm', img: 'b101-doc', text: 'Con bướm trắng. Lượn vườn hồng. Gặp con ong. Đang bay vội. Bướm liền gọi. Rủ đi chơi. Ong trả lời. Tôi còn bận. Mẹ tôi dặn. Việc chưa xong. Đi chơi rong. Mẹ không thích.',
      q: [['Vì sao ong không đi chơi cùng bướm?', ['Vì ong nghe lời mẹ, làm xong việc mới đi chơi.', 'Vì ong không thích chơi với bướm.']]],
    },
    trace: ['ôi', 'trái ổi', 'ơi', 'bơi lội'],
  }),
  L({
    n: 102, t: 'ui – ưi', p: 18,
    intro: [['b102-nui', 'ngọn núi'], ['b102-gui-thu', 'gửi thư']],
    spell: [['ui', ['u', 'i']], ['ưi', ['ư', 'i']], ['núi', ['n', 'úi'], 'nờ, ui, nui, sắc, núi', ['ui', 'ưi']], ['gửi', ['g', 'ửi'], 'gờ, ưi, gưi, hỏi, gửi', ['ưi', 'ui']]],
    sort: {
      keys: ['ui', 'ưi'],
      items: [['b102-cui', 'cúi', 'ui'], ['b102-ngui', 'ngửi', 'ưi'], ['b102-mui-cam', 'múi cam', 'ui'], ['b102-tui', 'túi xách', 'ui'], ['b102-chui', 'chui', 'ui'], ['b102-cui2', 'khung cửi', 'ưi']],
    },
    read: {
      title: 'Hạt nắng bé con', img: 'b102-doc', text: 'Mẹ Mặt Trời thả hạt nắng xuống đất chơi. Hạt nắng gặp bông hồng bị gãy cành đang sụt sùi khóc. Nó an ủi, rồi gửi tặng bông hồng chiếc khăn vàng óng. Nghe hạt mầm thì thầm, nó phả hơi ấm xuống đất. Thế là mầm cây đội đất nhô lên. Khi mẹ Mặt Trời gọi, hạt nắng bám cánh tay hồng của mẹ về bên kia núi.',
      q: [['Mẹ Mặt Trời …', ['thả hạt nắng xuống đất chơi.', 'được hạt nắng an ủi.', 'giúp hạt cây nảy mầm.']], ['Bông hồng …', ['được hạt nắng an ủi.', 'thả hạt nắng xuống đất chơi.', 'giúp hạt cây nảy mầm.']], ['Hạt nắng …', ['giúp hạt cây nảy mầm.', 'được hạt nắng an ủi.', 'thả hạt nắng xuống đất chơi.']]],
    },
    trace: ['ui', 'ngọn núi', 'ưi', 'gửi thư'],
  }),
  L({
    n: 103, t: 'uôi – ươi', p: 20,
    intro: [['b103-suoi', 'dòng suối'], ['b103-buoi', 'quả bưởi']],
    spell: [['uôi', ['uô', 'i'], 'u, ô, i, uôi'], ['ươi', ['ươ', 'i'], 'ư, ơ, i, ươi'], ['suối', ['s', 'uối'], 'sờ, uôi, suôi, sắc, suối', ['uôi', 'ươi']], ['bưởi', ['b', 'ưởi'], 'bờ, ươi, bươi, hỏi, bưởi', ['ươi', 'uôi']]],
    sort: {
      keys: ['uôi', 'ươi'],
      items: [['b103-chuoi', 'buồng chuối', 'uôi'], ['b103-muoi', 'con muỗi', 'uôi'], ['b103-tuoi-cuoi', 'tươi cười', 'ươi'], ['b103-dia-muoi', 'đĩa muối', 'uôi'], ['b103-cuoi-ngua', 'cưỡi ngựa', 'ươi'], ['b103-buong-luoi', 'buông lưới', 'ươi']],
    },
    read: {
      title: 'Cá và chim', text: 'Cá bơi dưới suối, thấy chim hót trên cây, bèn rủ: Này bạn chim ơi! Chim có biết bơi. Xuống đây mà chơi. Thích lắm! Thích lắm! Chim trả lời: Ôi bạn cá ơi! Chim không biết bơi. Chim có đôi cánh. Chim bay trên trời. Cá nói: Không lo chim ơi! Cá bơi dưới suối. Chim bay trên trời. Ta cùng đi chơi. Thích lắm! Thích lắm! Thế rồi hai bạn cùng đi chơi.',
      q: [['Cá …', ['bơi dưới suối.', 'bay trên trời.', 'cùng đi chơi.']], ['Chim …', ['bay trên trời.', 'bơi dưới suối.', 'cùng đi chơi.']], ['Cá và chim …', ['cùng đi chơi.', 'bơi dưới suối.', 'bay trên trời.']]],
    },
    trace: ['uôi', 'dòng suối', 'ươi', 'quả bưởi'],
  }),
  L({
    n: 104, t: 'Thổi bóng', p: 22,
    story: [
      ['b104-t1', 'Giờ ra chơi, báo con làm gì?', 'Giờ ra chơi, báo con rủ các bạn thi chạy, thi leo cây, thi vật tay.'],
      ['b104-t2', 'Trong cuộc thi chạy, báo thắng hay thua? Thái độ của báo thế nào?', 'Báo chạy nhanh nhất, thắng cuộc. Báo vênh mặt, chê các bạn chạy chậm.'],
      ['b104-t3', 'Trong cuộc thi leo cây, ai thắng? Thái độ của báo thế nào?', 'Thi leo cây, khỉ thắng. Báo tức lắm, mặt đỏ bừng.'],
      ['b104-t4', 'Trong cuộc thi vật tay, ai thắng? Thái độ của báo thế nào?', 'Thi vật tay, gấu thắng. Báo cáu kỉnh, bỏ đi.'],
      ['b104-t5', 'Thấy vẻ mặt của báo, thầy hổ nhờ nó làm gì? Báo làm việc đó thế nào?', 'Thầy hổ nhờ báo thổi bóng bay. Báo thổi mãi, quả nào cũng nổ bụp vì báo thổi quá mạnh.'],
      ['b104-t6', 'Thầy giáo khuyên báo điều gì? Báo nói thế nào?', 'Thầy khuyên: Mỗi bạn giỏi một việc. Không nên kiêu căng. Báo hiểu ra, xin lỗi các bạn.'],
    ],
    q: [['Thầy hổ khuyên báo điều gì?', ['Mỗi bạn giỏi một việc, không nên kiêu căng', 'Phải thổi bóng thật mạnh', 'Phải thắng mọi cuộc thi']]],
  }),
  L({
    n: 105, t: 'Ôn tập', p: 23, short: 'Ôn tập',
    read: {
      title: 'Gà và vịt', img: 'b105-doc', text: 'Mờ sáng, vịt đã đến gọi gà: Dậy tập bơi đi, gà ơi! Có tiếng gà: Tớ đi vắng rồi. Vịt nói: Tớ định tập bơi xong sẽ đi kiếm giun. Gà vội ra khỏi chuồng: Cho tớ đi kiếm giun với! Đợi tớ tập bơi xong đã nhé! Thế là, chỉ vì lười mà tới nay gà vẫn không biết bơi.',
      q: [['Vịt rủ gà tập bơi, gà nói:', ['Tớ đi vắng rồi.', 'Tớ bị mệt.']], ['Vì sao đến nay gà vẫn không biết bơi?', ['Vì gà lười', 'Vì gà sợ nước']]],
    },
    trace: ['Gà lười', 'không biết bơi'],
  }),
  L({
    n: 106, t: 'ao – eo', p: 24,
    intro: [['b106-sao', 'ngôi sao'], ['b106-meo', 'con mèo']],
    spell: [['ao', ['a', 'o']], ['eo', ['e', 'o']], ['sao', ['s', 'ao']], ['mèo', ['m', 'èo'], 'mờ, eo, meo, huyền, mèo', ['eo', 'ao']]],
    sort: {
      keys: ['ao', 'eo'],
      items: [['b106-keo', 'cái kéo', 'eo'], ['b106-gao', 'gạo', 'ao'], ['b106-banh-deo', 'bánh dẻo', 'eo'], ['b106-tao', 'quả táo', 'ao'], ['b106-mu', 'mũ tai bèo', 'eo'], ['b106-dao', 'con dao', 'ao']],
    },
    read: {
      title: 'Mèo dạy hổ', img: 'b106-doc', text: 'Biết mèo săn giỏi, hổ đến xin học. Mèo giao hẹn: Ta sẽ dạy. Nhưng anh không được bắt lũ thú nhỏ. Hổ đồng ý. Nhưng vừa học được cách vồ mồi, nó đã săn thỏ. Thế là mèo không dạy hổ nữa. Hổ nghĩ tài nó đã cao. Tối đó, nó chờ mèo đi qua, lao ra vồ. Mèo leo tót lên cây, bảo: Mẻo mèo meo! Ta có võ trèo, ta chưa dạy hổ.',
      q: [['Mèo không dạy hổ nữa vì …', ['hổ không giữ lời hứa.', 'tài hổ đã cao.']]],
    },
    trace: ['ao', 'ngôi sao', 'eo', 'con mèo'],
  }),
  L({
    n: 107, t: 'au – âu', p: 26,
    intro: [['b107-cau', 'cây cau'], ['b107-sau', 'chim sâu']],
    spell: [['au', ['a', 'u']], ['âu', ['â', 'u']], ['cau', ['c', 'au']], ['sâu', ['s', 'âu']]],
    sort: {
      keys: ['au', 'âu'],
      items: [['b107-tau', 'con tàu', 'au'], ['b107-bo-cau', 'bồ câu', 'âu'], ['b107-trau', 'con trâu', 'âu'], ['b107-rau', 'rau cải', 'au'], ['b107-cau2', 'cây cầu', 'âu'], ['b107-lau', 'bông lau', 'au']],
    },
    read: {
      title: 'Sáu củ cà rốt', img: 'b107-doc', text: 'Mẹ sai thỏ nâu ra vườn nhổ cà rốt. Mẹ bảo: Nhổ sáu củ, con nhé! Củ cà rốt nằm sâu dưới đất, nhưng nhổ không khó. Hấp! Hấp! Một lát sau, thỏ nâu đã nhổ được cả ôm. Nó chạy vào bếp đưa cho mẹ. Không ngờ, thỏ mẹ la lên. Thì ra thỏ nâu nhổ lắm quá. Nó gãi đầu: Hì! Con chưa biết đếm mà.',
      q: [['Ý nào đúng?', ['Thỏ nâu nhổ một ôm cà rốt.', 'Thỏ nâu chỉ nhổ sáu củ cà rốt.']], ['Ý nào đúng?', ['Thỏ nâu chưa biết đếm.', 'Thỏ nâu chỉ nhổ sáu củ cà rốt.']]],
    },
    trace: ['au', 'cây cau', 'âu', 'chim sâu'],
  }),
  L({
    n: 108, t: 'êu – iu', p: 28,
    intro: [['b108-seu', 'con sếu'], ['b108-riu', 'cái rìu']],
    spell: [['êu', ['ê', 'u']], ['iu', ['i', 'u']], ['sếu', ['s', 'ếu'], 'sờ, êu, sêu, sắc, sếu', ['êu', 'iu']], ['rìu', ['r', 'ìu'], 'rờ, iu, riu, huyền, rìu', ['iu', 'êu']]],
    pick: [{ name: 'Ghép chữ với hình cho đúng', rounds: [['lều vải', 'b108-leu'], ['địu con', 'b108-diu'], ['trĩu quả', 'b108-triu'], ['bé xíu', 'b108-xiu'], ['cái phễu', 'b108-pheu']] }],
    read: {
      title: 'Ba lưỡi rìu', img: 'b108-doc', text: 'Ngày xưa, ở làng kia có một chàng đốn củi nghèo. Tài sản của anh chỉ có chiếc rìu sắt. Một hôm, anh vào rừng đốn củi. Chẳng may, lưỡi rìu văng xuống sông. Buồn quá, anh ngồi khóc. Bỗng có một ông lão đến, hỏi: Vì sao con khóc? Anh mếu máo trả lời. Ông lão bèn lặn xuống sông, mang lên một lưỡi rìu bạc.',
      q: [['Chàng đốn củi chỉ có …', ['chiếc rìu sắt.', 'chiếc rìu vàng.']], ['Một hôm, chàng đi đốn củi, chẳng may …', ['lưỡi rìu văng xuống sông.', 'bị lạc đường.']]],
    },
    trace: ['êu', 'con sếu', 'iu', 'cái rìu'],
  }),
  L({
    n: 109, t: 'iêu – yêu', p: 30,
    intro: [['b109-thieu', 'vải thiều'], ['b109-yeu', 'đáng yêu']],
    spell: [['iêu', ['iê', 'u'], 'i, ê, u, iêu'], ['thiều', ['th', 'iều'], 'thờ, iêu, thiêu, huyền, thiều', ['iêu', 'yêu']], ['yêu', ['yêu'], 'yêu']],
    sort: {
      keys: ['iêu', 'yêu'],
      items: [['b109-nieu', 'niêu cơm', 'iêu'], ['b109-dieu', 'diều sáo', 'iêu'], ['b109-yeu-quy', 'yêu quý', 'yêu'], ['b109-chuoi', 'chuối tiêu', 'iêu'], ['b109-yeu-dieu', 'yểu điệu', 'yêu'], ['b109-chieu', 'cái chiếu', 'iêu']],
    },
    read: {
      title: 'Ba lưỡi rìu (2)', text: 'Chàng tiều phu không nhận lưỡi rìu bạc là của mình. Ông lão lại lặn xuống sông, mang lên một lưỡi rìu vàng. Anh vẫn lắc đầu. Cuối cùng, ông lão mang lên một lưỡi rìu sắt. Anh reo lên, nhận đó là chiếc rìu yêu quý của mình. Ông lão nói: Ta là Bụt. Con túng thiếu mà không tham. Ta thưởng cho con lưỡi rìu vàng và bạc này.',
    },
    order: ['b109-x1', 'b109-x2', 'b109-x3', 'b109-x4', 'b109-x5'],
    trace: ['iêu', 'vải thiều', 'yêu', 'đáng yêu'],
  }),
  L({
    n: 110, t: 'Mèo con bị lạc', p: 32,
    story: [
      ['b110-t1', 'Thấy mèo con bị lạc, chị thỏ đã làm gì?', 'Mèo con đi chơi xa, bị lạc đường, ngồi khóc. Chị thỏ thấy vậy, liền đến hỏi han.'],
      ['b110-t2', 'Chị thỏ định cho mèo ăn gì? Mèo bảo sao? Thỏ đã làm gì?', 'Chị thỏ mời mèo ăn cà rốt. Mèo bảo: Em không ăn cà rốt. Thỏ bèn dẫn mèo đi tìm bạn giúp.'],
      ['b110-t3', 'Cô sóc mời mèo con ăn gì? Mèo con nói gì?', 'Cô sóc mời mèo ăn hạt dẻ. Mèo con lắc đầu: Em không ăn hạt dẻ. Em chỉ muốn về nhà.'],
      ['b110-t4', 'Chú nhím nói gì với mèo? Nghe chú nói, mèo thế nào?', 'Chú nhím nói: Đừng lo, chúng ta sẽ đưa cháu về. Mèo con nghe vậy, đỡ sợ.'],
      ['b110-t5', 'Bác cú đã làm gì để giúp mèo con trở về nhà?', 'Bác cú bay lên cao, nhìn xa, tìm ra nhà mèo, rồi dẫn đường cho mọi người.'],
      ['b110-t6', 'Câu chuyện kết thúc ra sao?', 'Mèo con về đến nhà, nằm cuộn tròn trên tấm thảm ấm áp, ngủ ngon lành.'],
    ],
    q: [['Ai đã tìm ra nhà mèo con?', ['Bác cú', 'Chị thỏ', 'Cô sóc']]],
  }),
  L({
    n: 111, t: 'Ôn tập', p: 33, short: 'Ôn tập',
    read: {
      title: 'Điều ước', img: 'b111-doc', text: 'Có bác đánh cá nghèo câu được con cá bé xíu. Cá van xin: Tôi là cá thần. Bác thả tôi ra, tôi sẽ tặng bác một điều ước. Bác liền thả cá. Cá nói: Cảm ơn bác. Bác ước gì nào? Bác đánh cá nói: Tôi ước muốn gì được nấy. Cá trả lời: Bác tham quá nên sẽ chẳng được gì đâu. Thế là bác đánh cá vẫn nghèo như xưa.',
      q: [['Em thích ý kiến nào?', ['Tham quá sẽ chẳng được gì.', 'Tôi ước muốn gì được nấy.']]],
    },
    choose: [{ name: 'Tìm vần am hay ăng', q: [['Chọn chữ đúng: Người nào th… lam', ['tham', 'thăng']], ['Chọn chữ đúng: … sẽ ch… được gì', ['chẳng', 'chảm']]] }],
    trace: ['tham lam'],
  }),
  L({
    n: 112, t: 'ưu – ươu', p: 34,
    intro: [['b112-cuu', 'con cừu'], ['b112-huou', 'hươu sao']],
    spell: [['ưu', ['ư', 'u']], ['ươu', ['ươ', 'u'], 'ư, ơ, u, ươu'], ['cừu', ['c', 'ừu'], 'cờ, ưu, cưu, huyền, cừu', ['ưu', 'ươu']], ['hươu', ['h', 'ươu']]],
    sort: {
      name: 'Sút bóng vào hai khung thành cho trúng', keys: ['ưu', 'ươu'],
      items: [['b112-luu', 'quả lựu', 'ưu'], ['b112-khuou', 'chim khướu', 'ươu'], ['b112-oc', 'ốc bươu', 'ươu'], ['b112-ngai', 'ngải cứu', 'ưu'], ['b112-buu-dien', 'bưu điện', 'ưu']],
    },
    read: {
      title: 'Hươu, cừu, khướu và sói', img: 'b112-doc', text: 'Hươu ra suối chơi. Sói mò tới. Cừu thấy vậy, be to: Có sói! Nghe tiếng cừu, hươu co giò chạy. Sói thấy vậy, lao tới vồ cừu. Cừu kêu: Cứu tôi với! Khướu đậu trên ngọn cây, thấy thế, la to: Hổ tới kìa! Sói sợ hổ, bỏ cừu, chạy mất. Hươu, cừu, khướu từ đó thân nhau.',
      q: [['Cừu …', ['kêu to để cứu hươu.', 'làm sói sợ, bỏ cừu, chạy mất.', 'từ đó thân nhau.']], ['Khướu …', ['làm sói sợ, bỏ cừu, chạy mất.', 'kêu to để cứu hươu.', 'từ đó thân nhau.']], ['Ba bạn …', ['từ đó thân nhau.', 'kêu to để cứu hươu.', 'làm sói sợ, bỏ cừu, chạy mất.']]],
    },
    trace: ['ưu', 'con cừu', 'ươu', 'hươu sao'],
  }),
  L({
    n: 113, t: 'oa – oe', p: 36,
    intro: [['b113-loa', 'cái loa'], ['b113-choe', 'chích choè']],
    spell: [['oa', ['o', 'a']], ['oe', ['o', 'e']], ['loa', ['l', 'oa']], ['choè', ['ch', 'oè'], 'chờ, oe, choe, huyền, choè', ['oe', 'oa']]],
    sort: {
      keys: ['oa', 'oe'],
      items: [['b113-sen', 'hoa sen', 'oa'], ['b113-xoe', 'tròn xoe', 'oe'], ['b113-khoa', 'chìa khoá', 'oa'], ['b113-loe', 'loé sáng', 'oe'], ['b113-tau-hoa', 'tàu hoả', 'oa']],
    },
    read: {
      title: 'Hoa loa kèn', img: 'b113-doc', text: 'Trong vườn, muôn hoa khoe sắc. Cúc đại đoá xoè những ngón tay mập, khoẻ đón nắng mai. Hoa hồng chê: Thô quá! Loa kèn nghe vậy rất buồn. Nó nép sát bờ rào. Lúc ấy, bác làm vườn tới. Đến bên loa kèn, thấy nó vẫn ngậm nụ, bác thì thầm: Dậy đi nào! Loa kèn bật nở. Những đoá hoa như những chiếc loa xinh xắn bắt đầu toả hương.',
      q: [['Ý nào đúng?', ['Nhờ bác làm vườn khích lệ, loa kèn bật nở.', 'Loa kèn không muốn nở vì sợ cúc chê nó thô.']]],
    },
    trace: ['oa', 'cái loa', 'oe', 'chích choè'],
  }),
  L({
    n: 114, t: 'uê – uơ', p: 38,
    intro: [['b114-hue', 'hoa huệ'], ['b114-huo-voi', 'huơ vòi']],
    spell: [['uê', ['u', 'ê']], ['uơ', ['u', 'ơ']], ['huệ', ['h', 'uệ'], 'hờ, uê, huê, nặng, huệ', ['uê', 'uơ']], ['huơ', ['h', 'uơ']]],
    sort: {
      name: 'Xếp hoa vào hai nhóm', keys: ['uê', 'uơ'],
      items: [['b114-vantue', 'vạn tuế', 'uê', 'cây vạn tuế'], ['b114-huo-tay', 'huơ tay', 'uơ'], ['b114-hue2', 'Huế', 'uê'], [null, 'thuở bé', 'uơ'], [null, 'xum xuê', 'uê'], [null, 'thuê', 'uê']],
    },
    read: {
      title: 'Lợn rừng và voi', img: 'b114-doc', text: 'Lợn rừng lang thang trong rừng cây xum xuê. Gặp voi vừa đi vừa huơ vòi, nó nghĩ: Voi to nhưng ngờ nghệch lắm. Thế là nó nhằm voi xông tới. Nào ngờ, voi huơ vòi nhấc bổng lợn lên, ném xuống vệ đường. Lợn sợ quá, chạy về mách mẹ. Mẹ nó hết hồn: Đời thuở nào lợn thắng được voi! Con chớ tự kiêu mà hại thân!',
      q: [['Lợn rừng con nghĩ là …', ['mình thắng được voi.', 'chớ tự kiêu mà hại thân.']], ['Lợn rừng mẹ bảo con …', ['chớ tự kiêu mà hại thân.', 'mình thắng được voi.']]],
    },
    trace: ['uê', 'hoa huệ', 'uơ', 'huơ vòi'],
  }),
  L({
    n: 115, t: 'uy – uya', p: 40,
    intro: [['b115-tau-thuy', 'tàu thuỷ'], ['b115-khuya', 'đêm khuya']],
    spell: [['uy', ['u', 'y']], ['uya', ['uy', 'a'], 'u, y, a, uya'], ['thuỷ', ['th', 'uỷ'], 'thờ, uy, thuy, hỏi, thuỷ', ['uy', 'uya']], ['khuya', ['kh', 'uya']]],
    sort: {
      keys: ['uy', 'uya'],
      items: [['b115-khuy', 'khuy áo', 'uy'], ['b115-tuya', 'phéc mơ tuya', 'uya'], ['b115-ruy-bang', 'ruy băng', 'uy'], ['b115-huy-hieu', 'huy hiệu', 'uy'], ['b115-luy-tre', 'luỹ tre', 'uy']],
    },
    read: {
      title: 'Vườn hoa đẹp', img: 'b115-doc', text: 'Vườn nhà Thuỷ trồng rất nhiều hoa. Hoa cúc thuý đủ màu sắc. Hoa tuy líp đỏ mọng. Hoa giấy cánh mỏng như tờ pơ luya. Hoa thuỷ tiên cánh trắng, nhuỵ vàng. Hoa dạ hương càng về khuya càng thơm. Hoa bách nhật chỉ bằng cái khuy áo, tươi lâu ơi là lâu. Mùa nào vườn cũng rực rỡ, ngát hương.',
    },
    pick: [{ name: 'Tìm loài hoa', rounds: [['Hoa cúc thuý đủ màu sắc', 'b115-h1'], ['Hoa tuy líp đỏ mọng', 'b115-h2'], ['Hoa giấy cánh mỏng', 'b115-h3'], ['Hoa thuỷ tiên cánh trắng, nhuỵ vàng', 'b115-h4'], ['Hoa bách nhật bằng cái khuy áo', 'b115-h6']] }],
    trace: ['uy', 'tàu thuỷ', 'uya', 'đêm khuya'],
  }),
  L({
    n: 116, t: 'Cây khế', p: 42,
    story: [
      ['b116-t1', 'Hai anh em nhà kia tính tình khác nhau thế nào?', 'Ngày xưa có hai anh em. Người em chăm chỉ, hiền lành. Người anh lười biếng, tham lam.'],
      ['b116-t2', 'Khi cho em ra ở riêng, người anh chia gì cho em?', 'Khi chia gia tài, người anh lấy hết nhà cửa, ruộng vườn. Người em chỉ được một cây khế.'],
      ['b116-t3', 'Chim phượng hoàng bay đến cây khế để làm gì? Nó hứa gì?', 'Một hôm, chim phượng hoàng đến ăn khế. Nó hứa: Ăn một quả, trả cục vàng. May túi ba gang, mang đi mà đựng.'],
      ['b116-t4', 'Người em theo chim đi đâu và lấy được gì?', 'Người em may túi ba gang, theo chim ra đảo xa, lấy vàng vừa đủ túi rồi về. Từ đó, người em trở nên giàu có.'],
      ['b116-t5', 'Khi thấy em trở nên giàu có, người anh đã làm gì?', 'Người anh biết chuyện, liền đòi đổi cả gia tài lấy cây khế.'],
      ['b116-t6', 'Vì sao người anh rơi xuống biển?', 'Người anh tham lam, may túi to, lấy thật nhiều vàng. Chim nặng quá, chao cánh. Người anh rơi xuống biển.'],
    ],
    q: [['Vì sao người anh rơi xuống biển?', ['Vì người anh tham lam, lấy quá nhiều vàng', 'Vì chim bay quá cao', 'Vì trời có bão']]],
  }),
  L({
    n: 117, t: 'Ôn tập', p: 43, short: 'Ôn tập',
    read: {
      title: 'Bài học cho gà trống', img: 'b117-doc', text: 'Hoạ mi, khướu, chích choè tập bay từ sáng đến khuya để tham gia hội khoẻ. Còn gà trống chỉ rong chơi, chẳng tập gì. Ngày hội đến. Các bạn chim đều bay vút lên ngọn cây cao. Riêng gà trống, tuy cố xoè cánh, cũng chỉ bay lên được ngang đống rơm, rồi rơi bịch xuống. Từ thuở đó đến giờ, gà trống vẫn đỏ mặt vì ngượng.',
    },
    choose: [{ name: 'Chọn dấu chấm hay dấu chấm hỏi', q: [['Câu nào viết đúng?', ['Vì sao gà trống thua?', 'Vì sao gà trống thua.']], ['Câu nào viết đúng?', ['Đến bây giờ, gà trống vẫn đỏ mặt.', 'Đến bây giờ, gà trống vẫn đỏ mặt?']]] }],
    trace: ['Hoạ mi', 'tập bay'],
  }),
  L({
    n: 118, t: 'oam – oăm', p: 44,
    intro: [['b118-ngoam', 'ngoạm'], ['b118-khoam', 'mỏ khoằm']],
    spell: [['oam', ['o', 'a', 'm'], 'o, a, mờ, oam'], ['oăm', ['o', 'ă', 'm'], 'o, ă, mờ, oăm'], ['ngoạm', ['ng', 'oạm'], 'ngờ, oam, ngoam, nặng, ngoạm', ['oam', 'oăm']], ['khoằm', ['kh', 'oằm'], 'khờ, oăm, khoăm, huyền, khoằm', ['oăm', 'oam']]],
    pick: [{ name: 'Tiếng nào có vần oam? Tiếng nào có vần oăm?', rounds: [['Dê nhai lá nhồm nhoàm.', 'b118-de'], ['Giếng nước sâu hoắm.', 'b118-gieng'], ['Khỉ ngoạm dưa hấu.', 'b118-khi']] }],
    read: {
      title: 'Mưu chú thỏ', img: 'b118-doc', text: 'Ở khu rừng nọ, mỗi ngày một con thú phải nộp mạng cho hổ. Đến lượt thỏ, nó buồn bã đi lang thang. Thấy bóng mình dưới giếng, thỏ nghĩ ra một kế. Nó đến gặp hổ, nói: Có một ông hổ khác đòi ăn thịt con. Hổ theo thỏ ra giếng. Thấy bóng mình dưới lòng giếng sâu hoắm, hổ gầm: Oàm… Tiếng gầm dưới giếng vọng lên, hổ lao xuống. Thế là hết đời hổ ác.',
      q: [['Vì sao hổ tự lao đầu xuống giếng?', ['Vì nó tưởng dưới giếng có con hổ khác.', 'Vì dưới giếng có con hổ khác.']]],
    },
    trace: ['oam', 'ngoạm', 'oăm', 'mỏ khoằm'],
  }),
  L({
    n: 119, t: 'oan – oat', p: 46,
    intro: [['b119-khoan', 'máy khoan'], ['b119-thoat', 'trốn thoát']],
    spell: [['oan', ['o', 'a', 'n'], 'o, a, nờ, oan'], ['oat', ['o', 'a', 't'], 'o, a, tờ, oát'], ['khoan', ['kh', 'oan']], ['thoát', ['th', 'oát'], 'thờ, oát, thoát', ['oat', 'oan']]],
    sort: {
      keys: ['oan', 'oat'],
      items: [['b119-phim', 'phim hoạt hình', 'oat'], ['b119-oan', 'đĩa oản', 'oan'], ['b119-xoan', 'hoa xoan', 'oan'], ['b119-soat', 'soát vé', 'oat'], ['b119-doat', 'đoạt giải', 'oat'], ['b119-doan', 'đoàn quân nhạc', 'oan']],
    },
    read: {
      title: 'Đeo chuông cổ mèo', img: 'b119-doc', text: 'Một bầy chuột bàn cách thoát khỏi vuốt mèo. Bàn mãi, chẳng nghĩ được kế gì. Chợt chuột nhắt nói: Chỉ cần đeo chuông lên cổ mèo. Mèo đi thì chuông kêu, ta sẽ kịp thoát. Bầy chuột gật gù. Nhưng không con nào dám nhận việc này. Có con chuột già khôn ngoan bảo: Chuột nhắt à! Nếu cậu đeo được chuông lên cổ mèo thì kế của cậu rất hay.',
      q: [['Vì sao kế của chuột nhắt không thực hiện được?', ['Vì chuột đến gần sẽ bị mèo vồ.', 'Vì chuột đến gần, mèo sẽ chạy.']]],
    },
    trace: ['oan', 'máy khoan', 'oat', 'trốn thoát'],
  }),
  L({
    n: 120, t: 'oăn – oăt', p: 48,
    intro: [['b120-xoan', 'tóc xoăn'], ['b120-ngoat', 'chỗ ngoặt']],
    spell: [['oăn', ['o', 'ă', 'n'], 'o, ă, nờ, oăn'], ['oăt', ['o', 'ă', 't'], 'o, ă, tờ, oắt'], ['xoăn', ['x', 'oăn']], ['ngoặt', ['ng', 'oặt'], 'ngờ, oắt, ngoắt, nặng, ngoặt', ['oăt', 'oăn']]],
    pick: [{ name: 'Tìm từ ngữ ứng với hình', rounds: [['khuya khoắt', 'b120-khuya'], ['ngoắt đuôi', 'b120-meo'], ['oẳn tù tì', 'b120-oan-tu-ti'], ['đi thoăn thoắt', 'b120-thoan-thoat'], ['dây xoắn', 'b120-day-xoan']] }],
    read: {
      title: 'Cải xanh và chim sâu', img: 'b120-doc', text: 'Sáng sớm, chim sâu bay đến vườn cải. Cải xanh làu bàu: Để em ngủ. Chim sâu buồn bã bay đi. Nào ngờ, lũ sâu rủ nhau đến cắn cải xanh. Cải oằn mình chống đỡ. Lá cải ngoắt phải, ngoặt trái nhưng không đuổi được sâu. Cải rũ xuống, mềm oặt. Chim sâu vội bay đến, thoăn thoắt bắt sâu. Cải không đau nữa. Từ đó, cải và chim sâu thành bạn thân.',
      q: [['Lũ sâu …', ['rủ nhau đến cắn cải xanh.', 'bay đến cứu cải xanh.']], ['Từ đó, cải xanh và chim sâu …', ['thành bạn thân.', 'không chơi với nhau.']]],
    },
    trace: ['oăn', 'tóc xoăn', 'oăt', 'chỗ ngoặt'],
  }),
  L({
    n: 121, t: 'uân – uât', p: 50,
    intro: [['b121-huan', 'huân chương'], ['b121-xuat', 'sản xuất']],
    spell: [['uân', ['u', 'â', 'n'], 'u, â, nờ, uân'], ['uât', ['u', 'â', 't'], 'u, â, tờ, uất'], ['huân', ['h', 'uân']], ['xuất', ['x', 'uất'], 'xờ, uất, xuất', ['uât', 'uân']]],
    sort: {
      name: 'Giúp thỏ đem cà rốt về hai nhà kho', keys: ['uân', 'uât'],
      items: [['b121-mua-xuan', 'mùa xuân', 'uân'], ['b121-ao-thuat', 'ảo thuật', 'uât'], ['b121-tuan-tra', 'tuần tra', 'uân'], ['b121-khuan-vac', 'khuân vác', 'uân'], ['b121-mi-thuat', 'mĩ thuật', 'uât']],
    },
    read: {
      title: 'Cáo và gà', img: 'b121-doc', text: 'Gà đang đi dạo trên đồng thì gặp cáo. Cáo ngọt ngào: Bạn đi chơi xuân à? Ôi, bạn thật tuấn tú! Tôi ôm bạn nhé! Gà mải nghe nịnh, cáo lao tới ngoạm gà. Mấy bác nông dân nhìn thấy, lao ra đuổi cáo. Gà bảo cáo: Anh nói hai ta là bạn thì họ sẽ không đuổi nữa. Cáo vừa mở miệng, gà đã bay tót lên cây. Cáo uất quá nhưng không làm gì được.',
      q: [['Gà làm cách nào để thoát thân?', ['Lừa cáo mở miệng, bay đi.', 'Gọi người đuổi đánh cáo.']]],
    },
    trace: ['uân', 'huân chương', 'uât', 'sản xuất'],
  }),
  L({
    n: 122, t: 'Hoa tặng bà', p: 52,
    story: [
      ['b122-t1', 'Đi học về, voi con xin phép mẹ đi đâu?', 'Đi học về, voi con xin phép mẹ đi thăm bà đang nằm viện.'],
      ['b122-t2', 'Trên đường đi, voi con giúp bác dê làm gì?', 'Trên đường đi, voi con gặp bác dê mang nặng. Voi con giúp bác mang đồ về nhà.'],
      ['b122-t3', 'Voi con giúp cún con làm gì?', 'Cún con đánh rơi xô xuống giếng. Voi con dùng vòi lấy chiếc xô lên giúp cún.'],
      ['b122-t4', 'Cún con cảm ơn voi thế nào?', 'Cún con cảm ơn voi, tặng voi một bó hoa thật đẹp.'],
      ['b122-t5', 'Voi bà hỏi gì khi nhận bó hoa voi con tặng?', 'Voi con mang bó hoa tặng bà. Bà hỏi: Hoa đẹp quá! Cháu lấy ở đâu thế?'],
      ['b122-t6', 'Nghe voi con kể, voi bà khen cháu thế nào?', 'Nghe voi con kể lại, bà khen: Cháu bà ngoan quá, biết giúp đỡ mọi người.'],
    ],
    q: [['Ai tặng voi con bó hoa?', ['Cún con', 'Bác dê', 'Voi bà']], ['Bà khen voi con thế nào?', ['Ngoan, biết giúp đỡ mọi người', 'Chạy rất nhanh']]],
  }),
  L({
    n: 123, t: 'Ôn tập', p: 53, short: 'Ôn tập',
    read: {
      title: 'Vườn thú', img: 'b123-doc', text: 'Lớp bé Xuân đi thăm vườn thú. Về nhà, bé kể với bà: Con hổ ăn tham lắm. Nó ngoạm cả tảng thịt bò. Con voi thì lấy đuôi quất lên lưng. Chắc nó mỏi lưng, bà nhỉ? Lũ chích choè cứ nhảy thoăn thoắt. Con vẹt có cái mỏ khoằm. Còn con công trắng, toàn thân trắng toát. Nghĩ một lúc, bé nói: Bà mà ngoan thì cô giáo cháu sẽ đưa bà đi thăm vườn thú.',
      q: [['Con nào rất tham ăn?', ['Con hổ', 'Con vẹt', 'Con công']], ['Con nào có cái mỏ khoằm?', ['Con vẹt', 'Con voi', 'Con hổ']], ['Con nào toàn thân trắng toát?', ['Con công trắng', 'Chích choè', 'Con voi']]],
    },
    choose: [SQ([['khoằm', 'khoằn'], ['thoăn thoắt', 'thoăm thoắt']], 'Tìm vần oăn hay oăm')],
    trace: ['mỏ khoằm', 'thoăn thoắt'],
  }),
  L({
    n: 124, t: 'oen – oet', p: 54,
    intro: [['b124-nhoen', 'nhoẻn cười'], ['b124-khoet', 'khoét tổ']],
    spell: [['oen', ['o', 'e', 'n'], 'o, e, nờ, oen'], ['oet', ['o', 'e', 't'], 'o, e, tờ, oét'], ['nhoẻn', ['nh', 'oẻn'], 'nhờ, oen, nhoen, hỏi, nhoẻn', ['oen', 'oet']], ['khoét', ['kh', 'oét'], 'khờ, oét, khoét', ['oet', 'oen']]],
    sort: { keys: ['oen', 'oet'], items: [['b124-xoen', 'cưa xoèn xoẹt', 'oen'], ['b124-choen', 'hố nông choèn', 'oen'], ['b124-loe-loet', 'mặc loè loẹt', 'oet']] },
    choose: [{ name: 'Ghép đúng', q: [['Màu sơn …', ['đỏ choét.', 'hoen gỉ.', 'xám ngoét.']], ['Thanh sắt …', ['hoen gỉ.', 'đỏ choét.', 'xám ngoét.']], ['Bầu trời …', ['xám ngoét.', 'hoen gỉ.', 'đỏ choét.']]] }],
    read: {
      title: 'Chú hề', img: 'b124-doc', text: 'Môi đỏ choen choét. Mũi là quả cà chua. Áo quần loè loẹt. Đóng vai vui đùa. Mỗi lần nhìn bé. Chú nhoẻn miệng cười. Nụ cười thân thiện. Sáng bừng trên môi. Bé đi xem xiếc. Biết bao trò vui. Về nhà chỉ nhớ. Chú làm hề thôi.',
      q: [['Môi chú hề …', ['đỏ choen choét.', 'loè loẹt.']], ['Áo quần chú hề …', ['loè loẹt.', 'đỏ choen choét.']]],
    },
    trace: ['oen', 'nhoẻn cười', 'oet', 'khoét tổ'],
  }),
  L({
    n: 125, t: 'uyên – uyêt', p: 56,
    intro: [['b125-khuyen', 'chim vành khuyên'], ['b125-duyet', 'duyệt binh']],
    spell: [['uyên', ['u', 'yê', 'n'], 'u, y, ê, nờ, uyên'], ['uyêt', ['u', 'yê', 't'], 'u, y, ê, tờ, uyết'], ['khuyên', ['kh', 'uyên']], ['duyệt', ['d', 'uyệt'], 'dờ, uyết, duyết, nặng, duyệt', ['uyêt', 'uyên']]],
    pick: [{ name: 'Ghép chữ với hình cho đúng', rounds: [['trượt tuyết', 'b125-truot'], ['trăng khuyết', 'b125-trang'], ['truyện cổ', 'b125-truyen'], ['đàn nguyệt', 'b125-dan'], ['thuyền buồm', 'b125-thuyen'], ['bóng chuyền', 'b125-bong']] }],
    read: {
      title: 'Vầng trăng khuyết', img: 'b125-doc', text: 'Có chiếc thuyền lần đầu ra biển. Nó luôn miệng reo: Tuyệt quá! Buổi sớm, Mặt Trời nhô lên, nhuộm hồng mặt biển. Về đêm, biển càng huyền ảo. Mảnh trăng cong như lưỡi liềm giữa bầu trời sao. Thuyền không hiểu con gì gặm, làm trăng khuyết. Bác tàu thuỷ bảo: Trăng đi xa rồi nên cháu chỉ thấy được một phần. Nửa tháng nữa, trăng quay về, cháu sẽ lại thấy trăng tròn.',
      q: [['Chiếc thuyền …', ['lần đầu ra biển.', 'cong như lưỡi liềm.']], ['Mảnh trăng …', ['cong như lưỡi liềm.', 'lần đầu ra biển.']]],
    },
    trace: ['uyên', 'khuyên', 'uyêt', 'duyệt binh'],
  }),
  L({
    n: 126, t: 'uyn – uyt', p: 58,
    intro: [['b126-tuyn', 'màn tuyn'], ['b126-buyt', 'xe buýt']],
    spell: [['uyn', ['u', 'y', 'n'], 'u, y, nờ, uyn'], ['uyt', ['u', 'y', 't'], 'u, y, tờ, uýt'], ['tuyn', ['t', 'uyn']], ['buýt', ['b', 'uýt'], 'bờ, uýt, buýt', ['uyt', 'uyn']]],
    sort: {
      keys: ['uyn', 'uyt'],
      items: [['b126-tuyt-coi', 'tuýt còi', 'uyt'], ['b126-huyt-sao', 'huýt sáo', 'uyt'], ['b126-dau-luyn', 'dầu luyn', 'uyn'], ['b126-xuyt', 'xoắn xuýt', 'uyt']],
    },
    read: {
      title: 'Đôi bạn', img: 'b126-doc', text: 'Nhà Tuấn có chó Tuyn và mèo Kít. Hai bạn luôn xoắn xuýt bên nhau. Đôi khi, Kít đùa dai, Tuyn gầm gừ, không bằng lòng. Tuấn huýt sáo, thế là Tuyn chạy đến. Một hôm, Tuyn và Kít nghịch bên bờ ao. Kít suýt ngã xuống nước. Tuyn thì không sợ nước. Có lần, nó nhảy xuống ao, đuổi lũ vịt kêu váng cả mặt nước.',
      q: [['Tuyn …', ['là một con chó nhỏ.', 'là một con mèo nhỏ.', 'xoắn xuýt bên nhau.']], ['Kít …', ['là một con mèo nhỏ.', 'là một con chó nhỏ.', 'xoắn xuýt bên nhau.']], ['Tuyn và Kít …', ['xoắn xuýt bên nhau.', 'là một con chó nhỏ.', 'là một con mèo nhỏ.']]],
    },
    trace: ['uyn', 'màn tuyn', 'uyt', 'xe buýt'],
  }),
  L({
    n: 127, t: 'oang – oac', p: 60,
    intro: [['b127-khoang', 'khoang tàu'], ['b127-khoac', 'áo khoác']],
    spell: [['oang', ['o', 'a', 'ng'], 'o, a, ngờ, oang'], ['oac', ['o', 'a', 'c'], 'o, a, cờ, oác'], ['khoang', ['kh', 'oang']], ['khoác', ['kh', 'oác'], 'khờ, oác, khoác', ['oac', 'oang']]],
    sort: {
      keys: ['oang', 'oac'],
      items: [['b127-ba-lo', 'khoác ba lô', 'oac'], ['b127-xoac', 'xoạc chân', 'oac'], ['b127-qua', 'quạ khoang', 'oang'], ['b127-choang', 'áo choàng', 'oang'], ['b127-ngoac', 'ngoác miệng', 'oac'], ['b127-toac', 'nứt toác', 'oac']],
    },
    read: {
      title: 'Thỏ trắng và quạ khoang', img: 'b127-doc', text: 'Thỏ trắng khoe với các bạn: Tớ biết bay. Quạ khoang mắng nó khoác lác. Thỏ tẽn tò. Hôm sau, quạ đang đậu ở bờ rào thì bị chó vồ. Thỏ thấy vậy bèn nhảy lên mô đất trước mặt chó. Thấy thỏ, chó bỏ quạ, lao tới. Nhanh như cắt, thỏ phóng vào rừng. Gặp thỏ, quạ rối rít cảm ơn. Thỏ bẽn lẽn: Hôm trước, em khoác lác. Chị bỏ qua nhé!',
      q: [['Ý nào đúng?', ['Thỏ dũng cảm, mưu trí cứu quạ.', 'Thỏ chê quạ khoác lác.']], ['Ý nào đúng?', ['Quạ cảm ơn thỏ.', 'Thỏ chê quạ khoác lác.']]],
    },
    trace: ['oang', 'khoang tàu', 'oac', 'áo khoác'],
  }),
  L({
    n: 128, t: 'Cá đuôi cờ', p: 62,
    story: [
      ['b128-t1', 'Các loài cá trong hồ mở hội gì? Ai đã vượt lên trước?', 'Các loài cá trong hồ mở hội thi bơi. Cá săn sắt và cá rô vượt lên trước.'],
      ['b128-t2', 'Khi cá săn sắt và cá rô đang cố sức về đích thì chị chim sẻ bay đến nói gì?', 'Chị chim sẻ bay đến, kêu cứu: Diều hâu đang đuổi bắt tôi! Cứu tôi với!'],
      ['b128-t3', 'Cá rô hay cá săn sắt quay lại giúp chị chim sẻ?', 'Cá rô mải bơi về đích. Cá săn sắt liền quay lại giúp chim sẻ.'],
      ['b128-t4', 'Cá săn sắt đã giúp được gì cho chị chim sẻ? Khi nó tiếp tục cuộc thi thì ai đã về đích?', 'Cá săn sắt quẫy đuôi làm nước bắn lên, diều hâu sợ bay đi. Khi nó bơi tiếp thì cá rô đã về đích.'],
      ['b128-t5', 'Tại lễ trao giải, chim sẻ đã nói gì với mọi người?', 'Tại lễ trao giải, chim sẻ kể lại việc cá săn sắt đã cứu mình.'],
      ['b128-t6', 'Vì sao cá săn sắt được trao giải đặc biệt? Vì sao cá săn sắt còn được gọi là cá đuôi cờ?', 'Cá săn sắt được trao giải đặc biệt vì đã dũng cảm cứu bạn. Đuôi nó được gắn lá cờ đỏ, nên từ đó nó được gọi là cá đuôi cờ.'],
    ],
    q: [['Vì sao cá săn sắt được trao giải đặc biệt?', ['Vì đã dũng cảm cứu chim sẻ', 'Vì bơi nhanh nhất', 'Vì to nhất']]],
  }),
  L({
    n: 129, t: 'Ôn tập', p: 63, short: 'Ôn tập',
    read: {
      title: 'Những người bạn tốt', img: 'b129-doc', text: 'Mèo đi thi bơi thuyền. Mỗi đội cần hai vận động viên nhưng mèo chẳng thích ai. Ếch bơi giỏi, nhưng mèo chê miệng ếch rộng ngoác. Lợn chèo khoẻ, nhưng mèo chê lợn béo. Cuối cùng, mèo chèo thuyền một mình. Vừa ra xa bờ, thuyền tròng trành, mèo rơi xuống nước. Ếch vội đưa mèo lên bờ. Lợn lấy khăn, choàng cho mèo. Mèo xuýt xoa: Các bạn thật tuyệt. Xin lỗi các bạn nhé!',
    },
    choose: [{ name: 'Chọn dấu chấm hay dấu chấm hỏi', q: [['Câu nào viết đúng?', ['Ai là bạn tốt của mèo?', 'Ai là bạn tốt của mèo.']], ['Câu nào viết đúng?', ['Mèo xin lỗi hai bạn ếch và lợn.', 'Mèo xin lỗi hai bạn ếch và lợn?']], ['Câu nào viết đúng?', ['Vì sao mèo xin lỗi hai bạn ếch và lợn?', 'Vì sao mèo xin lỗi hai bạn ếch và lợn.']]] }],
    trace: ['Các bạn', 'thật tuyệt'],
  }),
  L({
    n: 130, t: 'oăng – oăc', p: 64,
    intro: [['b130-hoang', 'con hoẵng'], ['b130-ngoac-tay', 'ngoắc tay']],
    spell: [['oăng', ['o', 'ă', 'ng'], 'o, ă, ngờ, oăng'], ['oăc', ['o', 'ă', 'c'], 'o, ă, cờ, oắc'], ['hoẵng', ['h', 'oẵng'], 'hờ, oăng, hoăng, ngã, hoẵng', ['oăng', 'oăc']], ['ngoắc', ['ng', 'oắc'], 'ngờ, oắc, ngoắc', ['oăc', 'oăng']]],
    pick: [{ name: 'Tìm từ ngữ ứng với hình', rounds: [['cổ dài ngoẵng', 'b130-huou'], ['ngoắc sừng', 'b130-trau'], ['dấu ngoặc đơn', 'b130-ngoac-don'], ['chớp loằng ngoằng', 'b130-chop'], ['chạy loăng quăng', 'b130-cho']] }],
    read: {
      title: 'Ai can đảm?', img: 'b130-doc', text: 'Ba bạn chơi trong sân. Hoằng liến thoắng khoe khẩu súng nhựa. Thắng vung thanh kiếm gỗ: Tớ chẳng sợ gì. Tiến chưa kịp nói gì thì một đàn ngỗng đi vào sân. Chúng vươn cổ dài ngoẵng, kêu quàng quạc, chúi mỏ về phía trước như định đớp bọn trẻ. Hoằng ngoắc súng vào vai, bỏ chạy. Thắng nấp sau lưng Tiến. Tiến nhặt một cành cây, xua ngỗng. Đàn ngỗng quay đầu chạy miết.',
      q: [['Hoằng …', ['ngoắc súng vào vai, bỏ chạy.', 'nấp sau lưng Tiến.', 'nhặt cành cây, xua ngỗng đi.']], ['Thắng …', ['nấp sau lưng Tiến.', 'ngoắc súng vào vai, bỏ chạy.', 'nhặt cành cây, xua ngỗng đi.']], ['Tiến …', ['nhặt cành cây, xua ngỗng đi.', 'nấp sau lưng Tiến.', 'ngoắc súng vào vai, bỏ chạy.']]],
    },
    trace: ['oăng', 'con hoẵng', 'oăc', 'ngoắc tay'],
  }),
  L({
    n: 131, t: 'oanh – oach', p: 66,
    intro: [['b131-khoanh', 'khoanh bánh'], ['b131-hoach', 'thu hoạch']],
    spell: [['oanh', ['o', 'a', 'nh'], 'o, a, nhờ, oanh'], ['oach', ['o', 'a', 'ch'], 'o, a, chờ, oách'], ['khoanh', ['kh', 'oanh']], ['hoạch', ['h', 'oạch'], 'hờ, oách, hoách, nặng, hoạch', ['oach', 'oanh']]],
    sort: {
      keys: ['oanh', 'oach'],
      items: [['b131-doanh-trai', 'doanh trại', 'oanh'], ['b131-ke-hoach', 'kế hoạch nhỏ', 'oach'], ['b131-oanh', 'chim oanh', 'oanh'], ['b131-toanh', 'giày mới toanh', 'oanh']],
    },
    read: {
      title: 'Bác nông dân và con gấu', img: 'b131-doc', text: 'Một bác nông dân vào rừng cuốc đất, trồng cải củ. Mải gieo hạt, chợt ngoảnh lại, bác thấy một con gấu to lớn đang chạy tới. Gấu quát: Ai cho mi vào rừng của ta? Bác nông dân rất sợ nhưng vẫn bình tĩnh đáp: Hãy để tôi gieo ít cải trên khoảnh đất này. Lúc thu hoạch, tôi chỉ lấy gốc. Tất cả phần còn lại thuộc về ông.',
      q: [['Lúc thu hoạch, bác nông dân chỉ lấy …', ['gốc.', 'lá.']], ['Tất cả phần còn lại …', ['thuộc về gấu.', 'thuộc về bác nông dân.']]],
    },
    trace: ['oanh', 'khoanh bánh', 'oach', 'thu hoạch'],
  }),
  L({
    n: 132, t: 'uênh – uêch', p: 68,
    intro: [['b132-huenh', 'nói huênh hoang'], ['b132-nguech', 'vẽ nguệch ngoạc']],
    spell: [['uênh', ['u', 'ê', 'nh'], 'u, ê, nhờ, uênh'], ['uêch', ['u', 'ê', 'ch'], 'u, ê, chờ, uếch'], ['huênh', ['h', 'uênh']], ['nguệch', ['ng', 'uệch'], 'ngờ, uếch, nguếch, nặng, nguệch', ['uêch', 'uênh']]],
    sort: {
      keys: ['uênh', 'uêch'],
      items: [[null, 'xuềnh', 'uênh', 'xuềnh xoàng'], [null, 'tuệch', 'uêch', 'bộc tuệch'], [null, 'tuếch', 'uêch', 'rỗng tuếch'], [null, 'huếch', 'uêch', 'trống huếch'], [null, 'chuếnh', 'uênh', 'chuếnh choáng'], [null, 'khuếch', 'uêch', 'khuếch khoác']],
    },
    read: {
      title: 'Bác nông dân và con gấu (2)', img: 'b132-doc', text: 'Gấu nghe vậy thì thích lắm. Nó há cái miệng rộng huếch, gật gù: Được, được! Rồi huênh hoang: Sư tử còn phải sợ ta. Mi không giữ lời hứa, ta sẽ cho biết tay! Cải lớn, bác nông dân lấy phần củ trắng nõn nằm dưới đất, để lại ngọn và lá cho gấu. Gấu nếm lá cải, thấy đắng ngắt, tức mà không làm gì được.',
      q: [['Vì sao gấu tức mà không làm gì được?', ['Vì bác nông dân đã làm đúng lời hứa.', 'Vì bác nông dân khoẻ hơn gấu.']]],
    },
    trace: ['uênh', 'huênh hoang', 'uêch', 'nguệch ngoạc'],
  }),
  L({
    n: 133, t: 'uynh – uych', p: 70,
    intro: [['b133-phu-huynh', 'họp phụ huynh'], ['b133-huynh-huych', 'chạy huỳnh huỵch']],
    spell: [['uynh', ['u', 'y', 'nh'], 'u, y, nhờ, uynh'], ['uych', ['u', 'y', 'ch'], 'u, y, chờ, uých'], ['huynh', ['h', 'uynh']], ['huỵch', ['h', 'uỵch'], 'hờ, uých, huých, nặng, huỵch', ['uych', 'uynh']]],
    sort: {
      keys: ['uynh', 'uych'],
      items: [['b133-nga-huych', 'ngã huỵch', 'uych'], ['b133-huynh-quang', 'đèn huỳnh quang', 'uynh'], ['b133-khuynh', 'khuỳnh tay', 'uynh'], ['b133-huych-tay', 'huých tay', 'uych']],
    },
    read: {
      title: 'Hà mã bay', img: 'b133-doc', text: 'Hà mã muốn bay. Chú chọn một bãi rộng, khuỳnh chân lấy đà. Nhưng luýnh quýnh mãi, chú vẫn chẳng bay được. Chú nghĩ: Mình nặng quá. Để giảm cân, sáng sáng, chú chạy huỳnh huỵch. Sau một tháng, chú leo lên mỏm đá, nhảy vọt lên, nhưng lại rơi huỵch xuống đất. May quá, bố chú đã ghi tên chú vào lớp học nhảy dù. Thế là hà mã bay được lên bầu trời. Thật tuyệt!',
      q: [['Hà mã bố giúp con bay lên bầu trời bằng cách nào?', ['Ghi tên con vào lớp học nhảy dù', 'Mua cho con đôi cánh', 'Cho con đi máy bay']]],
    },
    pick: [{ name: 'Con người bay lên bầu trời bằng cách nào?', rounds: [['khinh khí cầu', 'b133-khi-cau'], ['máy bay', 'b133-may-bay'], ['tên lửa', 'b133-ten-lua'], ['tàu vũ trụ', 'b133-ve-tinh']] }],
    trace: ['uynh', 'uych', 'huỳnh huỵch'],
  }),
  L({
    n: 134, t: 'Chim hoạ mi', p: 72,
    story: [
      ['b134-t1', 'Nhà vua sống ở đâu? Nơi đó có khu vườn thế nào? Điều kì diệu nhất trong khu vườn là gì?', 'Nhà vua sống trong một cung điện nguy nga. Khu vườn của vua rất đẹp. Điều kì diệu nhất là có một chú chim hoạ mi hót rất hay.'],
      ['b134-t2', 'Nhà vua làm gì để được nghe hoạ mi hót? Tiếng hót của hoạ mi làm vua cảm thấy thế nào?', 'Nhà vua cho người mời hoạ mi vào cung hót. Tiếng hót của hoạ mi làm vua cảm động, rơi nước mắt.'],
      ['b134-t3', 'Ít lâu sau, nhà vua được tặng một con chim máy có đặc điểm gì? Vì sao hoạ mi thật buồn bã bay đi?', 'Ít lâu sau, vua được tặng một con chim máy nạm ngọc, lên dây cót là hót. Vua mải nghe chim máy, hoạ mi thật buồn bã bay đi.'],
      ['b134-t4', 'Lúc bệnh nặng, nhà vua khao khát điều gì? Vì sao chim máy không hót được?', 'Nhà vua lâm bệnh nặng, khao khát được nghe tiếng chim hót. Nhưng chim máy đã hỏng dây cót, không hót được nữa.'],
      ['b134-t5', 'Hoạ mi thật làm gì? Tiếng hót của nó giúp nhà vua thế nào?', 'Hoạ mi thật bay về, đậu bên cửa sổ hót. Tiếng hót giúp nhà vua khoẻ dần lên.'],
      ['b134-t6', 'Nhà vua muốn giữ hoạ mi ở lại nhưng nó xin vua điều gì? Nó hứa gì?', 'Vua muốn giữ hoạ mi ở lại. Hoạ mi xin được tự do bay đi, và hứa sẽ thường xuyên về hót cho vua nghe.'],
    ],
    q: [['Điều gì giúp nhà vua khoẻ lại?', ['Tiếng hót của hoạ mi thật', 'Con chim máy', 'Thuốc của thầy lang']]],
  }),
  L({
    n: 135, t: 'Ôn tập', p: 73, short: 'Ôn tập',
    read: {
      title: 'Cá to, cá nhỏ', img: 'b135-doc', text: 'Cá to đuổi bắt lũ cá nhỏ. Lũ cá nhỏ luýnh quýnh xin tha mạng. Cá to ngoác miệng rộng huếch, huênh hoang: Kẻ yếu phải làm thức ăn cho kẻ mạnh. Xoạch! Một chiếc lưới quăng xuống, chụp lấy cả bọn. Lũ cá nhỏ lọt qua mắt lưới, thoát hết. Chỉ cá to bị mắc lại. Lũ cá nhỏ ngoảnh đầu, bảo cá to: Tiếc là có kẻ còn mạnh hơn bác.',
      q: [['Khi lưới được kéo lên:', ['Lũ cá nhỏ lọt qua mắt lưới, cá to bị mắc lại.', 'Cá to, cá nhỏ đều bị mắc lưới.']]],
    },
    choose: [SQ([['cá', 'ká'], ['kiêu ngạo', 'ciêu ngạo']], 'Tìm chữ c hay k')],
    trace: ['Cá to', 'kiêu ngạo'],
  }),
  L({
    n: 136, t: 'oai – oay – uây', p: 74, short: 'oai oay uây',
    intro: [['b136-thoai', 'điện thoại'], ['b136-xoay', 'ghế xoay'], ['b136-khuay', 'khuấy bột']],
    spell: [['oai', ['o', 'a', 'i'], 'o, a, i, oai'], ['oay', ['o', 'a', 'y'], 'o, a, y, oay'], ['uây', ['u', 'â', 'y'], 'u, â, y, uây'], ['thoại', ['th', 'oại'], 'thờ, oai, thoai, nặng, thoại', ['oai', 'oay']], ['xoay', ['x', 'oay']]],
    sort: {
      keys: ['oai', 'oay', 'uây'],
      items: [['b136-xoai', 'quả xoài', 'oai'], ['b136-ngoai', 'ngoái lại', 'oai'], ['b136-nguay', 'ngoe nguẩy', 'uây'], ['b136-loc-xoay', 'lốc xoáy', 'oay']],
    },
    read: {
      title: 'Thám tử mèo', img: 'b136-doc', text: 'Mèo mơ làm thám tử. Nhưng đội thám tử chỉ tuyển những chú chó. Thấy mèo, họ nguây nguẩy bỏ đi. Mèo loay hoay nghĩ kế. Nó hoá trang thành cún và trúng tuyển. Vào đội, mèo khám phá ra một vụ trộm lớn. Cả đội mừng công. Đúng lúc được nhà vua gắn huân chương, mèo khoái chí, buột miệng kêu: Meo! Nhưng vì có tài, mèo vẫn được giữ lại. Nó còn lên chức đội trưởng.',
      q: [['Ý nào đúng?', ['Mèo được giữ lại ở đội thám tử vì nó có tài.', 'Mèo được tuyển vào đội thám tử vì nó là mèo.']]],
    },
    trace: ['oai', 'xoài', 'oay', 'xoay', 'uây', 'khuấy'],
  }),
  L({
    n: 137, t: 'Vần ít gặp', p: 76, short: 'Vần ít gặp',
    intro: [['b137-xoong', 'cái xoong'], ['b137-sooc', 'quần soóc'], ['b137-tuyp', 'đèn tuýp'], ['b137-ngoan', 'ngoằn ngoèo'], ['b137-nguech', 'nguều ngoào'], ['b137-khuyu', 'khuỷu tay']],
    sort: {
      name: 'Tiếng nào có vần oap? Tiếng nào có vần uâng?', keys: ['oap', 'uâng', 'oong', 'ooc'],
      items: [['b137-oap', 'ì oạp', 'oap'], [null, 'bâng khuâng', 'uâng'], ['b137-boong', 'boong tàu', 'oong'], ['b137-dan-ooc', 'đàn oóc', 'ooc']],
    },
    read: {
      title: 'Ý kiến hay', img: 'b137-doc', text: 'Thỏ và các bạn ra biển nghỉ hè. Đêm ấy, cả bọn lên boong tàu. Trăng sáng hơn đèn tuýp. Thỏ mở đàn oóc, hát vang. Mèo tiu nghỉu vì vừa câu hụt con cá to cũng ngoao ngoao hoà giọng. Vượn làm xiếc, tay nguều ngoào đu trên sợi dây buồm ngoằn ngoèo. Còn sóc, nó bâng khuâng nghe sóng vỗ ì oạp. Nó bảo: Tớ muốn kiếm vỏ ốc biển tặng mẹ. Cả bọn ồ lên: Ý kiến quá hay!',
      q: [['Mèo …', ['ngoao ngoao.', 'ì oạp.', 'bâng khuâng.']], ['Dây buồm …', ['ngoằn ngoèo.', 'ngoao ngoao.', 'ì oạp.']], ['Sóng …', ['ì oạp.', 'ngoằn ngoèo.', 'bâng khuâng.']]],
    },
    trace: ['cái xoong', 'quần soóc', 'đèn tuýp'],
  }),
];
