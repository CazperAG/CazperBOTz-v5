import fetch from 'node-fetch'
let handler = async(m, {
	conn, text, usedPrefix, command, args
}) => {
	if (!args || !args[0]) return conn.reply(m.chat, `Silahkan masukan pesannya\nContoh Penggunaan: ${usedPrefix + command} ${nomorown} pesan untuknya`, fakes, fakeyt)
	let ngen = ['|']
	if (args[0].includes(ngen)) throw 'Ganti Simbol | Jadi spasi'
	if (args[0].length > 14) throw 'Nomor Kepanjangan'
	if (args[0].length < 7) throw 'Nomor Kependekan'
	if (args[0].startsWith('0')) throw 'Gunakan format 62'
	
    let mention = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : args[0] ? (args[0].replace(/[@ .+-]/g, '') + '@s.whatsapp.net') : ''
    if (!mention) throw 'Tag salah satu lah'
	let txt = (args.length > 1 ? args.slice(1).join(' ') : '') || ''
	let q = m.quoted ? m.quoted : m
	let mime = (q.msg || q).mimetype || ''
	let tujuan = `👋 Saya *${conn.user.name}*, Pesan Untuk Kamu
👥 Dari : *PENGIRIM RAHASIA*

${htki} 💌 Pesan ${htka}
${htjava} ${txt}
`
	let cap = `${htki} PESAN RAHASIA ${htka}
Anda Ingin Mengirimkan Pesan ke pacar/sahabat/teman/doi/
mantan?, tapi Tidak ingin tau siapa Pengirimnya?
Kamu bisa menggunakan Bot ini
Contoh Penggunaan: ${usedPrefix + command} ${nomorown} pesan untuknya

Contoh: ${usedPrefix + command} ${nomorown} hai`
	if (!m.quoted) {
		await conn.sendHydrated(mention, tujuan, cap, thumbnailUrl.getRandom(), 'https://wa.me/' + m.sender.split("@s.whatsapp.net")[0], 'KIRIM PESAN', null, null, [
			[null, null]
		], null)
	} else {
		await conn.sendHydrated(mention, tujuan, cap, thumbnailUrl.getRandom(), 'https://wa.me/' + m.sender.split("@s.whatsapp.net")[0], 'KIRIM PESAN', null, null, [
			[null, null]
		], null)
		let media = q ? await m.getQuotedObj() : false || m
		await conn.copyNForward(mention, media, false).catch(_ => _)
	}
	let suks = `Mengirim Pesan *${mime ? mime : 'Teks'}*
👥 Dari : @${m.sender.replace(/@.+/, '')}
👥 Untuk : @${mention.replace(/@.+/, '')}

${htki} 💌 Pesan ${htka}
${htjava} ${txt}
`
	await conn.sendButton(m.chat, suks, wm, null, [['Menu', '/menu']], m, { mentions: conn.parseMention(suks) })
}
handler.help = ['menfess4 <628XXXXXXXXXX> <pesan>']
handler.tags = ['menbalas']

handler.command = /^(menfess4|confess4|menfes4|confes4)$/i

handler.limit = true
handler.private = true
export default handler