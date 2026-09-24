---
title: 하늘소 사람들
icon: fas fa-user-friends
order: 4
---

2006년 9월 하늘소 홈페이지의 [하늘소사람들](https://web.archive.org/web/20060924041131/http://hanulso.knu.ac.kr/people/people.php) 명단을 옮겼습니다. 당시 홈페이지에 가입해 명단에 올린 분들만 있어서 **비어 있는 기수가 많고, 20기 이후는 명단이 없습니다.**

> 명단에 더하고 싶거나, 고치거나 빼고 싶은 내용이 있으면 [커뮤니티]({{ '/community/' | relative_url }})로 알려 주세요. 홈페이지 주소는 2006년 것이라 대부분 닫혔습니다. 그래서 인터넷 아카이브에 남은 사본으로 연결합니다.
{: .prompt-info }

{% assign people = site.data.people %}
{% assign max_gen = people | map: 'gen' | sort | last %}

{% for g in (1..max_gen) %}
{% assign members = people | where: 'gen', g %}
<h2 id="gen-{{ g }}">{{ g }}기</h2>
{% if members.size == 0 %}
<p class="text-muted">명단에 올라온 분이 없습니다.</p>
{% else %}
<div class="table-wrapper"><table>
<thead><tr><th>이름</th><th>닉네임</th><th>아이디</th><th>홈페이지</th></tr></thead>
<tbody>
{% for p in members %}
<tr>
<td>{{ p.name }}</td>
<td>{{ p.nick }}</td>
<td>{{ p.id }}</td>
<td>{% if p.link %}<a href="{{ p.link }}">{{ p.link | remove: 'https://' | remove: 'http://' }}</a>{% elsif p.homepage %}<a href="https://web.archive.org/web/2006/{{ p.homepage }}">{{ p.homepage | remove: 'http://' }}</a>{% endif %}</td>
</tr>
{% endfor %}
</tbody>
</table></div>
{% endif %}
{% endfor %}

## 임원

옛 홈페이지 옆 칸의 「간부」 기록입니다. 캡처된 날짜의 것만 남아 있습니다.

| 캡처 날짜 | 회장 | 부회장 | 서기 |
|---|---|---|---|
| 2006년 3월 | 19기 한승욱 | 19기 오한빈 | 19기 김새롬 |
| 2006년 9월 | 16기 차정현 | 19기 오한빈 | 20기 서정인 |
| 2007년 4월 | 18기 조용호 | 17기 김창곤 | 20기 서정인 |

지도교수는 세 기록 모두 강순주 교수(Real-Time System Lab)입니다. 다른 해의 임원을 기억하시면 알려 주세요.
